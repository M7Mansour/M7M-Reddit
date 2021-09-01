const router = require('express').Router();
const { fetchComments } = require('../controllers');

router.get('/:postid', fetchComments);

module.exports = router;