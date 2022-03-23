import { Test, TestingModule } from '@nestjs/testing';
import { UnidadmedidaController } from './unidadmedida.controller';

describe('UnidadmedidaController', () => {
  let controller: UnidadmedidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnidadmedidaController],
    }).compile();

    controller = module.get<UnidadmedidaController>(UnidadmedidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
