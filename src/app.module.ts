import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SequelizeModule } from "@nestjs/sequelize"
import { ConfigModule } from '@nestjs/config';
import { SequelizeConfigService } from './config/sequelizeConfig.service';
import { databaseConfig } from './config/configuration';

@Module({
  imports: [SequelizeModule.forRootAsync({
    imports: [ConfigModule],
    useClass: SequelizeConfigService,
  }),
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    UserModule
  ],
})
export class AppModule {}
