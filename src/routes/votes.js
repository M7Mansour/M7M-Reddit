const router = require('express').Router();
const { upVote, downVote, unVote } = require('../controllers');

router.post('/upvote', upVote);
router.post('/downvote', downVote)
router.delete('/unvote', unVote);

module.exports = router;