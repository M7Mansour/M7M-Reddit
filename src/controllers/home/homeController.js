const { join } = require('path');
const { validateCategoryPost } = require('../postsControllers');

const getHomePage = (req, res) => {
    const { category } = req.params;
    if (!validateCategoryPost(category, 1))
        return res.status(400).json({ message: 'not found!' });
    res.sendFile(join(__dirname, '..', '..', '..', 'public', 'index.html'));
};

module.exports = getHomePage;