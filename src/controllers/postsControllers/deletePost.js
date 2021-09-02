const { ownerID, removePost } = require('../../database/queries');
const { validatePost } = require('../commentsControllers');

const deletePost = (req, res) => {
    const { id, OWNER } = req.body;
    const userName = req.body.logedUser;

    if (!validatePost(id) || userName !== OWNER)
        return res.status(403).json({ message: 'forbidden' });

    ownerID(userName)
        .then(data => data.rows[0].id)
        .then(userID => removePost(id, userID))
        .then(data => data.rowCount)
        .then(deleted => {
            if (deleted)
                res.json({ message: 'post deleted successfully!' });
            else res.json({ message: 'post doesn\'t exist!' });
        })
        .catch(err => res.json({ message: 'internal server error' }));
};

module.exports = deletePost;