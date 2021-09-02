const router = require('express').Router();
const { upVote, downVote, unVote, postVotes } = require('../controllers');

router.post('/upvote', upVote);
router.post('/downvote', downVote)
router.delete('/unvote', unVote);
router.get('/:postid', postVotes);
module.exports = router;