const connection = require('../../config/connection');

const postComments = (postID) => {
    const sqlScript = {
        text: 'SELECT * FROM COMMENTS WHERE POST = $1 ORDER BY COMMENT_TIME DESC;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = postComments;