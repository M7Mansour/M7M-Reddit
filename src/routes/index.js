const router = require('express').Router();
const signupRouter = require('./signup');
const loginRouter = require('./login');

router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;