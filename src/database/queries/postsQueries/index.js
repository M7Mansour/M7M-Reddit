const getAllPosts = require('./allPostsQuery');
const getCategoryPosts = require('./categoryPostsQuery');
const numberOfComments = require('./commentsQuery');
const postOwner = require('./postOwnerQuery');

module.exports = { getAllPosts, getCategoryPosts, numberOfComments, postOwner };