const connection = require('../../config/connection');

const removePost = (postID, userID) => {
    const sqlScript = {
        text: 'DELETE FROM POSTS WHERE ID = $1 AND "OWNER" = $2;',
        values: [postID, userID]
    };
    return connection.query(sqlScript);
};

module.exports = removePost;