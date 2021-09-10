const categoryPath = window.location.pathname;
const postsContainer = document.querySelector(`.post-container-${mode}`);
const categoryAsideItems = document.querySelectorAll(`.categories-item-${mode}`);
const categorySelectNav = document.querySelector(`.responsive-nav-select-${mode}`);
const form = document.querySelector('#post-form');

setActive(categoryPath.substring(1));

const createPost = (type, mode, upvote, downvote, votes, title, content, postID, comments, category, userName, time) => {
    const listItem = createElement('i');
    const postWrapper = createElement('div', [`post-wrapper-${mode}`]);
    const compWrapper = createElement('div', [`component-wrapper-${mode}`]);
    const idInput = createElement('input', null, null, null, null, null, 'hidden', postID);
    const upvoteBtn = createElement('button', [`upvote-${upvote}-button-${mode}`], null, null, 'click', upvoteDom);
    const voteNumSpan = createElement('span', null, `${votes}`);
    const downvoteBtn = createElement('button', [`downvote-${downvote}-button-${mode}`], null, null, 'click', downvoteDom);
    const contentWrapper = createElement('div', [`content-wrapper-${mode}`]);
    const titleWrapper = createElement('div', [`title-wrapper-${mode}`]);
    const titleLink = createElement('a', null, title, type === 'url' ? content : `/post/${category}/${postID}`);
    const textWrapper = createElement('div', [`post-text-wrapper-${mode}`], content);
    const detailWrapper = createElement('div', [`detail-wrapper-${mode}`]);
    const commentNum = createElement('a', null, `${comments} comments`, `/post/${category}/${postID}`);
    const categoryLink = createElement('a', null, `/r/${category}`, `/${category}`);
    const bySpan = createElement('span', null, 'by');
    const ProfileLink = createElement('a', [`owner-${mode}`], userName, `/user/profile/${userName}`);
    const timeSpan = createElement('span', null, time ? `${time} ago` : 'now');

    compWrapper.appendChild(upvoteBtn);
    compWrapper.appendChild(voteNumSpan);
    compWrapper.appendChild(idInput);
    compWrapper.appendChild(downvoteBtn);

    titleWrapper.appendChild(titleLink);

    detailWrapper.appendChild(commentNum);
    detailWrapper.appendChild(categoryLink);
    detailWrapper.appendChild(bySpan);
    detailWrapper.appendChild(ProfileLink);
    detailWrapper.appendChild(timeSpan);

    contentWrapper.appendChild(titleWrapper);
    contentWrapper.appendChild(textWrapper);
    contentWrapper.appendChild(detailWrapper);

    postWrapper.appendChild(compWrapper);
    postWrapper.appendChild(contentWrapper);

    listItem.appendChild(postWrapper);
    return listItem;
};

const createPosts = (posts) => {
    clear(postsContainer);
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        const postElement = createPost(
            post.TYPE,
            mode,
            post.userVote === 1 ? 1 : 0,
            post.userVote === -1 ? 1 : 0,
            post.votes,
            post.title,
            post.content,
            post.id,
            post.comments,
            post.category,
            post.owner,
            post.post_time
        );
        postsContainer.appendChild(postElement);
    }
};

const fetchCategory = (category) => {
    category = category === '/' || category === '/all' ? '' : category.substring(1);
    fetchRequest(`/r/${category === '' ? 'all' : category}`, 'GET')
        .then(data => data.json())
        .then(data => createPosts(data))
        .then(() => window.history.replaceState(null, null, `${window.location.origin}/${category}`));
};

fetchCategory(categoryPath);

const categoryEventFunc = (category) => {
    fetchCategory(`/${category}`);
    setActive(category);
};

for (let i = 0; i < categoryAsideItems.length; i++) {
    categoryAsideItems[i].addEventListener('click', () => {
        categoryEventFunc(categoryAsideItems[i].innerHTML);
    });
}


categorySelectNav.addEventListener('change', () => {
    categoryEventFunc(categorySelectNav.value);
});

form.addEventListener('submit', (e) => postCreate(e).then(() => categoryEventFunc(document.querySelector('.active').innerHTML)));