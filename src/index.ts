import 'reflect-metadata';
import {connect} from './config/typeorm';
import {startServer} from './app';
import { ENV_VARIABLES } from './config';

const main = async () => {
    connect();
    const app = await startServer();
    app.listen(ENV_VARIABLES.PORT, () => console.log(`API running on port ${ENV_VARIABLES.PORT} in environment ${ENV_VARIABLES.ENVIRONMENT}`));
}

main();