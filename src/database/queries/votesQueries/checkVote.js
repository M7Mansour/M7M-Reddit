const connection = require('../../config/connection');

const checkVote = (userID, postID) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS_LIKES WHERE "OWNER" = $1 OR POST = $2',
        values: [userID, postID]
    };
    return connection.query(sqlScript);
};

module.exports = checkVote;