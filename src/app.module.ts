import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from "@nestjs/sequelize"
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductСategoryModule } from './product-сategory/product-сategory.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';


@Module({
  imports: [SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useClass: SequelizeConfigService,
  }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UserModule,
    AuthModule,
    ProductСategoryModule,
    ProductModule,
    ShoppingCartModule,
  ],
})
export class AppModule {}
