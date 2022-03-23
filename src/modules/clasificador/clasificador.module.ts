import { Module } from '@nestjs/common';
import { ClasificadorService } from './clasificador.service';
import { ClasificadorController } from './clasificador.controller';

@Module({
  providers: [ClasificadorService],
  controllers: [ClasificadorController]
})
export class ClasificadorModule {}
