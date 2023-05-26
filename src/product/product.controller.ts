import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/all')
  async getAllProducts(): Promise<Product[]> {
    return this.productService.getAllProducts();
  }
}