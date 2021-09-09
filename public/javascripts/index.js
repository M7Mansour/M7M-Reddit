const urlType = document.querySelector('#link-type');
const textType = document.querySelector('#text-type');
const urlTypeInput = document.querySelector('#link-type-input');
const textTypeInput = document.querySelector('#text-type-input');
const modal = document.querySelector("#myModal");
const createPostBtn = document.querySelector("#create-post-btn");
const createPostResBtn = document.querySelector('#create-post-res-btn');
const createPostRequestBtn = document.querySelector('#create-post-request-btn');
const navLinks = document.querySelectorAll('.nav-links');
const cookies = document.cookie;
const logedIn = getCookie('logedin');
const logedUser = getCookie('username');
const categoryPath = window.location.pathname;
const postsContainer = document.querySelector(`.post-container-${mode}`);
const categoryAsideItems = document.querySelectorAll(`.categories-item-${mode}`);
const categorySelectNav = document.querySelector(`.responsive-nav-select-${mode}`);
const form = document.querySelector('form');

const setActive = (category) => {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`#c-${!category ? 'all' : category}`).classList.add('active');
};

setActive(categoryPath.substring(1));

if (logedIn === 'true') {
    navLinks[0].innerText = logedUser;
    navLinks[0].parentElement.href = `/user/profile/${logedUser}`;
    navLinks[1].innerText = 'logout';
    navLinks[1].parentElement.href = '/logout';
} else {
    createPostBtn.style.display = 'none';
    createPostResBtn.style.display = 'none';
}

createPostBtn.onclick = () => {
    modal.style.display = "block";
}

createPostResBtn.onclick = () => {
    modal.style.display = "block";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

urlType.onclick = () => {
    urlType.className = `post-type-active-${mode}`;
    textType.className = `post-type-inactive-${mode}`;
    urlTypeInput.style.display = 'block';
    textTypeInput.style.display = 'none';
};

textType.onclick = () => {
    urlType.className = `post-type-inactive-${mode}`;
    textType.className = `post-type-active-${mode}`;
    urlTypeInput.style.display = 'none';
    textTypeInput.style.display = 'block';
};

const upvoteDom = (e) => {
    const upvoteState = e.className.split('-')[1] - 0;
    const voteNumSpan = e.parentElement.querySelector('span');
    const votesNumber = voteNumSpan.innerText - 0;
    const downvoteBtn = e.parentElement.lastChild;
    const downvoteState = downvoteBtn.className.split('-')[1] - 0;
    const id = e.parentElement.querySelector('input').value;
    if (!upvoteState) {
        fetchRequest('/votes/upvote', 'POST', { id });
        e.className = `upvote-1-button-${mode}`;
        if (!downvoteState)
            voteNumSpan.innerText = votesNumber + 1;
        else {
            downvoteBtn.className = `downvote-0-button-${mode}`;
            voteNumSpan.innerText = votesNumber + 2;
        }
    } else {
        fetchRequest('/votes/unvote', 'DELETE', { id });
        e.className = `upvote-0-button-${mode}`;
        voteNumSpan.innerText = votesNumber - 1;
    }
};

const downvoteDom = (e) => {
    console.log(3);
    const downvoteState = e.className.split('-')[1] - 0;
    const voteNumSpan = e.parentElement.querySelector('span');
    const votesNumber = voteNumSpan.innerText - 0;
    const upvoteBtn = e.parentElement.firstChild;
    const upvoteState = upvoteBtn.className.split('-')[1] - 0;
    const id = e.parentElement.querySelector('input').value;
    if (!downvoteState) {
        fetchRequest('/votes/downvote', 'POST', { id });
        e.className = `downvote-1-button-${mode}`;
        if (!upvoteState)
            voteNumSpan.innerText = votesNumber - 1;
        else {
            upvoteBtn.className = `upvote-0-button-${mode}`;
            voteNumSpan.innerText = votesNumber - 2;
        }
    } else {
        fetchRequest('/votes/unvote', 'DELETE', { id });
        e.className = `downvote-0-button-${mode}`;
        voteNumSpan.innerText = votesNumber + 1;
    }
};

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
    const titleLink = createElement('a', null, title, type === 'url' ? content : `/post/${postID}`);
    const textWrapper = createElement('div', [`post-text-wrapper-${mode}`], content);
    const detailWrapper = createElement('div', [`detail-wrapper-${mode}`]);
    const commentNum = createElement('a', null, `${comments} comments`, `/post/${postID}`);
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

const clear = (element) => {
    while (element.firstChild)
        element.removeChild(element.firstChild);
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
    fetchRequest(`/r${category === '/' ? '/all' : category}`, 'GET')
        .then(data => data.json())
        .then(data => createPosts(data));
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

const postCreate = (e) => {
    e.preventDefault();
    const type = form.querySelector('.post-type-row-light').querySelector(`.post-type-active-${mode}`).innerHTML;
    const category = form.querySelector('select').value;
    const title = form.querySelectorAll('input')[2].value;
    const content = type === 'text' ? form.querySelector('textarea').value : form.querySelectorAll('input')[3].value;
    const post = {
        type: type === 'text' ? type : 'url',
        category,
        title,
        content
    };
    fetchRequest('/post/create', 'POST', post)
        .then(() => categoryEventFunc(document.querySelector('.active').innerHTML))
        .then(() => modal.style.display = "none");
};

form.addEventListener('submit', (e) => postCreate(e));