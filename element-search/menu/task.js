document.querySelectorAll('.menu__link').forEach((link) => {
    let subMenu = link.closest('.menu__item').querySelector('.menu_sub');
    if (subMenu) {
        link.onclick = (e) => {
            e.preventDefault();
            if (subMenu.classList.contains('menu_active')) {
                subMenu.classList.remove('menu_active');
                return false;
            }
            document.querySelectorAll('.menu_sub').forEach((menuSub) => {
                menuSub.classList.remove('menu_active');
            });
            subMenu.classList.add('menu_active');
        }
    }
})