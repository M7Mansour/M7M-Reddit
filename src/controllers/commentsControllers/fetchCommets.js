const validatePost = require('./validatePost');
const { postComments } = require('../../database/queries');
const getFinalComments = require('./finalComments');

const fetchComments = (req, res) => {
    const { postid } = req.params;
    if (!validatePost(postid))
        return res.status(400).json({ message: 'Bad request!' });

    postComments(postid)
        .then(data => data.rows)
        .then(comments => getFinalComments(comments))
        .then(data => res.json(data))
        .catch(err => res.status(500).json({ message: 'Internal server error' }));
};

module.exports = fetchComments;