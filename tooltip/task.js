const help = Array.from(document.querySelectorAll(`.has-tooltip`));
const tooltip = document.createElement(`div`);
tooltip.classList.add(`tooltip`);

help.forEach((el, i) => {
  el.addEventListener(`click`, (e) => {
    tooltip.classList.remove(`tooltip_active`);
    el.insertAdjacentElement(`afterend`, tooltip);
    tooltip.classList.toggle(`tooltip_active`);
    tooltip.textContent = el.title;
    tooltip.style.left = `${el.getBoundingClientRect().left}px`;
    tooltip.style.top = `${el.getBoundingClientRect().top + 15}px`;
    e.preventDefault();

  });
});