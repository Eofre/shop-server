import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { ProductCategory } from "src/product-сategory/product-сategory.model";
import { ShoppingCart } from "src/shopping-cart/shopping-cart.model";

@Table({
    tableName: "product"
  })
export class Product extends Model {

    @Column
    name: string

    @Column
    description: string

    @Column({ defaultValue: 0})
    price: number

    @Column
    image: string

    @Column({ defaultValue: 0})
    quantityInStock: number

    @ForeignKey(() => ProductCategory) 
    @Column
    idProductCategory: number;

    @BelongsTo(() => ProductCategory) 
    productCategory: ProductCategory;

    // @HasMany(() => ShoppingCart)
    // shoppingCarts: ShoppingCart[];
}