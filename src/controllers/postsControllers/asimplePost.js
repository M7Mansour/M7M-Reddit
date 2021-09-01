const calculateTime = require('./calculateTime');

const asimplePost = (data) => {
    data.postData.post_time = calculateTime(data.postData.post_time);
    data.postData.owner_id = data.postData.OWNER;
    data.postData.OWNER = data.owner;
    return {...data.postData, comments: data.comments };
};

module.exports = asimplePost;