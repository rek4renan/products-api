import { Module } from '@nestjs/common';
import { UnidadmedidaService } from './unidadmedida.service';
import { UnidadmedidaController } from './unidadmedida.controller';

@Module({
  providers: [UnidadmedidaService],
  controllers: [UnidadmedidaController]
})
export class UnidadmedidaModule {}
