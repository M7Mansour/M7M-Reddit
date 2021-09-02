const router = require('express').Router();
const { createPost, deletePost } = require('../controllers');

router.post('/create', createPost);
router.delete('/delete', deletePost);

module.exports = router;