import { Column, DataType, HasMany, Model, Table, Unique } from "sequelize-typescript";
import { ShoppingCart } from "../shopping-cart/shopping-cart.model";

@Table({
    tableName: "user"
  })
export class User extends Model {

    @Unique
    @Column
    username: string

    @Column
    password: string

    @Column
    fullName: string

    @Unique
    @Column
    email: string

    @Unique
    @Column({ type: DataType.STRING(11) })
    numberPhone: string;

    @Column
    address: string

}