import { MinLength, IsNotEmpty, IsEmail } from 'class-validator'

export class CreateRegisterDto {
    @IsNotEmpty()
    fullname: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;

    phone: string;

    agency: string;
}

