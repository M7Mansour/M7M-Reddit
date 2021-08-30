const { readFileSync } = require('fs');
const { join } = require('path');

const connection = require('./connection');

const dbBuild = () => {
    const sqlSchema = readFileSync(join(__dirname, 'schema.sql')).toString();
    return connection.query(sqlSchema);
};

module.exports = dbBuild;