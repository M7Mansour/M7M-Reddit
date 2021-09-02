const router = require('express').Router();
const { fetchComments, createComment, deleteComment } = require('../controllers');

router.get('/:postid', fetchComments);
router.post('/create', createComment)
router.delete('/delete', deleteComment);

module.exports = router;