const { getAllPosts, getCategoryPosts } = require('../../database/queries');

const selectQuery = (category) => {
    if (category === 'all')
        return getAllPosts();
    return getCategoryPosts(category);
};

module.exports = selectQuery;