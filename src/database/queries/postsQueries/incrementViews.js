const connection = require('../../config/connection');

const incrementViews = (postID) => {
    const sqlScript = {
        text: 'UPDATE POSTS SET VIEWS = VIEWS + 1 WHERE ID = $1;',
        values: [postID]
    };
    return connection.query(sqlScript);
};

module.exports = incrementViews;