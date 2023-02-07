import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { Car } from './car.entity';
import { CarService } from './car.service';
import { CarDTO } from './dto/car.dto';

@Controller('car')
export class CarController {

    constructor(private carService: CarService) { }

    @Get()
    getCars(): Promise<Car[]> {
        return this.carService.getCars();

    }  
    @Get(':plate')
    getDataByPlate(@Param('plate') plate:string): Promise<Car[]> {
        return this.carService.getDataByPlates(plate)

    }

    @Post()
    createCar(@Body() newCar: CarDTO) {

        return this.carService.senData(newCar)

    }



}
