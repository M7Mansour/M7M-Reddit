const { addComment, ownerID, checkPost } = require('../../database/queries');
const validatePost = require('./validate');

const createComment = (req, res) => {
    const { postid, content } = req.body;
    const userName = req.body.logedUser;

    if (!validatePost(postid, content))
        return res.status(403).json({ message: 'forbidden' });
    checkPost(postid)
        .then(data => data.rows.length === 1)
        .then(exists => {
            if (!exists)
                throw { message: 'post doesn\'t exist!', cause: 'violation' };
        }).then(() => ownerID(userName))
        .then(data => data.rows[0].id)
        .then(userID => addComment(userID, postid, content))
        .then(() => res.json({ message: 'comment added successfully!' }))
        .catch(err => {
            console.log(err);
            if (!err.cause)
                res.json({ message: 'internal server error' });
            else res.json({ message: err.message });
        });
};

module.exports = createComment;