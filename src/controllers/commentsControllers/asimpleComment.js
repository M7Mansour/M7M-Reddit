//const { calculateTime } = require('../postsControllers');

const asimpleComment = (comment) => {
    const { calculateTime } = require('../postsControllers');
    comment.comment_time = calculateTime(comment.comment_time);
    return comment;
};

module.exports = asimpleComment;