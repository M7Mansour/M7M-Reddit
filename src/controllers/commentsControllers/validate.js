const validatePost = (postID, content) => {
    if (content)
        return Number.isInteger(postID - 0) && content.length >= 1;
    return Number.isInteger(postID - 0);
};

module.exports = validatePost;