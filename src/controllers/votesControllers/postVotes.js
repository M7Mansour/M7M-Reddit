const { getPostVotes } = require("../../database/queries");
const validate = require("./validate");

const postVotes = (req, res) => {
    const { postid } = req.params;
    if (!validate(postid))
        return res.status(404).json({ message: 'Bad request!' });
    getPostVotes(postid)
        .then(data => data.rows)
        .then(votes => res.json(votes))
        .catch(err => res.status(500).json({ message: 'internal server error' }));
};

module.exports = postVotes;