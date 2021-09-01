const connection = require('../../config/connection');

const postOwner = (userID) => {
    const sqlScript = {
        text: 'SELECT USERNAME FROM USERS WHERE ID = $1;',
        values: [userID]
    };
    return connection.query(sqlScript);
};

module.exports = postOwner;