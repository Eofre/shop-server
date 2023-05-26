import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class createUserDto {
    @ApiProperty({ example: 'Ermak123'})
    @IsNotEmpty()
    readonly username: string

    @ApiProperty({ example: '123'})
    @IsNotEmpty()
    readonly password: string

    @ApiProperty({ example: 'Иванов Иван Иванович'})
    @IsNotEmpty()
    readonly fullName: string

    @ApiProperty({ example: 'ermak@gmail.com'})
    @IsNotEmpty()
    readonly email: string

    @ApiProperty({ example: '89999999999'})
    @IsNotEmpty()
    readonly numberPhone: string
}