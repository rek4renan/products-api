import { Module } from '@nestjs/common';
import { ImagenesService } from './imagenes.service';
import { ImagenesController } from './imagenes.controller';

@Module({
  providers: [ImagenesService],
  controllers: [ImagenesController]
})
export class ImagenesModule {}
