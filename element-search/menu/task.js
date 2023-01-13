document.querySelectorAll('.menu__link').forEach((link) => {
    let subMenu = link.closest('.menu__item').querySelector('.menu_sub');
    if (subMenu) {
        link.onclick = (e) => {
            e.preventDefault();
            document.querySelectorAll('.menu_sub').forEach((menuSub) => {
                menuSub.classList.remove('menu_active');
            })
            subMenu.classList.add('menu_active');
        }
    }
})