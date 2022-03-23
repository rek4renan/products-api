import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CategoriaEntity {
  @PrimaryGeneratedColumn()
  id_categoria: number;

  @Column({length:50, nullable: true})
  descripcion: string;

  @Column({ nullable: true })
  id_categoria_padre: number;
}