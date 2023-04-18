import {searchFn} from "../function.js";

const Header = document.createElement('header');
const div = document.createElement('div');
const img = document.createElement('img');
const label = document.createElement('label');
const input = document.createElement('input');

Header.classList.add('header');
div.classList.add('header__container');
img.classList.add('header__logo');
input.classList.add('header__search');

img.setAttribute('src', './img/logo.svg');
img.setAttribute('alt', 'Логотип компании');
label.setAttribute('for', 'search');
input.setAttribute('type', 'text');
input.setAttribute('id', 'search');
input.setAttribute('placeholder', 'Введите запрос')

input.onkeyup = () => {
  searchFn(input.value)
}

div.append(img);
div.append(label);
div.append(input);
Header.append(div);

export {Header}
