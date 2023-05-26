import { Column, HasMany, Model, Table, Unique } from "sequelize-typescript";
import { Product } from "src/product/product.model";

@Table({
    tableName: "product_category"
  })
export class ProductCategory extends Model {
    
    @Unique
    @Column
    name: string;

    @HasMany(() => Product)
    products: Product[];
}