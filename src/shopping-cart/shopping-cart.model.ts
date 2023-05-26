import { BelongsTo, Column, ForeignKey, Model, Table} from "sequelize-typescript";
import { Product } from "../product/product.model";
import { User } from "../user/user.model";

@Table({
    tableName: "shopping_cart"
  })
export class ShoppingCart extends Model {
    
    @ForeignKey(() => User)
    @Column
    userId: string;
  
    @ForeignKey(() => Product)
    @Column
    productId: string;
    
    @BelongsTo(() => User)
    user: User;

    @BelongsTo(() => Product)
    product: Product;
   
    @Column({ defaultValue: 1})
    count: number
  }