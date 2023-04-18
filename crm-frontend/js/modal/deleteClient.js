import {app} from "../app.js";
import {deleteClient} from '../setting/server.js'
import {closeModal, rebootTable} from '../function.js'

const section = document.createElement('section');
const spanShadow = document.createElement('span');
const modalWindow = document.createElement('div');
const header = document.createElement('div');
const h2 = document.createElement('h2');
const modalClose = document.createElement('div');
const btnClose = document.createElement('button');
const main = document.createElement('div');
const mainMes = document.createElement('p');
const btnCon = document.createElement('div');
const modalSave = document.createElement('button');
const modalDelete = document.createElement('button');

section.classList.add('modal');
spanShadow.classList.add('modal__shadow');
modalWindow.classList.add('modal__window');
header.classList.add('modal__header', 'modal_header-delete');
h2.classList.add('modal__name', 'modal__name-delete');
modalClose.classList.add('modal__close');
btnClose.classList.add('modal__close-btn');
main.classList.add('modal__main-delete');
mainMes.classList.add('modal__description-delete');
btnCon.classList.add('modal__btn');
modalSave.classList.add('modal__btn-save', 'modal__btn-deleteOk')
modalDelete.classList.add('modal__btn-delete');

h2.textContent = 'Удалить клиента';
mainMes.textContent = 'Вы действительно хотите удалить данного клиента?';
modalSave.textContent = 'Удалить';
modalDelete.textContent = 'Отмена';

modalClose.append(btnClose);
header.append(h2);
header.append(modalClose);

main.append(mainMes);
btnCon.append(modalSave);
btnCon.append(modalDelete);

modalWindow.append(header);
modalWindow.append(main);
modalWindow.append(btnCon);

section.append(modalWindow);
section.append(spanShadow);


let dataG

const openModalDelete = (data) => {
  app.append(section);
  section.classList.add('active');
  dataG = data;
};

modalSave.onclick = (e) => {
  e.preventDefault();

  rebootTable(section);
  deleteClient(dataG);
}

modalDelete.onclick = (e) => {
  e.preventDefault();
  deleteClient(section);
}

modalClose.onclick = (e) => {
  e.preventDefault();
  closeModal(section);
}

spanShadow.onclick = (e) => {
  closeModal(section)
}

export {openModalDelete};
