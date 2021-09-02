const createComment = require('./createComment');
const deleteComment = require('./deleteComment');
const fetchComments = require('./fetchCommets');
const validatePost = require('./validate');

module.exports = { fetchComments, validatePost, createComment, deleteComment };