const validatePost = (postID) => {
    return Number.isInteger(postID - 0);
};

module.exports = validatePost;