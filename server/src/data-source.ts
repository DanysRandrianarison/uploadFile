import "reflect-metadata"
import { DataSource } from "typeorm"
import { Utilisateur } from "./entity/Utilisateur"


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "motdepasse",
    database: "lotbook",
    logging: false,
    entities: [Utilisateur],
    migrations: ['src/migration/*ts'],
    subscribers: [],
})
