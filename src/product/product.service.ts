import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.findAll();
  }

  findOne(filter:{ where: { id: string } }): Promise<Product> {
    return this.productModel.findOne({...filter})
  }
}
