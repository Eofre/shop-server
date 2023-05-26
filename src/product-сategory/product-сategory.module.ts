import { Module } from '@nestjs/common';
import { ProductСategoryController } from './product-сategory.controller';
import { ProductСategoryService } from './product-сategory.service';
import { ProductCategory } from './product-сategory.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports:[SequelizeModule.forFeature([ProductCategory])],
  controllers: [ProductСategoryController],
  providers: [ProductСategoryService],
  exports: [ProductСategoryService],
})
export class ProductСategoryModule {}
