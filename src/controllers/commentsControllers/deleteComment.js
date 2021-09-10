const { ownerID, removeComment, checkComment } = require('../../database/queries');
const validatePost = require('./validate');

const deleteComment = (req, res) => {
    const { id } = req.body;
    const userName = req.body.logedUser;

    if (!validatePost(id))
        return res.status(403).json({ message: 'forbidden' });

    ownerID(userName)
        .then(data => data.rows[0].id)
        .then(userID => checkComment(id, userID))
        .then(data => data.rows.length)
        .then(exists => {
            if (!exists)
                throw { message: 'forbidden', cause: 'violation' };
        })
        .then(() => removeComment(id))
        .then(() => res.json({ message: 'comment deleted successfully!' }))
        .catch(err => {
            if (!err.cause)
                res.json({ message: 'internal server error' })
            else res.json({ message: err.message });
        });
};

module.exports = deleteComment;