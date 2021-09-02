const connection = require('../../config/connection');

const owner = (userID) => {
    const sqlScript = {
        text: 'SELECT USERNAME FROM USERS WHERE ID = $1;',
        values: [userID]
    };
    return connection.query(sqlScript);
};

module.exports = owner;