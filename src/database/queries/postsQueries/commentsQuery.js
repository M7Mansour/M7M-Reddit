const connection = require('../../config/connection');

const numberOfComments = (postID) => {
    const sqlScript = {
        text: 'SELECT COUNT(ID) NUM_COMMENTS FROM COMMENTS WHERE POST = $1;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = numberOfComments;