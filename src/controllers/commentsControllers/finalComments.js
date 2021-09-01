const getCommentOwner = require("./commentOwner");

const getFinalComments = (comments) => {
    const commentsData = [];
    comments.forEach(comment => {
        commentsData.push(getCommentOwner(comment));
    });
    return Promise.all(commentsData);
};

module.exports = getFinalComments;