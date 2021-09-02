const connection = require('../../config/connection');

const checkPost = (postID) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS WHERE ID = $1;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = checkPost;