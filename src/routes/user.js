const router = require('express').Router();
const { fetchPosts } = require('../controllers');

router.get('/posts/:userid', fetchPosts);

module.exports = router;