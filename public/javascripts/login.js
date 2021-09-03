const form = document.querySelector('form');
const inputs = document.querySelectorAll('input');
const invalids = document.querySelectorAll('.valid');
const serverMessage = document.querySelector('#server-message');

const signup = (e) => {
    e.preventDefault();
    const reqBody = {
        userName: inputs[0].value,
        password: inputs[1].value
    };

    if (validate(reqBody)) {
        fetchRequest('/login', 'POST', reqBody)
            .then(response => {
                if (response.redirected)
                    window.location.href = response.url;
                else return response.json();
            }).then(data => serverMessage.innerText = data.message);
    }
};

const checkInvalid = (element, valid, index) => {
    if (valid) {
        element.classList.remove('input-required');
        invalids[index].classList.remove('required');
    } else if (!element.classList[1]) {
        element.classList.add('input-required');
        invalids[index].classList.add('required');
    }

    if (element.value.length === 0)
        invalids[index].innerText = 'required';
    else if (!valid)
        invalids[index].innerText = 'invalid';
};

const validate = (reqBody) => {
    const validation = [
        /^[a-z]{1}[a-zA-Z0-9]{4,29}$/.test(reqBody.userName) ||
        /(?=^.{0,320}$)(^[a-zA-Z0-9]{1,64}@[a-zA-Z0-9]{1,255}(\.{1}[a-zA-Z]+)*$)/.test(reqBody.userName) && reqBody.userName.split('@')[1].length <= 255,
        /^(((?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]))|((?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]))|((?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])))(?=.{8,})/.test(reqBody.password),
    ];

    for (let i = 0; i < inputs.length; i++)
        checkInvalid(inputs[i], validation[i], i);

    for (let i = 0; i < validation.length; i++)
        if (!validation[i])
            return false;
    return true;
};

form.addEventListener('submit', (e) => signup(e));