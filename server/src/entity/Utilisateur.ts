import { PrimaryGeneratedColumn, Entity,Column } from "typeorm";

@Entity()
export class Utilisateur {
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    fullname:string

    @Column()
    data:string
}