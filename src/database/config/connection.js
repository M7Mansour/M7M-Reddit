const { Pool } = require('pg');
const { DB_URL, DEV_DB_URL, TEST_DB_URL, NODE_ENV } = process.env;

let dbUrl = '';

switch (NODE_ENV) {
    case 'production':
        dbUrl = DB_URL;
        break;
    case 'development':
        dbUrl = DEV_DB_URL;
        break;
    case 'testing':
        dbUrl = TEST_DB_URL;
        break;
    default:
        throw new Error('No database found');
}

const options = {
    connectionString: dbUrl,
    ssl: {
        rejectUnauthorized: false
    }
};

module.exports = new Pool(options);