import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Product } from './product.model';
import { ProductCategory } from 'src/product-сategory/product-сategory.model';
import { ResponceProductDto } from './dto/response-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product)
    private productModel: typeof Product,
  ) {}

  async getAllProducts(): Promise<ResponceProductDto[]> {
    const products = await this.productModel.findAll({ include: [ProductCategory] });

    const productsDTO: ResponceProductDto[] = products.map((product) => ({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantityInStock: product.quantityInStock,
      productCategory: product.productCategory,
    }));

    return productsDTO;
  }

  async getProductById(id: string): Promise<ResponceProductDto> {
    const product = await this.productModel.findOne({
      where: { id: id },
      include: [ProductCategory],
    });

    const productDTO: ResponceProductDto = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
      quantityInStock: product.quantityInStock,
      productCategory: product.productCategory,
    }

    return productDTO;
  }

  findOne(filter:{ where: { id: string } }): Promise<Product> {
    return this.productModel.findOne({...filter})
  }
}
