const connection = require('../../config/connection');

const updateVote = (userID, postID, voteType) => {
    const sqlScript = {
        text: 'UPDATE POSTS_LIKES SET VOTE_TYPE = $3 WHERE "OWNER" = $1 AND POST = $2;',
        values: [userID, postID, voteType]
    };
    return connection.query(sqlScript);
};

module.exports = updateVote;