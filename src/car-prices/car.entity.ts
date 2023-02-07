
import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'cars' })
export class Car {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    plate: string;
    @Column()
    carType: string
    @Column("decimal", { precision: 6, scale: 2 })
    basePrice: number
    @Column()
    numberOfDays: number;
    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    createdAt: Date;
    @Column("decimal", { precision: 6, scale: 2 })
    variablePrices: number
    @Column("decimal", { precision: 6, scale: 2 })
    totalToPay: number;


}