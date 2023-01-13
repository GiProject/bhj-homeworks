let holes = document.querySelectorAll('.hole'),
    deadCounterElement = document.getElementById('dead'),
    deadCount = deadCounterElement.textContent,
    lostCounterElement = document.getElementById('lost'),
    lostCount = lostCounterElement.textContent;

for(let hole of holes) {
    hole.addEventListener('click', (e) => {
        if (e.target.classList.contains("hole_has-mole")) {
            deadCounterElement.textContent = ++deadCount;
        } else {
            lostCounterElement.textContent = ++lostCount;
        }
        isEndGame(deadCount, lostCount);
    })
}

function isEndGame(dead, lost)
{
    let endgame = false,
        isWin = false;

    if (dead === 10) {
        endgame = isWin = true;
    }
    if (lost === 5) {
        endgame = true;
    }

    if (endgame) {
        deadCounterElement.textContent = deadCount = 0;
        lostCounterElement.textContent = lostCount = 0;
        setTimeout(() => alert(isWin ? 'Вы выиграли!' : 'Вы проиграли!'),5);
    }
}
