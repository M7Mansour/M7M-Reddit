const { getAllPosts, getCategoryPosts, getSinglePost, getUserPosts, incrementViews, ownerID } = require('../../database/queries');

const selectQuery = (category, postID, userName) => {
    if (userName)
        return ownerID(userName).then(data => data.rows[0].id).then(userID => getUserPosts(userID));

    if (category === 'all')
        return getAllPosts();

    if (postID)
        return incrementViews(postID).then(() => getSinglePost(category, postID));

    return getCategoryPosts(category);
};

module.exports = selectQuery;