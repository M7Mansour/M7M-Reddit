const elements = document.getElementsByTagName('*');
const modeToggler = document.querySelector('#mode-toggler');

const getCookie = (name) => {
    const value = `; ${cookies}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

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