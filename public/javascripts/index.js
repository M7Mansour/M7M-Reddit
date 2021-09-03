const urlType = document.querySelector('#link-type');
const textType = document.querySelector('#text-type');
const urlTypeInput = document.querySelector('#link-type-input');
const textTypeInput = document.querySelector('#text-type-input');
const modal = document.getElementById("myModal");
const btn = document.getElementById("create-post-btn");
const navLinks = document.querySelectorAll('.nav-links');
const cookies = document.cookie;
const logedIn = getCookie('logedin');
const logedUser = getCookie('username');

if (logedIn === 'true') {
    navLinks[0].innerText = logedUser;
    navLinks[0].parentElement.href = `/user/${logedUser}`;
    navLinks[1].innerText = 'logout';
    navLinks[1].parentElement.href = '/logout';
}

btn.onclick = () => {
    modal.style.display = "block";
}

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

urlType.onclick = () => {
    console.log("hello");
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