const router = require('express').Router();
const { createPost, deletePost, getPostPage } = require('../controllers');

router.post('/create', createPost);
router.delete('/delete', deletePost);
router.get('/:category/:postid', getPostPage);
module.exports = router;