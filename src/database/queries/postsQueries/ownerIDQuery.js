const connection = require('../../config/connection');

const ownerID = (userName) => {
    const sqlScript = {
        text: 'SELECT ID FROM USERS WHERE USERNAME = $1;',
        values: [userName]
    };
    return connection.query(sqlScript);
};

module.exports = ownerID;