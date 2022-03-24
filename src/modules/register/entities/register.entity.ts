import { Entity, Column, PrimaryGeneratedColumn, BeforeInsert} from "typeorm";
@Entity()
export class RegisterEntity {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({length:50})
  fullname: string;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  phone: string;

  @Column({nullable: true})
  agency: string;

  // @BeforeInsert()
  // async setPassword(password: string){
  //   const salt = await bcrypt.genSalt();
  //   const password = await bcrypt.hash(password, salt);
  // }
}