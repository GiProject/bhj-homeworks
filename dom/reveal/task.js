window.addEventListener('scroll', () => {
    visibleElement(document.querySelector('.reveal'));
});

function visibleElement(elem)
{const {top, bottom} = elem.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) {
        elem.classList.add('reveal_active');
    }
}