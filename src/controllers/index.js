const { signup, getSignupPage } = require('./signupControllers');
const { login, getLoginPage } = require('./loginControllers');
const { fetchPosts, createPost, deletePost } = require('./postsControllers');
const { fetchComments, createComment, deleteComment } = require('./commentsControllers');
const { upVote, downVote, unVote, postVotes } = require('./votesControllers');

module.exports = {
    signup,
    getSignupPage,
    login,
    getLoginPage,
    fetchPosts,
    fetchComments,
    createPost,
    deletePost,
    createComment,
    deleteComment,
    upVote,
    downVote,
    unVote,
    postVotes
};