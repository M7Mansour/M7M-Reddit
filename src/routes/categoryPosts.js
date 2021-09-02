const router = require('express').Router();
const { fetchPosts } = require('../controllers');

router.get('/:category/:postid', fetchPosts);
router.get('/:category', fetchPosts);


module.exports = router;