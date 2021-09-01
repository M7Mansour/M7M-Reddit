const getFinalPosts = require('./finalPosts');
const selectQuery = require('./selectQuery');
const validateCategoryPost = require('./validateCategory');

const fetchPosts = (req, res) => {
    const { category, postid } = req.params;
    if (!validateCategoryPost(category, postid))
        return res.status(400).json({ message: 'Bad request!' });
    selectQuery(category, postid)
        .then(data => data.rows)
        .then(posts => getFinalPosts(posts))
        .then((postsData) => res.json(postsData))
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = fetchPosts;