const { getHomePage } = require('./home');
const { signup, getSignupPage } = require('./signupControllers');
const { login, getLoginPage } = require('./loginControllers');
const { fetchPosts, createPost, deletePost } = require('./postsControllers');
const { fetchComments, createComment, deleteComment } = require('./commentsControllers');
const { upVote, downVote, unVote, postVotes } = require('./votesControllers');
const { logout } = require('./logoutControllers');


module.exports = {
    getHomePage,
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
    postVotes,
    logout
};