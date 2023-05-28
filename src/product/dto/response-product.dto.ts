import { IsNotEmpty } from "class-validator"
import { ProductCategory } from "src/product-сategory/product-сategory.model"

export class ResponceProductDto {
    @IsNotEmpty()
    readonly id: string

    @IsNotEmpty()
    readonly name: string

    @IsNotEmpty()
    readonly description: string

    @IsNotEmpty()
    readonly price: number

    @IsNotEmpty()
    readonly image: string

    @IsNotEmpty()
    readonly quantityInStock: number

    @IsNotEmpty()
    readonly productCategory: ProductCategory
}