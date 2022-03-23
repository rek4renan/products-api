import { Test, TestingModule } from '@nestjs/testing';
import { ClasificadorService } from './clasificador.service';

describe('ClasificadorService', () => {
  let service: ClasificadorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClasificadorService],
    }).compile();

    service = module.get<ClasificadorService>(ClasificadorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
