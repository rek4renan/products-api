import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductoModule } from './modules/producto/producto.module';
import { CaracteristicasModule } from './modules/caracteristicas/caracteristicas.module';
import { MarcaModule } from './modules/marca/marca.module';
import { ClasificadorModule } from './modules/clasificador/clasificador.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { UnidadmedidaModule } from './modules/unidadmedida/unidadmedida.module';
import { ImagenesModule } from './modules/imagenes/imagenes.module';

// IMPORTAR TYPEORM PARA CONEXION A LA BD
import { TypeOrmModule } from '@nestjs/typeorm'
import { RegisterModule } from './modules/register/register.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'products',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    ProductoModule,
    CaracteristicasModule, 
    MarcaModule, 
    ClasificadorModule, 
    CategoriaModule, 
    UnidadmedidaModule, 
    ImagenesModule,
    RegisterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
