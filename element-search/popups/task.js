
let modalSuccess = document.getElementById('modal_success');
document.getElementById('modal_main').classList.add('modal_active');
document.querySelectorAll('.modal__close').forEach((button) => {
    button.addEventListener('click', (e) => {
        button.closest('.modal').classList.remove('modal_active');
    });
});
document.querySelectorAll('.show-success').forEach((button) => {
    button.onclick = () => {
        modalSuccess.classList.add('modal_active');
    }
});