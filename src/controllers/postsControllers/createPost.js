const { addPost, ownerID } = require('../../database/queries');
const validateCreatePost = require('./validateCreatePost');

const createPost = (req, res) => {
    const { type, category, title, content } = req.body;
    const userName = req.body.logedUser;

    if (!validateCreatePost(type, category, title, content))
        return res.status(403).json({ message: 'forbidden' });

    ownerID(userName)
        .then(data => data.rows[0].id)
        .then(userID => addPost(userID, type, category, title, content))
        .then(() => res.json({ message: 'post added successfully!' }))
        .catch(err => res.json({ message: 'internal server error' }));
};

module.exports = createPost;