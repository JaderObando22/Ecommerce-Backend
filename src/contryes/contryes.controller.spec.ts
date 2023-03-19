import { Test, TestingModule } from '@nestjs/testing';
import { ContryesController } from './contryes.controller';
import { ContryesService } from './contryes.service';

describe('ContryesController', () => {
  let controller: ContryesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContryesController],
      providers: [ContryesService],
    }).compile();

    controller = module.get<ContryesController>(ContryesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
