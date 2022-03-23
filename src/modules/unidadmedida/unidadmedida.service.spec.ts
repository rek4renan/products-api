import { Test, TestingModule } from '@nestjs/testing';
import { UnidadmedidaService } from './unidadmedida.service';

describe('UnidadmedidaService', () => {
  let service: UnidadmedidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnidadmedidaService],
    }).compile();

    service = module.get<UnidadmedidaService>(UnidadmedidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
