import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { CarService } from './car.service';
import { CarDTO } from './dto/car.dto';

@Controller('car')
export class CarController {

    constructor(private carService: CarService) { }

    @Post()
    createCar(@Body() newCar: CarDTO) {

        return this.carService.senData(newCar)

    }



}
