import { IsNotEmpty } from "class-validator"

export class AddToCartDto {
    @IsNotEmpty()
    readonly userId: string

    @IsNotEmpty()
    readonly productId: string

}