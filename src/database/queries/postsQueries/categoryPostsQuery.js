const connection = require('../../config/connection');

const getCategoryPosts = (category) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS WHERE CATEGORY = $1 ORDER BY POST_TIME DESC;',
        values: [category]
    };
    return connection.query(sqlScript);
};

module.exports = getCategoryPosts;