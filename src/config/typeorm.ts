import {createConnection} from 'typeorm'
import path from 'path';
import { ENV_VARIABLES } from '../config';

export const connect = async() => {
    await createConnection({
        type: ENV_VARIABLES.DB_TYPE,
        host: ENV_VARIABLES.DB_HOST,
        port: ENV_VARIABLES.DB_PORT,
        username: ENV_VARIABLES.DB_USERNAME,
        password: ENV_VARIABLES.DB_PASSWORD,
        database: ENV_VARIABLES.DB_NAME,
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log(`Database ${ENV_VARIABLES.DB_NAME} is connected.`);
};