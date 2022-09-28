let modal = document.querySelector('.modal');
let modalForm = document.querySelector('.modal-form');
let openModal = document.querySelectorAll('.open-modal');
let closeModal = document.querySelector('.close-modal');
let buttonSubmit = document.querySelector('.button');

openModal.forEach((buttonSubmit) => {
    buttonSubmit.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        modalForm.classList.add('active');
    })
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    modalForm.classList.remove('active');
});

// document.addEventListener('click', (e) => {
//     if (e.target === modal) {
//         modal.classList.remove('active');
//         modalForm.classList.remove('active');
//     }
//  });

const signInBtn = document.querySelector(".signin-btn");
const signUpBtn = document.querySelector(".signup-btn");
const formBox = document.querySelector(".form-box");
const reg = document.querySelector('.reg');

signUpBtn.addEventListener('click', function () {
    formBox.classList.add('active');
    reg.classList.add('active');
});

signInBtn.addEventListener('click', function () {
    formBox.classList.remove('active');
    reg.classList.remove('active');
});