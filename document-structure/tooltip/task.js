const tooltip = document.querySelector('.tooltip');
let currentElement;
document.querySelectorAll('.has-tooltip').forEach(textField => {
    textField.addEventListener('click', e => {
        e.preventDefault();
        if (currentElement === e.currentTarget) {
            currentElement = '';
            tooltip.classList.remove('tooltip_active');
            return false;
        }
        currentElement = e.currentTarget;
        let title = e.currentTarget.getAttribute('title');
        let {bottom, left} = e.currentTarget.getBoundingClientRect();
        tooltip.textContent = title;
        tooltip.classList.add('tooltip_active');
        tooltip.style.top = bottom + 'px';
        tooltip.style.left = left + 'px';
    });
});

window.addEventListener('scroll', e => {
    if (tooltip.classList.contains('tooltip_active')) {
        let {bottom, left} = currentElement.getBoundingClientRect();
        tooltip.style.top = bottom + 'px';
        tooltip.style.left = left + 'px';
        console.log(tooltip);
    }
});
