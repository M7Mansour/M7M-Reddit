const connection = require('../../config/connection');

const loginEmailQuery = (email, password) => {
    const sqlScript = {
        text: 'SELECT * FROM USERS WHERE EMAIL = $1 OR PASSWORD = $2',
        values: [email, password]
    };
    return connection.query(sqlScript);
};

module.exports = loginEmailQuery;