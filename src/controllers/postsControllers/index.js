const fetchPosts = require('./fetchPosts');
const calculateTime = require('./calculateTime');
const createPost = require('./createPost');
const deletePost = require('./deletePost');
const validateCategoryPost = require('./validateCategoryPost');

module.exports = { fetchPosts, calculateTime, createPost, deletePost, validateCategoryPost };