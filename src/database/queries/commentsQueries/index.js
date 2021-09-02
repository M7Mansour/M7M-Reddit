const checkComment = require('./checkComment');
const checkPost = require('./checkPost');
const addComment = require('./createComment');
const removeComment = require('./deleteComment');
const postComments = require('./postComments');

module.exports = { postComments, addComment, checkPost, removeComment, checkComment };