if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const JSON_ENV_VARIABLES = require('./env.variables.json');
const NODE_ENV = process.env.NODE_ENV || 'development';

export const ENV_VARIABLES = JSON_ENV_VARIABLES[NODE_ENV];

