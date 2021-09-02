const connection = require('../../config/connection');

const removeComment = (commentID) => {
    const sqlScript = {
        text: 'DELETE FROM COMMENTS WHERE ID = $1;',
        values: [commentID]
    };
    return connection.query(sqlScript);
};

module.exports = removeComment;