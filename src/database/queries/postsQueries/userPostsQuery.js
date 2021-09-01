const connection = require('../../config/connection');

const getUserPosts = (userID) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS WHERE "OWNER" = $1 ORDER BY POST_TIME DESC;',
        values: [userID]
    };
    return connection.query(sqlScript);
};

module.exports = getUserPosts;