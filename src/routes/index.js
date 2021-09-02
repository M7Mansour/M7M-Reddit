const router = require('express').Router();
const signupRouter = require('./signup');
const loginRouter = require('./login');
const categoryPostsRouter = require('./categoryPosts');
const commentsRouter = require('./comments');
const userRouter = require('./user');
const postRouter = require('./post');

router.use('/user', userRouter);
router.use('/r', categoryPostsRouter);
router.use('/post', postRouter);
router.use('/comments', commentsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;