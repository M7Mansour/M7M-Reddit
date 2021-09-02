const connection = require('../../config/connection');

const addPost = (userID, type, category, title, content) => {
    const sqlScript = {
        text: 'INSERT INTO POSTS("OWNER", "TYPE", CATEGORY, TITLE, CONTENT) VALUES($1, $2, $3, $4, $5);',
        values: [userID, type, category, title, content]
    };
    return connection.query(sqlScript);
};

module.exports = addPost;