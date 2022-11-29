import "reflect-metadata"
import { DataSource } from "typeorm"
import { UserGL} from "./entity/UserGL"
import { PacientesGL } from "./entity/PacientesGL"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "gabrielle",
    password: "sjp@2022",
    database: "faculdade",
    synchronize: true,
    logging: false,
    entities: [UserGL,PacientesGL],
    migrations: [],
    subscribers: [],
})
