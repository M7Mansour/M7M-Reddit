const connection = require('../../config/connection');

const loginUserNameQuery = (userName, password) => {
    const sqlScript = {
        text: 'SELECT * FROM USERS WHERE USERNAME = $1 OR PASSWORD = $2',
        values: [userName, password]
    };
    return connection.query(sqlScript);
};

module.exports = loginUserNameQuery;