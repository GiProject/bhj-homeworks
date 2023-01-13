const dropdownValue = document.querySelector('.dropdown__value');
dropdownValue.addEventListener('click', () => {
    triggerDropdown();
});

document.querySelectorAll('.dropdown__link').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        dropdownValue.textContent = e.target.textContent;
        triggerDropdown();
    })
});

function triggerDropdown()
{
    let dropdown = document.querySelector('.dropdown__list');
    if (dropdown.classList.contains('dropdown__list_active')) {
        document.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
    } else {
        document.querySelector('.dropdown__list').classList.add('dropdown__list_active');
    }
}