import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ResponceProductDto } from './dto/response-product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/all')
  async getAllProducts(): Promise<ResponceProductDto[]> {
    return this.productService.getAllProducts();
  }
}