const connection = require('../../config/connection');

const checkComment = (commentID, userID) => {
    const sqlScript = {
        text: 'SELECT * FROM COMMENTS WHERE ID = $1 AND "OWNER" = $2;',
        values: [commentID, userID]
    };
    return connection.query(sqlScript);
};

module.exports = checkComment;