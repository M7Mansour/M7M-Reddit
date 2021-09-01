const connection = require('../../config/connection');

const getAllPosts = () => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS ORDER BY POST_TIME DESC;',
        values: []
    };
    return connection.query(sqlScript);
};

module.exports = getAllPosts;