const getAllPosts = require('./allPostsQuery');
const getCategoryPosts = require('./categoryPostsQuery');
const numberOfComments = require('./commentsNumberQuery');
const owner = require('./ownerQuery');
const getSinglePost = require('./singlePostQuery');
const getUserPosts = require('./userPostsQuery');
const incrementViews = require('./incrementViews');
const addPost = require('./createPost');
const removePost = require('./deletePost');
const ownerID = require('./ownerIDQuery');


module.exports = {
    getAllPosts,
    getCategoryPosts,
    numberOfComments,
    owner,
    getSinglePost,
    getUserPosts,
    incrementViews,
    addPost,
    removePost,
    ownerID
};