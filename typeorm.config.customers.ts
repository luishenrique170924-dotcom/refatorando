
import { Customer } from "./src/customers/customers.entity";
import { DataSource } from "typeorm";


export const CustomerDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'luis_loja_senai',
    entities: [Customer],
    migrations: ["dist/migrations-customers/*.js"],
});