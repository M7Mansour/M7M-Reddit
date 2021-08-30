const connection = require('../config/connection');

const checkUserQuery = (userName, email) => {
    const sqlScript = {
        text: 'SELECT * FROM USERS WHERE USERNAME = $1 OR EMAIL = $2',
        values: [userName, email]
    };
    return connection.query(sqlScript);
};

module.exports = checkUserQuery;