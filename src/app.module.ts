import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarPricesModule } from './car-prices/car-prices.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Car} from './car-prices/car.entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: 'conexion1234',
      database: 'rental_car',
      entities: [Car ],
      synchronize: true,
      retryDelay: 3000,
      autoLoadEntities: true
    }),
    CarPricesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
