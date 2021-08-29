const elements = document.getElementsByTagName('*');
const modeToggler = document.querySelector('#mode-toggler');
const urlType = document.querySelector('#link-type');
const textType = document.querySelector('#text-type');
const urlTypeInput = document.querySelector('#link-type-input');
const textTypeInput = document.querySelector('#text-type-input');

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



const modal = document.getElementById("myModal");
const btn = document.getElementById("create-post-btn");

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