const router = require('express').Router();
const { fetchPosts } = require('../controllers');

router.get('/:category', fetchPosts);


module.exports = router;