const form = document.getElementById('tasks__form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let input = form.querySelector('#task__input');
    document.getElementById('tasks__list').innerHTML += `<div class="task">
      <div class="task__title">
        ${input.value}
      </div>
      <a href="#" class="task__remove">&times;</a>
    </div>`;
    input.value = '';
});

document.getElementById('tasks__list').addEventListener('click', e => {
    if (e.target.classList.contains('task__remove')) {
        e.target.closest('.task').remove();
    }
});
