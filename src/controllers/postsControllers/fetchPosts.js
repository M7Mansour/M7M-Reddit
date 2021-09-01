const getFinalPosts = require('./finalPosts');
const selectQuery = require('./selectQuery');
const validateCategory = require('./validateCategory');

const fetchPosts = (req, res) => {
    const { category } = req.params;
    if (!validateCategory(category))
        return res.status(400).json({ message: 'Bad request!' });
    selectQuery(category)
        .then(data => data.rows)
        .then(posts => getFinalPosts(posts))
        .then((postsData) => res.json(postsData))
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = fetchPosts;