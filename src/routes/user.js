const router = require('express').Router();
const { fetchPosts } = require('../controllers');

router.get('/posts/:username', fetchPosts);

module.exports = router;