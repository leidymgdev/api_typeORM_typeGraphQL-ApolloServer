import {createConnection} from 'typeorm'
import path from 'path'

export const connect = async() => {
    await createConnection({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'Intel135',
        database: 'graphqlts',
        entities: [
            path.join(__dirname, '../entity/**/**.ts')
        ],
        synchronize: true
    });
    console.log('Database is connected');
};