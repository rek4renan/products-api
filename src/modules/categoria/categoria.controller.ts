import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
// Importamos los servicios
import { CategoriaService } from './categoria.service';
// Importamos el dto declarado
import { CreateCategoriaDto } from './dto/categoria.dto';

@Controller('categoria')
export class CategoriaController {
    constructor(
        private categoriaService: CategoriaService
    ) { }

    @Get()
    findAll() {
        return this.categoriaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.categoriaService.findOne(id);
    }

    @Post()
    createOne(@Body() body: CreateCategoriaDto) {
        return this.categoriaService.create(body);
    }

    @Put(':id')
    updateOne(@Param('id') id: number, @Body() body: CreateCategoriaDto) {
        return this.categoriaService.update(id, body);
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.categoriaService.remove(id);
    }
}
