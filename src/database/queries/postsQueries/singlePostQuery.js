const connection = require('../../config/connection');

const getSinglePost = (category, postID) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS WHERE CATEGORY = $1 AND ID = $2;',
        values: [category, postID]
    };
    return connection.query(sqlScript);
};

module.exports = getSinglePost;