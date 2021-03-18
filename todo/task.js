const input = document.querySelector(`#task__input`);
const tasks = document.querySelector(`#tasks__list`);
const button = document.querySelector(`#tasks__add`);
button.addEventListener(`click`, (e) => {
  if (input.value !== ``) {
    tasks.insertAdjacentHTML(`beforeend`, `<div class="task">
<div class="task__title">
  ${input.value}
</div>
<a href="#" class="task__remove">&times;</a>
</div>`);
  }
  e.preventDefault();
  input.value = ``;
  tasks.lastChild.querySelector(`.task__remove`).addEventListener(`click`, (e) => {
    e.target.closest(`.task`).remove();
  })
});