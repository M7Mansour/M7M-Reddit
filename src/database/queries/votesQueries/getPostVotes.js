const connection = require('../../config/connection');

const getPostVotes = (postID) => {
    const sqlScript = {
        text: 'SELECT USERNAME, U.ID, VOTE_TYPE FROM POSTS_LIKES JOIN USERS U ON("OWNER" = U.ID) WHERE POST = $1;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = getPostVotes;