const { getAllPosts, getCategoryPosts, getSinglePost } = require('../../database/queries');

const selectQuery = (category, postID) => {
    if (category === 'all')
        return getAllPosts();
    if (postID)
        return getSinglePost(category, postID);
    return getCategoryPosts(category);
};

module.exports = selectQuery;