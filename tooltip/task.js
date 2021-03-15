const help = Array.from(document.querySelectorAll(`.has-tooltip`));
help.forEach((el, i) => {
  const tooltip = document.createElement(`div`);
  tooltip.innerHTML += `<div class="tooltip tooltip_active" style="left: ${el.getBoundingClientRect().left}px; top: ${el.getBoundingClientRect().top}px - 10px;">
${help[i].title}
</div>`;
  tooltip.classList.add(`item`);
  el.addEventListener(`click`, (e) => {
       if (el.querySelector(`.item`) !== null) {
      el.querySelector(`.item`).remove();
    } else  if (document.querySelector(`.item`) !== null) {
      document.querySelector(`.item`).remove();
          el.append(tooltip);
    }else {
      el.append(tooltip);
    }
    e.preventDefault();

  });
});