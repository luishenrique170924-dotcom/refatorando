import path from "path";
import { Customer } from "./src/customers/customers.entity";
import { DataSource } from "typeorm";


export const CustomerDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'cliente_customers',
    entities: [Customer],
    migrations: [path.join('migrations-customers', '*.{ts,js}')],
});