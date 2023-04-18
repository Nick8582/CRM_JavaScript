const purpureBtn = (icon, text, fn) => {
  const button = document.createElement('button');

  button.classList.add('table__btn-add');

  button.innerHTML = icon;
  button.append(text);

  button.onclick = (e) => {
    e.preventDefault();
    fn();
  }

  return button
}
export {purpureBtn}
