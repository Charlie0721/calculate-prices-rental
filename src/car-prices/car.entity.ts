
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'cars' })
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    plate: string;
    @Column()
    carType: string
    @Column()
    basePrice: number
    @Column()
    numberOfDays: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column({ nullable: true })
    variablePrices: number
    @Column()
    totalToPay: number;


}