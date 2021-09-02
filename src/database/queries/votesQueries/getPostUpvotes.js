const connection = require('../../config/connection');

const getPostUpvotes = (postID) => {
    const sqlScript = {
        text: 'SELECT * FROM POSTS_LIKES JOIN USERS U ON("OWNER" = U.ID) WHERE POST = $1 AND VOTE_TYPE = 1;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = getPostUpvotes;