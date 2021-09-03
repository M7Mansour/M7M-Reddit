const elements = document.getElementsByTagName('*');
const modeToggler = document.querySelector('#mode-toggler');

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