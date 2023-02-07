import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Car } from './car.entity';
import { Repository } from 'typeorm';
import { CarDTO } from './dto/car.dto'

@Injectable()
export class CarService {

    constructor(@InjectRepository(Car) private carRepository: Repository<Car>) { }

    senData(car: CarDTO) {
        try {

            const newCar = this.carRepository.create(car)
            return this.carRepository.save(newCar)

        } catch (error) {
            console.log(error)
        }

    }
    getDataByPlates(plate: string) {
        try {

            return this.carRepository.find({
                where: {
                    plate
                }
            })
        } catch (error) {
            console.log(error)
        }

    }
    getCars() {
        return this.carRepository.find()

    }

}
