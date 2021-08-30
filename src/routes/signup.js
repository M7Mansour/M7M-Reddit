const router = require('express').Router();
const { signup, getSignupPage } = require('../controllers');

router.get('/', getSignupPage);
router.post('/', signup);


module.exports = router;