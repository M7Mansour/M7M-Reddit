const addPostInf = require("./postCommentsOwner");

const getFinalPosts = (posts, userName) => {
    const postsData = [];

    posts.forEach(post => {
        postsData.push(addPostInf(post, userName));
    });

    return Promise.all(postsData);
};

module.exports = getFinalPosts;