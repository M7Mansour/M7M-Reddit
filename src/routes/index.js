const router = require('express').Router();
const signupRouter = require('./signup');
const loginRouter = require('./login');
const postsRouter = require('./posts');

router.use('/r', postsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;