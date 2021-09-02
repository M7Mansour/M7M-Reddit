const getFinalPosts = require('./finalPosts');
const selectQuery = require('./selectQuery');
const validateCategoryPost = require('./validateCategoryPost');

const fetchPosts = (req, res) => {
    const { category, postid, username } = req.params;

    if (!validateCategoryPost(category, username, username))
        return res.status(400).json({ message: 'Bad request!' });

    selectQuery(category, postid, username)
        .then(data => data.rows)
        .then(posts => getFinalPosts(posts))
        .then((postsData) => res.json(postsData))
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = fetchPosts;