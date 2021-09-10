const { join } = require('path');
const validateCategoryPost = require('./validateCategoryPost');
const { getSinglePost } = require('../../database/queries');

const getPostPage = (req, res) => {
    const { category, postid } = req.params;
    if (!validateCategoryPost(category, postid))
        return res.status(404).json({ message: 'not found!' });
    getSinglePost(category, postid)
        .then(data => data.rows.length)
        .then(exists => {
            if (!exists)
                throw { message: 'not found!', cause: 'nonexistance' };
        }).then(() => res.cookie('postID', postid, { path: `/post/${category}/${postid}` })
            .cookie('category', category, { path: `/post/${category}/${postid}` })
            .sendFile(join(__dirname, '..', '..', '..', 'public', 'views', 'post.html')))
        .catch(err => {
            if (!err.cause)
                res.status(500).json({ message: 'internal server error!' });
            else res.status(404).json({ message: err.message });
        });
};

module.exports = getPostPage;