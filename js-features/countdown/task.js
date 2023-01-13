let timerElement = document.getElementById('timer');
let time = parseInt(timerElement.innerText);
let timerInterval = setInterval(() => {
    timerElement.innerText = --time;
    if (time === 0) {
        setTimeout(() => alert('Вы победили в конкурсе!'),3);
        clearInterval(timerInterval);
    }
}, 1000);