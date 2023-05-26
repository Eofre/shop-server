import { Module } from '@nestjs/common';
import { ShoppingCartController } from './shopping-cart.controller';
import { ShoppingCartService } from './shopping-cart.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UserModule } from 'src/user/user.module';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports:[SequelizeModule.forFeature([ShoppingCart]), UserModule, ProductModule],
  controllers: [ShoppingCartController],
  providers: [ShoppingCartService],
  exports: [ShoppingCartService]
})
export class ShoppingCartModule {}
