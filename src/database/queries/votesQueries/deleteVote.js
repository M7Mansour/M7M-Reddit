const connection = require('../../config/connection');

const deleteVote = (userID, postID) => {
    const sqlScript = {
        text: 'DELETE FROM POSTS_LIKES WHERE "OWNER" = $1 AND POST = $2;',
        values: [userID, postID]
    };
    return connection.query(sqlScript);
};

module.exports = deleteVote;