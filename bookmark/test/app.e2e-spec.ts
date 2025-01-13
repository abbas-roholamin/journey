import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { PrismaService } from '../src/prisma/prisma.service';
import * as pactum from 'pactum';
import { CreateBookmarkDto, EditBookmarkDto } from '../src/bookmark/dto';

describe('init', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const AppModuleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = AppModuleRef.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        // forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    );

    await app.init();
    await app.listen(3001);

    prisma = app.get(PrismaService);
    await prisma.cleanDb();

    pactum.request.setBaseUrl('http://localhost:3001');
  });

  // auth
  describe('auth', () => {
    describe('signup', () => {
      it('should throw if miss first name and last name', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({
            email: 'ali5@gmail.com',
            password: '123456789',
          })
          .expectStatus(400);
      });

      it('should throw if body is empty', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({})
          .expectStatus(400);
      });

      it('should signup a new user', () => {
        return pactum
          .spec()
          .post('/auth/register')
          .withBody({
            first_name: 'ali',
            last_name: 'ali',
            email: 'ali5@gmail.com',
            password: '123456789',
          })
          .expectStatus(201)
          .inspect();
      });
    });

    describe('signin', () => {
      it('should throw if miss email', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            password: '123456789',
          })
          .expectStatus(400);
      });

      it('should throw if body is empty', () => {
        return pactum.spec().post('/auth/login').withBody({}).expectStatus(400);
      });

      it('should signin a user', () => {
        return pactum
          .spec()
          .post('/auth/login')
          .withBody({
            email: 'ali5@gmail.com',
            password: '123456789',
          })
          .expectStatus(200)
          .stores('token', 'access_token');
      });
    });
  });

  // user
  describe('user', () => {
    describe('get', () => {
      it('should get user', () => {
        return pactum
          .spec()
          .get('/user')
          .withHeaders({ Authorization: 'Bearer $S{token}' })
          .expectStatus(200)
          .expectBodyContains('ali');
      });
    });
  });

  // Bookmark
  describe('bookmark', () => {
    describe('create', () => {
      it('should create a bookmark', () => {
        const dto: CreateBookmarkDto = {
          title: 'First Bookmark',
          link: 'https://www.youtube.com/watch?v=d6WC5n9G_sM',
        };

        return pactum
          .spec()
          .post('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .withBody(dto)
          .expectStatus(201)
          .stores('bookmarkId', 'id');
      });
    });

    describe('get', () => {
      it('should get bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .expectStatus(200)
          .expectJsonLength(1);
      });
    });

    describe('get', () => {
      it('should get bookmark', () => {
        return pactum
          .spec()
          .get('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .expectStatus(200)
          .expectBodyContains('$S{bookmarkId}'); //.expectJsonMatch({id: '$S{bookmarkId}'}) would have been the correct way of testing to prevent false positive matches with other numbers, user id etc.
      });
    });

    describe('edit', () => {
      const dto: EditBookmarkDto = {
        title:
          'Kubernetes Course - Full Beginners Tutorial (Containerize Your Apps!)',
        description:
          'Learn how to use Kubernetes in this complete course. Kubernetes makes it possible to containerize applications and simplifies app deployment to production.',
      };
      it('should edit a bookmark', () => {
        return pactum
          .spec()
          .patch('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .withBody(dto)
          .expectStatus(200)
          .expectBodyContains(dto.title)
          .expectBodyContains(dto.description);
      });
    });

    describe('delete', () => {
      it('should delete bookmark', () => {
        return pactum
          .spec()
          .delete('/bookmarks/{id}')
          .withPathParams('id', '$S{bookmarkId}')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .expectStatus(204);
      });

      it('should get empty bookmarks', () => {
        return pactum
          .spec()
          .get('/bookmarks')
          .withHeaders({
            Authorization: 'Bearer $S{token}',
          })
          .expectStatus(200)
          .expectJsonLength(0);
      });
    });
  });

  afterAll(() => {
    app.close();
  });
});
