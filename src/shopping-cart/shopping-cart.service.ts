import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { ShoppingCart } from './shopping-cart.model';
import { UserService } from 'src/user/user.service';
import { ProductService } from 'src/product/product.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { Product } from 'src/product/product.model';

@Injectable()
export class ShoppingCartService {
    constructor(
        @InjectModel(ShoppingCart)
        private shoppingCartModel: typeof ShoppingCart,
        private readonly userService: UserService,
        private readonly productService: ProductService,
    ) {}

    async findAll(userId: number | string): Promise<ShoppingCart[]> {
        return this.shoppingCartModel.findAll({ where: { userId },
            include: [Product] })
    }

    async add(addToCartDto: AddToCartDto) {
        const cart = new ShoppingCart();
        const user = await this.userService.findOne({ where: { id: addToCartDto.userId }})
        const product = await this.productService.findOne({ where: { id: addToCartDto.productId }})

        cart.userId = user.id;
        cart.productId = product.id;

        return cart.save();
    }

    async updateCount(count: number, productId: string): Promise<{count: number}> {
        await this.shoppingCartModel.update({ count }, { where: { productId }})
        const cart = await this.shoppingCartModel.findOne({where: { productId }})

        return { count: cart.count};
    }

    async calculateTotalCost(userId: number | string): Promise<number> {
        const cartItems = await this.shoppingCartModel.findAll({ where: { userId } });
        let totalCost = 0;
    
        for (const item of cartItems) {
          const itemCost = await this.calculateItemCost(item.productId, item.count);
          totalCost += itemCost;
        }
    
        return totalCost;
      }

    async calculateItemCost(productId: string, count: number): Promise<number> {
        const product = await this.productService.findOne( {where: { id: productId }})
        const productPrice = +product.price;
        const itemCost = productPrice * count;

        return itemCost;
      }

    async remove(userId: number | string, productId: string): Promise<void> {
        const product = await this.shoppingCartModel.findOne( { where: { userId, productId } });

        await product.destroy();
    }

    async removeAll(userId: number): Promise<void> {
        await this.shoppingCartModel.destroy( {where: { userId }});
    }

    async findCartItemByProductId(userId: number | string, productId: string): Promise<ShoppingCart | null> {
        return this.shoppingCartModel.findOne({ where: { userId, productId } });
      }
      
}
