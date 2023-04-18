import {app} from "../app.js";
import {choiseJS} from "../select.js";
import {openModalDelete} from "./deleteClient.js";
import {createClient, pathClient} from "../setting/server.js";
import {closeModal, rebootTable} from "../function.js";

const newPerson = (data) => {
  const section = document.createElement('section');
  const spanShadow = document.createElement('span');
  const form = document.createElement('form');
  const divHeader = document.createElement('div');
  const h2Header = document.createElement('h2');
  const divClose = document.createElement('div');
  const btnHeaderClose = document.createElement('button');
  const spanId = document.createElement('span');
  const containerInputs = document.createElement('div');
  const modalContainerSection = document.createElement('div');
  const modalSection = document.createElement('div');
  const btnAddSelect = document.createElement('button');
  const imgAddSelect = document.createElement('img');

  section.classList.add('modal');
  spanShadow.classList.add('modal__shadow');
  form.classList.add('modal__window');
  divHeader.classList.add('modal__header');
  h2Header.classList.add('modal__name');
  spanId.classList.add('modal__id');
  divClose.classList.add('modal__close');
  btnHeaderClose.classList.add('modal__close-btn');
  containerInputs.classList.add('modal__container-inputs');
  modalContainerSection.classList.add('modal__container-selection', 'modal__container-selection--mod');
  modalSection.classList.add('modal__selection');
  btnAddSelect.classList.add('modal__add-select-contact');
  imgAddSelect.classList.add('image__add-select-contact');

  let widthWindow = window.innerWidth;

  const placeholderInput = [
    {name: 'Фамилия', id: 'surname', required: true},
    {name: 'Имя', id: 'name', required: true},
    {name: 'Отчество', id: 'lastname', required: false}
  ]

  const selectOptions = [
    {name: 'Телефон', id: 'Phone'},
    {name: 'Доп. телефон', id: 'PhonePlus'},
    {name: 'Email', id: 'Email'},
    {name: 'Vk', id: 'Vk'},
    {name: 'Facebook', id: 'Facebook'}
  ]

  if (data) {
    h2Header.textContent = 'Изменить данные'
    spanId.textContent = `ID: ${data.id}`
  } else {
    h2Header.textContent = 'Новый клиент';
  }

  section.append(form);
  section.append(spanShadow);

  form.append(divHeader);
  divHeader.append(h2Header);
  if (data) {
    divHeader.append(spanId);
  }
  divHeader.append(divClose);
  divClose.append(btnHeaderClose);

  form.append(containerInputs);

  for (let i = 0; i < placeholderInput.length; i++) {
    const modalContainerInput = document.createElement('div');
    modalContainerInput.classList.add('modal__container');
    containerInputs.append(modalContainerInput);

    const input = document.createElement('input');
    input.classList.add('modal__input');
    input.setAttribute('id', placeholderInput[i].id);
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', placeholderInput[i].name);

    const label = document.createElement('label');
    label.classList.add('modal__label');
    label.setAttribute('for', placeholderInput[i].id);
    label.textContent = placeholderInput[i].name;

    if (data) {
      input.value = data.name;
      switch (placeholderInput[i].id) {
        case "name":
          input.value = data.name;
          break
        case "surname":
          input.value = data.surname;
          break
        case "lastname":
          input.value = data.lastName;
          break
      }
    }

    modalContainerInput.append(input);
    modalContainerInput.append(label);

    if (placeholderInput[i].required) {
      const span = document.createElement('span');
      span.classList.add('modal__required');
      span.textContent = '*';
      input.setAttribute('required', '');
      label.append(span);
    }
  }
  // if (data.contacts != 0) {
  //   for(let con = 0; con < data.contacts.length; con++) {
  //     console.log(data.contacts[con])
  //   }
  // }

  imgAddSelect.setAttribute('src', './img/svg/add-select.svg');

  form.append(modalContainerSection);
  modalContainerSection.append(btnAddSelect);
  btnAddSelect.append(imgAddSelect);
  btnAddSelect.append('Добавить контакт');

  let valueContact = 0;

  btnAddSelect.onclick = (e) => {
    e.preventDefault();
    selectAndInput();
    if (valueContact >= 10) {
      btnAddSelect.remove();
      modalSection.style.marginBottom = '0';
    }
  }

  window.addEventListener('resize', function () {
    widthWindow = window.innerWidth;
    windowFunctionMobile();
  })

  let selectAndInput = (data, dataSelect) => {
    if (valueContact === 0) {
      modalContainerSection.prepend(modalSection);
    }
    valueContact++;

    const selectList = document.createElement('div');
    selectList.classList.add('select__list');
    modalSection.append(selectList);

    const select = document.createElement('select');
    const inputContact = document.createElement('input');

    inputContact.classList.add('select__input');
    inputContact.setAttribute('type', 'text');

    const btnDelete = document.createElement('button');
    btnDelete.setAttribute('aria-label', 'Удалить данные контакта');
    btnDelete.classList.add('select__btn-delete');

    select.classList.add('js-choices');
    selectList.append(select);
    selectList.append(inputContact);
    selectList.append(btnDelete);

    btnDelete.onclick = (e) => {
      e.preventDefault();
      selectList.remove();
      valueContact = valueContact - 1;
      if (valueContact === 0) {
        modalSection.remove();
      }
    }

    for (let i = 0; i < selectOptions.length; i++) {
      const option = document.createElement('option');
      option.setAttribute('value', selectOptions[i].id);
      option.textContent = selectOptions[i].name;
      select.append(option);
    }
    windowFunctionMobile();
    if (data) {
      let allOption = select.querySelectorAll("option");
      for (let a=0; a < allOption.length; a++) {
        if(allOption[a].value === dataSelect) {
          allOption[a].setAttribute('selected', true)
        }
      }
      inputContact.value = data;

      setTimeout(() => (
        choiseJS()
      ), 100)
    } else {
      choiseJS()
    }
  }

  let windowFunctionMobile = () => {
    let inputWidth = document.querySelectorAll('.select__input');
    if (inputWidth.length > 0) {
      if (widthWindow < 460) {
        for (let i = 0; i < inputWidth.length; i++) {
          inputWidth[i].setAttribute('placeholder', 'Введите данные');
        }
      } else {
        for (let i = 0; i < inputWidth.length; i++) {
          inputWidth[i].setAttribute('placeholder', 'Введите данные контакта');
        }
      }
    }
  }

  if (data) {
    for (let i = 0; i < data.contacts.length; i++) {
      let a = data.contacts[i]
      let param;
      let paramId;
      switch (a.type) {
        case 'Phone':
          param = a.value;
          paramId = 'Phone';
          break
        case 'Facebook':
          param = a.value;
          paramId = 'Facebook';
          break
        case 'Email':
          param = a.value;
          paramId = 'Email';
          break
        case 'Vk':
          param = a.value;
          paramId = 'Vk';
          break
        case 'PhonePlus':
          param = a.value;
          paramId = 'PhonePlus';
          break
      }
      selectAndInput(param, paramId);
      valueContact = valueContact + i;
    }
  }

  const btnActiveList = document.createElement('div');
  btnActiveList.classList.add('modal__btn');
  form.append(btnActiveList);

  const buttonSave = document.createElement('button');
  buttonSave.classList.add('modal__btn-save');
  buttonSave.textContent = 'Сохранить';
  btnActiveList.append(buttonSave);

  const buttonCloseBottom = document.createElement('button');

  buttonCloseBottom.classList.add('modal__btn-delete');
  if (data) {
    buttonCloseBottom.textContent = 'Удалить клиента';
    buttonCloseBottom.onclick = (e) => {
      e.preventDefault();
      closeModal(section);
      openModalDelete(data);
    }
    spanShadow.onclick = () => {
      closeModal(section)
    }
  } else {
    buttonCloseBottom.textContent = 'Отмена';
    buttonCloseBottom.onclick = (e) => {
      e.preventDefault();
      closeModal(section);
    }
    spanShadow.onclick = () => {
      closeModal(section)
    }
  }

  buttonSave.onclick = (e) => {
    e.preventDefault();

    let dataSelectList = [];
    let selectListSub = document.querySelectorAll('.select__list');

    if (!!selectListSub) {
      for (let i = 0; i < selectListSub.length; i++) {
        const optionSelect = selectListSub[i].getElementsByTagName('option')[0].getAttribute('value');
        const inputSelect = selectListSub[i].getElementsByTagName('input')[0].value;

        const arr = {type: optionSelect, value: inputSelect}
        dataSelectList.push(arr)
      }
    }

    if (data) {
      console.log('Изменения клиента с Id' + data.id);
      // console.log(data)
      // console.log(dataSelectList);
      const dataForm = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastname').value,
        surname: document.getElementById('surname').value,
        createdAt: new Date().toJSON(),
        updatedAt: new Date().toJSON(),
        contacts: dataSelectList,
      }
      // console.log(selectListSub)
      // console.log(JSON.stringify(dataForm));
      pathClient(data.id, dataForm);
    } else {
      const dataForm = {
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastname').value,
        surname: document.getElementById('surname').value,
        createdAt: new Date().toJSON(),
        updatedAt: new Date().toJSON(),
        contacts: dataSelectList,
      }
      console.log(JSON.stringify(dataForm));
      createClient(dataForm);
    }
    const tr = document.querySelector('tbody').querySelectorAll('tr');
    for (let i = 0; i < tr.length; i++) {
      tr[i].remove();
    }
    rebootTable(section)
  }

  btnActiveList.append(buttonCloseBottom);

  btnHeaderClose.onclick = (e) => {
    e.preventDefault();
    closeModal(section);
  }

  app.append(section);
  section.classList.add('active');
}

export {newPerson}
