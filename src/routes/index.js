const router = require('express').Router();
const signupRouter = require('./signup');

router.use('/signup', signupRouter);

module.exports = router;