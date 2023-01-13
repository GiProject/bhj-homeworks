
let modal_success = window.modal_success;
window.modal_main.classList.add('modal_active');
document.querySelectorAll('.modal__close').forEach((button) => {
    button.onclick = () => {
        button.closest('.modal').classList.remove('modal_active');
    }
});
document.querySelectorAll('.show-success').forEach((button) => {
    button.onclick = () => {
        modal_success.classList.add('modal_active');
    }
});