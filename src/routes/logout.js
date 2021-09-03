const router = require('express').Router();
const { logout } = require('../controllers');

router.get('/', logout);

module.exports = router;