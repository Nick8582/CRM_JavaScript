import {purpureBtn} from "../layout/purpureBtn.js";
import {table} from "./table.js";
import {newPerson} from "../modal/modalCardPerson.js";

const Main = document.createElement('main');
const section = document.createElement('section');
const divContainer = document.createElement('div');
const h2 = document.createElement('h2')
const divContainerMod = document.createElement('div');

const icon = '<svg width="23" height="20" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
  '    <path class="svg__add-person"\n' +
  '          d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z"/>\n' +
  '</svg>\n'

Main.classList.add('main');
section.classList.add('table');
divContainer.classList.add('container');
h2.classList.add('table__title');
divContainerMod.classList.add('container', 'container-mod');


h2.textContent = 'Клиенты';

section.append(divContainer);
divContainer.append(h2);
section.append(divContainerMod);
divContainerMod.append(table)
section.append(purpureBtn(icon, 'Добавить клиента', newPerson))
Main.append(section);

export {Main};
