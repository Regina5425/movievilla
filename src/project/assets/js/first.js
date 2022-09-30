const modal = document.querySelector('.modal');
const modalForm = document.querySelector('.reg');
const openModal = document.querySelectorAll('.open-modal');
const Submit = document.querySelector('.form_btn');
const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const reg = document.querySelector('.reg');
let closeModal = document.querySelector('.close-modal');


openModal.forEach((Submit) => {
    Submit.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        modalForm.classList.add('active');
    })
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalForm.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    if (name !== null) {
        document.querySelector('.username').value = name;
    }
})

document.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        modalForm.classList.remove('active');
    }
});

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    reg.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    reg.classList.remove('active');
});

const form = document.querySelectorAll(".form");
let error = document.querySelector(".error");
let finalError = "";

form.forEach((Submit) => {
    Submit.addEventListener('click', (e) => {
        e.preventDefault();
        checkTextInput('input[name="user"]', 'Логин');
        checkTextInput('input[name="password"]', 'Пароль');
        error.innerHTML = finalError;
    });
})
function checkTextInput(selector, inputName) {
    let input = document.querySelector(selector);
    if (input.value.length > 1) {
        let userName = document.querySelector('.username').value;

        if (localStorage.getItem('name') == null) {
            localStorage.setItem('name', userName)
        }

    }
    else {
        finalError += `Заполните поле ${inputName} <br>`;
    }
}

