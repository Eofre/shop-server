import { IsNotEmpty } from "class-validator";

export class createUserDto {
    @IsNotEmpty()
    readonly username: string

    @IsNotEmpty()
    readonly password: string

    @IsNotEmpty()
    readonly fullName: string

    @IsNotEmpty()
    readonly email: string

    @IsNotEmpty()
    readonly numberPhone: string
}