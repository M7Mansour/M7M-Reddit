const postId = getCookie('postID');
const category = getCookie('category');
const commentsContainer = document.querySelector(`.gfVMDm-${mode}`);
const commentForm = document.querySelector(`.dLVDIM-${mode}`);
const postForm = document.querySelector(`.post-form-${mode}`);

setActive(category);

const deletePost = (owner) => {
    fetchRequest('/post/delete', 'DELETE', { id: postId, owner })
        .then(() => window.location.replace(`${window.location.origin}`));
};

const deleteComment = (comment) => {
    const id = comment.querySelector('input').value;
    fetchRequest('/comments/delete', 'DELETE', { id })
        .then(() => fetchRequest(`/comments/${postId}`))
        .then(data => data.json())
        .then(data => createComments(data));
};

const createComment = (commentId, content, owner, comment_time) => {
    const item = createElement('i', [`dVWVjd-${mode}`]);
    const commentWrapper = createElement('div', [`kEqgYk-${mode}`]);
    const detailsWrapper = createElement('div', [`ebhVnM-${mode}`]);
    const commentOwner = createElement('a', [`cKlNNr-${mode}`], owner, `/user/profile/${owner}`);
    const commentTime = createElement('span', [`fughqv-${mode}`], `${comment_time ? comment_time + ' ago' : 'now'}`);
    const deleteCommentBtn = createElement('button', [`bFFunB-${mode}`], 'delete', null, 'click', deleteComment);
    const idWrapper = createElement('input', null, null, null, null, null, 'hidden', commentId);
    const contentWrapper = createElement('div', [`cymepz-${mode}`]);
    const textWrapper = createElement('div', [`kOWlQl-${mode}`]);
    const contentArea = createElement('p', null, content);

    detailsWrapper.appendChild(commentOwner);
    detailsWrapper.appendChild(commentTime);
    if (owner === logedUser)
        detailsWrapper.appendChild(deleteCommentBtn);
    deleteCommentBtn.appendChild(idWrapper);

    textWrapper.appendChild(contentArea);
    contentWrapper.appendChild(textWrapper);

    commentWrapper.appendChild(detailsWrapper);
    commentWrapper.appendChild(contentWrapper);

    item.appendChild(commentWrapper);
    return item;
};

const createComments = (comments) => {
    clear(commentsContainer);
    for (let i = 0; i < comments.length; i++) {
        const comment = createComment(comments[i].id, comments[i].content, comments[i].OWNER, comments[i].comment_time);
        commentsContainer.appendChild(comment);
    }
};

const createPost = (title, content, comments, upvote, downvote, votes, postID, category, owner, time, views, upvotes) => {
    const upvoteBtn = document.querySelector(`.upvote-0-button-${mode}`);
    const downvoteBtn = document.querySelector(`.downvote-0-button-${mode}`);
    upvoteBtn.className = `upvote-${upvote}-button-${mode}`;
    upvoteBtn.addEventListener('click', e => upvoteDom(upvoteBtn));
    downvoteBtn.className = `downvote-${downvote}-button-${mode}`;
    downvoteBtn.addEventListener('click', e => downvoteDom(downvoteBtn));
    document.querySelector(`.component-wrapper-${mode} span`).innerText = votes;
    const postIdWrapper = createElement('input', null, null, null, null, null, 'hidden', postID);
    document.querySelector(`.component-wrapper-${mode}`).appendChild(postIdWrapper);
    document.querySelector(`.Xdpjn-${mode} span`).innerText = title;
    document.querySelector(`.kOWlQl-${mode} p`).innerText = content;
    const anchors = document.querySelectorAll(`.gBkGwr-${mode} a`);
    anchors[0].href = `/post/${category}/${postID}`;
    anchors[0].innerText = `${comments} comment${comments > 1 ? 's' : ''}`;
    anchors[1].href = `/${category}`;
    anchors[1].innerText = `r/${category}`;
    anchors[2].href = `/user/profile/${owner}`;
    anchors[2].innerText = `${owner}`;
    document.querySelector(`.gBkGwr-${mode} span:last-child`).innerText = `${time ? time + ' ago' : 'now'}`;
    const spans = document.querySelectorAll(`.ivSYqH-${mode} span`);
    spans[0].innerText = `${views + (views > 1 ?' views' : ' view')}`;
    spans[2].innerText = `${upvotes}% upvoted`;
    const postDeleteBtn = document.querySelector(`.ivSYqH-${mode} button`);
    if (owner === logedUser)
        postDeleteBtn.addEventListener('click', e => {
            deletePost(owner);
        });
    else postDeleteBtn.style.display = 'none';
    document.querySelector(`.dLVDIM-${mode} button`).addEventListener('click', e => {
        addComment(e);
    });
};

const fetchPost = (postid, category) => {
    fetchRequest(`/r/${category}/${postid}`, 'GET')
        .then(data => data.json())
        .then(data => data[0])
        .then(data => {
            createPost(
                data.title,
                data.content,
                data.comments - 0,
                data.userVote === 1 ? 1 : 0,
                data.userVote === -1 ? 1 : 0,
                data.votes,
                data.id,
                data.category,
                data.owner,
                data.post_time,
                data.views,
                data.upvotes
            );
            return data.id;
        }).then(id => fetchRequest(`/comments/${id}`))
        .then(data => data.json())
        .then(data => createComments(data));
};

fetchPost(postId, category);

const addComment = (e) => {
    e.preventDefault();
    const content = commentForm.querySelector('textarea');
    fetchRequest('/comments/create', 'POST', { postid: postId, content: content.value })
        .then(() => content.value = '')
        .then(() => fetchRequest(`/comments/${postId}`))
        .then(data => data.json())
        .then(data => createComments(data));
};

commentForm.addEventListener('submit', (e) => addComment(e));

postForm.addEventListener('submit', (e) => postCreate(e).then(() => window.location.replace(window.location.origin)));