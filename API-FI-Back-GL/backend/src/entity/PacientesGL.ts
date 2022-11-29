import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class PacientesGL {


    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
    
    @Column()
    idade: number;

    @Column()
    tipoSanguineo: string;
    
    @Column()
    contato:string;

}