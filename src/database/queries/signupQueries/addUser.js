const connection = require('../../config/connection');

const addUserQuery = (userName, email, firstName, lastname, password) => {
    const sqlScript = {
        text: 'INSERT INTO USERS(USERNAME, EMAIL, FIRST_NAME, LAST_NAME, PASSWORD) VALUES ($1 , $2 , $3 , $4 , $5);',
        values: [userName, email, firstName, lastname, password]
    };
    return connection.query(sqlScript);
};

module.exports = addUserQuery;