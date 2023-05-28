import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { ResponceProductDto } from './dto/response-product.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @UseGuards(AuthenticatedGuard)
  @Get('/all')
  async getAllProducts(): Promise<ResponceProductDto[]> {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(@Param('id') id: string): Promise<ResponceProductDto> {
    return this.productService.getProductById(id);
  }
}