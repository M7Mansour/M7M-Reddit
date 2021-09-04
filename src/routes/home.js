const router = require('express').Router();
const { getHomePage } = require('../controllers');

router.get('/:category', getHomePage);


module.exports = router;