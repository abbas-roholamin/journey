import {
  //  Global,
  Module,
} from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';

// @Global()
@Module({
  controllers: [CatController],
  providers: [CatService],
  exports: [
    CatService,
    //  CommonModule
  ],
  // imports: [CommonModule],
})
export class CatModule {
  // constructor(private catsService: CatsService) {}
}
