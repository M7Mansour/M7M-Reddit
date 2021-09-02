const getCommentsOwner = require("./postCommentsOwner");

const getFinalPosts = (posts) => {
    const postsData = [];

    posts.forEach(post => {
        postsData.push(getCommentsOwner(post));
    });

    return Promise.all(postsData);
};

module.exports = getFinalPosts;