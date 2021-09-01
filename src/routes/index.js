const router = require('express').Router();
const signupRouter = require('./signup');
const loginRouter = require('./login');
const postsRouter = require('./posts');
const commentsRouter = require('./comments');

router.use('/r', postsRouter);
router.use('/comments', commentsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;