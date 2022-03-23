import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriaEntity } from './entities/categoria.entity';
@Injectable()
export class CategoriaService {

    constructor(
        @InjectRepository(CategoriaEntity) private categoriaRepo: Repository<CategoriaEntity>,
    ) { }
    findAll() {
        return this.categoriaRepo.find();
    }

    findOne(id: number) {
        return this.categoriaRepo.findOne(id);
    }

    create(body: any) {
        const newCategoria = new CategoriaEntity();
        newCategoria.descripcion = body.name;
        newCategoria.id_categoria_padre = body.id_categoria_padre;
        // const newTask = this.tasksRepo.create(body);
        return this.categoriaRepo.save(newCategoria);
    }

    async update(id: number, body: any) {
        const task = await this.categoriaRepo.findOne(id);
        this.categoriaRepo.merge(task, body);
        return this.categoriaRepo.save(task);
    }

    async remove(id: number) {
        await this.categoriaRepo.delete(id);
        return true;
    }


}
