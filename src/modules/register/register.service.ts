import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRegisterDto } from './dto/create-register.dto';
import { DoLoginDTO } from './dto/login.dto';
import { RegisterEntity } from './entities/register.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class RegisterService {

  constructor(
    @InjectRepository(RegisterEntity) private registryRepo: Repository<RegisterEntity>,
  ) { }


  async create(createRegisterDto: CreateRegisterDto) {
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(createRegisterDto.password, salt);

    const newRegistry = new RegisterEntity();
    newRegistry.fullname = createRegisterDto.fullname;
    newRegistry.username = createRegisterDto.username;
    newRegistry.email = createRegisterDto.email;
    newRegistry.password = password;
    newRegistry.phone = createRegisterDto.phone;
    newRegistry.agency = createRegisterDto.agency;

    return await this.registryRepo.save(newRegistry);
  }

  findAll() {
    return this.registryRepo.find();
  }

  findOne(id: number) {
    return this.registryRepo.findOne(id);
  }

  async update(id: number, updateRegisterDto: any) {
    const registro = await this.registryRepo.findOne(id);
    this.registryRepo.merge(registro, updateRegisterDto);
    return this.registryRepo.save(registro);
  }

  async remove(id: number) {
    await this.registryRepo.delete(id);
    return true;
  }

  async login(loginDTO : DoLoginDTO){
    const { email, password} = loginDTO;
    const user = await this.registryRepo.findOne({ email });
    if (user){
      if (await bcrypt.compare(password, user.password)){
        return user;
      }
    }

  }
}
