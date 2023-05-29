import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ShoppingCartService } from './shopping-cart.service';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { AddToCartDto } from './dto/add-to-cart.dto';

@Controller('shopping-cart')
export class ShoppingCartController {
    constructor(private readonly shoppingCartService: ShoppingCartService) {}

    @UseGuards(AuthenticatedGuard)
    @Get(':id')
    getAll(@Param('id') userId: string) {
        return this.shoppingCartService.findAll(userId);
    }

    @UseGuards(AuthenticatedGuard)
    @Post('/add')
    addToCart(@Body() addToCartDto: AddToCartDto) {
        return this.shoppingCartService.add(addToCartDto);
    }

    @UseGuards(AuthenticatedGuard)
    @Patch('/count/:id')
    updateCount(@Body() { count }: { count: number},
    @Param('id') productId: string) {
        return this.shoppingCartService.updateCount(count, productId);
    }

    @UseGuards(AuthenticatedGuard)
    @Get('/item/:userId/:productId')
    findCartItem(@Param('userId') userId: string, @Param('productId') productId: string) {
      return this.shoppingCartService.findCartItemByProductId(userId, productId);
    }

    @UseGuards(AuthenticatedGuard)
    @Delete('/remove/:userId/:productId')
    async remove(@Param('userId') userId: string, @Param('productId') productId: string): Promise<void> {
        await this.shoppingCartService.remove(userId, productId);
    }
}
