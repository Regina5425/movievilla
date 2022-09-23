let modal = document.querySelector('.modal');
let modalForm = document.querySelector('.modal-form');
let openModal = document.querySelectorAll('.open-modal');
let closeModal = document.querySelector('.close-modal');

openModal.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        modalForm.classList.add('active');
    })
});

closeModal.addEventListener('click',() => {
    modal.classList.remove('active');
    modalForm.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.remove('active');
        modalForm.classList.remove('active');
    }
});