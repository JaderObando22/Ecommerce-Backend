import { Test, TestingModule } from '@nestjs/testing';
import { ContryesService } from './contryes.service';

describe('ContryesService', () => {
  let service: ContryesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContryesService],
    }).compile();

    service = module.get<ContryesService>(ContryesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
