const connection = require('../../config/connection');

const createVote = (userID, postID, voteType) => {
    const sqlScript = {
        text: 'INSERT INTO POSTS_LIKES VALUES($1, $2, $3);',
        values: [userID, postID, voteType]
    };
    return connection.query(sqlScript);
};

module.exports = createVote;