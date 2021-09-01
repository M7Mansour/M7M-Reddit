const { getAllPosts, getCategoryPosts, getSinglePost, getUserPosts, incrementViews } = require('../../database/queries');

const selectQuery = (category, postID, userID) => {
    if (userID)
        return getUserPosts(userID);
    if (category === 'all')
        return getAllPosts();
    if (postID)
        return incrementViews(postID).then(() => getSinglePost(category, postID));
    return getCategoryPosts(category);
};

module.exports = selectQuery;