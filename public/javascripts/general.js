const elements = document.getElementsByTagName('*');
const modeToggler = document.querySelector('#mode-toggler');
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

if (localStorage.getItem('mode') === null)
    localStorage.setItem('mode', 'light');

let mode = localStorage.getItem('mode');

const toggleClass = (mode) => {
    if (mode == 'light') {
        document.body.style = 'background: black;';
        document.querySelector('#logo-light').style = 'display:none;';
        document.querySelector('#logo-dark').style = 'display:flex;';
    } else {
        document.body.style = 'background: #F4F6F8;';
        document.querySelector('#logo-light').style = 'display:flex;';
        document.querySelector('#logo-dark').style = 'display:none;';
    }

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].className === '' || typeof elements[i].className === 'object')
            continue;
        for (let j = 0; j < elements[i].classList.length; j++) {
            const parts = elements[i].classList[j].split('-');
            if (parts[parts.length - 1] === 'light' && mode === 'light') {
                elements[i].classList.add(elements[i].classList[j].substring(0, elements[i].classList[j].length - 5) + 'dark');
                elements[i].classList.remove(elements[i].classList[j--]);
            } else if (parts[parts.length - 1] === 'dark' && mode === 'dark') {
                elements[i].classList.add(elements[i].classList[j].substring(0, elements[i].classList[j].length - 4) + 'light');
                elements[i].classList.remove(elements[i].classList[j--]);
            }
        }
    }
};

if (localStorage.getItem('mode') === 'dark')
    toggleClass('light');

modeToggler.addEventListener('click', () => {
    toggleClass(mode);
    if (mode === 'light') {
        localStorage.setItem('mode', 'dark');
        mode = 'dark';
    } else {
        localStorage.setItem('mode', 'light');
        mode = 'light';
    }
});

const createElement = (tag, classes, innerText, href, eventType, eventFunction, type, value) => {
    // create HTML element
    const element = document.createElement(tag);
    // add element classes
    if (classes)
        for (let i = 0; i < classes.length; i++)
            element.classList.add(classes[i]);
    // add element innerText
    if (innerText)
        element.appendChild(document.createTextNode(innerText));
    // add element href 
    if (href)
        element.href = href;
    // add event listener
    if (eventType)
        element.addEventListener(eventType, () => {
            eventFunction(element);
        });
    // specify element type
    if (type)
        element.type = type;
    // add value
    if (value)
        element.value = value;
    return element;
};

const upvoteDom = (e) => {
    if (logedIn !== 'true')
        return window.location.replace(`${window.location.origin}/login`);
    const upvoteState = e.className.split('-')[1] - 0;
    const voteNumSpan = e.parentElement.querySelector('span');
    const votesNumber = voteNumSpan.innerText - 0;
    const downvoteBtn = e.parentElement.querySelectorAll('button')[1];
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
    if (logedIn !== 'true')
        return window.location.replace(`${window.location.origin}/login`);
    const downvoteState = e.className.split('-')[1] - 0;
    const voteNumSpan = e.parentElement.querySelector('span');
    const votesNumber = voteNumSpan.innerText - 0;
    const upvoteBtn = e.parentElement.querySelector('button');
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

const setActive = (category) => {
    document.querySelector('.active').classList.remove('active');
    document.querySelector(`#c-${!category ? 'all' : category}`).classList.add('active');
};

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

const postCreate = (e) => {
    e.preventDefault();
    const form = e.target;
    const type = form.querySelector('.post-type-row-light').querySelector(`.post-type-active-${mode}`).innerHTML;
    const category = form.querySelector('select').value;
    const title = form.querySelectorAll('input')[2];
    const content = type === 'text' ? form.querySelector('textarea') : form.querySelectorAll('input')[3];
    const post = {
        type: type === 'text' ? type : 'url',
        category,
        title: title.value,
        content: content.value
    };
    return fetchRequest('/post/create', 'POST', post)
        .then(() => modal.style.display = "none")
        .then(() => {
            title.value = '';
            content.value = '';
        });
};

const clear = (element) => {
    while (element.firstChild)
        element.removeChild(element.firstChild);
};