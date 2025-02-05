import { Test, TestingModule } from '@nestjs/testing';
import { CoffeController } from './coffew.controller';

describe('CoffeController', () => {
  let controller: CoffeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeController],
    }).compile();

    controller = module.get<CoffeController>(CoffeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
