import { MinLength, IsNotEmpty, IsEmail } from 'class-validator'

export class DoLoginDTO {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    password: string;
}

