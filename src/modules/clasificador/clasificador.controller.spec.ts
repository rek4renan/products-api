import { Test, TestingModule } from '@nestjs/testing';
import { ClasificadorController } from './clasificador.controller';

describe('ClasificadorController', () => {
  let controller: ClasificadorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClasificadorController],
    }).compile();

    controller = module.get<ClasificadorController>(ClasificadorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
