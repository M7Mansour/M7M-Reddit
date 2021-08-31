const router = require('express').Router();
const { login, getLoginPage } = require('../controllers');

router.get('/', getLoginPage);
router.post('/', login);


module.exports = router;