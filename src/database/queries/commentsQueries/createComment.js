const connection = require('../../config/connection');

const addComment = (userID, postID, content) => {
    const sqlScript = {
        text: 'INSERT INTO COMMENTS("OWNER", POST, CONTENT) VALUES($1, $2, $3);',
        values: [userID, postID, content]
    };
    return connection.query(sqlScript);
};

module.exports = addComment;