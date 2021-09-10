const fetchPosts = require('./fetchPosts');
const calculateTime = require('./calculateTime');
const createPost = require('./createPost');
const deletePost = require('./deletePost');
const validateCategoryPost = require('./validateCategoryPost');
const getPostPage = require('./getPostPage');

module.exports = {
    fetchPosts,
    calculateTime,
    createPost,
    deletePost,
    validateCategoryPost,
    getPostPage
};