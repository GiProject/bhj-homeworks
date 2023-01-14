document.querySelectorAll('.rotator').forEach((rotator) => {
    let rotateElements = rotator.querySelectorAll('.rotator__case'),
        current = Array.from(rotateElements).indexOf(rotator.querySelector('.rotator__case_active'));
    setInterval(() => {
        rotateElements.forEach((elem) => {
           elem.classList.remove('rotator__case_active');
        });
        if (current >= rotateElements.length - 1) {
            current = 0;
        } else {
            current++;
        }
        rotateElements[current].classList.add('rotator__case_active');
    }, 1000);
});
