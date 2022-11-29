import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class UserGL{


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    email: string;

}


