const input = document.querySelector(`#task__input`);
const tasks = document.querySelector(`#tasks__list`);
const button = document.querySelector(`#tasks__add`);
let remove = [];
button.addEventListener(`click`, (e) => {
  if (input.value !== ``) {
    tasks.innerHTML += `<div class="task">
<div class="task__title">
  ${input.value}
</div>
<a href="#" class="task__remove">&times;</a>
</div>`
  }
  e.preventDefault();
  input.value = ``;
  remove = Array.from(document.querySelectorAll(`.task__remove`));
  remove.forEach(el => {
    el.addEventListener(`click`, (e) => {
      el.closest(`.task`).remove();
    })
  })
});
