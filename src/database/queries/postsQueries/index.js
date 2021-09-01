const getAllPosts = require('./allPostsQuery');
const getCategoryPosts = require('./categoryPostsQuery');
const numberOfComments = require('./commentsNumberQuery');
const owner = require('./OwnerQuery');
const getSinglePost = require('./singlePostQuery');
const getUserPosts = require('./userPostsQuery');
const incrementViews = require('./incrementViews');

module.exports = { getAllPosts, getCategoryPosts, numberOfComments, owner, getSinglePost, getUserPosts, incrementViews };