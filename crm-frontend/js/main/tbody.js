import {openModalDelete} from "../modal/deleteClient.js";
import {newPerson} from "../modal/modalCardPerson.js";

const tbody = document.createElement('tbody');

const trPreload = document.createElement('tr');
const tdPreload = document.createElement('td');
const divPreload = document.createElement('div');
const spanLoad = document.createElement('span');
const imgLoad = document.createElement('img');

const preloadFn = () => {
  trPreload.classList.add('table__preload');
  tdPreload.setAttribute('colspan', '6');
  divPreload.classList.add('table__col-load');
  spanLoad.classList.add('loader');
  imgLoad.setAttribute('src', './img/svg/loader.svg');

  tbody.append(trPreload);
  trPreload.append(tdPreload);
  tdPreload.append(divPreload);
  divPreload.append(spanLoad);
  spanLoad.append(imgLoad);
  return spanLoad
}

preloadFn();

const loadServer = (err, data) => {
  // console.log(err, data)
  setTimeout(function () {
    const newspaperSpinning = [
      {transform: 'rotate(0) scale(1)'},
      {transform: 'rotate(360deg) scale(0)'},
    ];

    const newspaperTiming = {
      duration: 2000,
      iterations: 1,
      easing: "linear"
    }
    spanLoad.animate(newspaperSpinning, newspaperTiming);
    setTimeout(function () {
      spanLoad.remove();
      if (err === null) {
        trPreload.remove();
        for (let i = 0; i < data.length; i++) {
          loadCartPerson(data[i]);
        }
      } else {
        const errorMes = document.createElement('h2');
        const pErrorMes = document.createElement('p');
        errorMes.textContent = "Проблемы с сервером :("
        pErrorMes.textContent = err;
        divPreload.append(errorMes);
        divPreload.append(pErrorMes);
      }
    }, 1900);
  }, 3700);
}

const loadCartPerson = (data) => {
  const trPerson = document.createElement('tr');

  const tdId = document.createElement('td')
  const tdFio = document.createElement('td');
  const tdDataCreate = document.createElement('td');
  const tdDataEdit = document.createElement('td');
  const tdContact = document.createElement('td');
  const tdChange = document.createElement('td');

  const divId = document.createElement('div');
  const divFio = document.createElement('div');
  const spanDataCreateD = document.createElement('span');
  const spanDataCreateT = document.createElement('span');
  const spanDataEditD = document.createElement('span');
  const spanDataEditT = document.createElement('span');
  const ulContactList = document.createElement('ul');
  const divChange = document.createElement('div');

  tdId.classList.add('table__id');
  tdFio.classList.add('table__fio');
  tdDataCreate.classList.add('table__data-create');
  tdDataEdit.classList.add('table__data-edit');
  tdContact.classList.add('table__contact');
  tdChange.classList.add('table__change');

  divId.classList.add('id__person');
  divFio.classList.add('fio__person');
  spanDataCreateD.classList.add('data-create__date');
  spanDataCreateT.classList.add('data-create__time');
  spanDataEditD.classList.add('data-edit__date');
  spanDataEditT.classList.add('data-edit__time');
  ulContactList.classList.add('contact__list');
  divChange.classList.add('change__container');

  divId.textContent = data.id;
  divFio.textContent = data.lastName + ' ' + data.name + ' ' + data.surname
  spanDataCreateD.textContent = new Date(data.createdAt).toLocaleDateString();
  spanDataCreateT.textContent = new Date(data.createdAt).toLocaleTimeString().slice(0, -3);
  spanDataEditD.textContent = new Date(data.updatedAt).toLocaleDateString();
  spanDataEditT.textContent = new Date(data.updatedAt).toLocaleTimeString().slice(0, -3);


  for(let i = 0; i < data.contacts.length; i++) {
    let dataContact = data.contacts[i];

    let maskPhone = dataContact.value.slice(0, 2) + ' (' + dataContact.value.slice(2, 5) + ') ' + dataContact.value.slice(5, 8) + '-' + dataContact.value.slice(8, 10) + '-' + dataContact.value.slice(10, 12);

    const liContactItem = document.createElement('li');
    const aContactLink = document.createElement('a');
    const imgContactLink = document.createElement('img');
    const spanTooltip = document.createElement('span');
    const spanTooltipHref = document.createElement('span');

    liContactItem.classList.add('contact__item');
    aContactLink.classList.add('contact__link');
    spanTooltip.classList.add('tooltip');
    spanTooltipHref.classList.add('tooltip__href');

    if(dataContact.type === 'Phone') {
      aContactLink.setAttribute('href', `tel:${dataContact.value}`);
      imgContactLink.setAttribute('src', './img/svg/phone.svg');
      imgContactLink.setAttribute('alt', 'Иконка телефона');
      spanTooltipHref.textContent = maskPhone;
    } else if(dataContact.type === 'Facebook') {
      aContactLink.setAttribute('href', `${dataContact.value}`);
      aContactLink.setAttribute('target', '_blink');
      imgContactLink.setAttribute('src', './img/svg/fb.svg');
      imgContactLink.setAttribute('alt', 'Иконка Facebook');
      spanTooltipHref.textContent = dataContact.value.replace(/^.*?:\/\/.*?(?=\/|$)/,'');
    } else if(dataContact.type === 'Vk') {
      aContactLink.setAttribute('href', `${dataContact.value}`);
      aContactLink.setAttribute('target', '_blink');
      imgContactLink.setAttribute('src', './img/svg/vk.svg');
      imgContactLink.setAttribute('alt', 'Иконка VK');
      spanTooltipHref.textContent = dataContact.value.replace(/^.*?:\/\/.*?(?=\/|$)/,'');
    } else if(dataContact.type === 'Email') {
      aContactLink.setAttribute('href', `mailto:${dataContact.value}`);
      imgContactLink.setAttribute('src', './img/svg/email.svg');
      imgContactLink.setAttribute('alt', 'Иконка Email');
      spanTooltipHref.textContent = dataContact.value;
    } else {
      aContactLink.setAttribute('href', `tel:${dataContact.value}`);
      imgContactLink.setAttribute('src', './img/svg/contact.svg');
      imgContactLink.setAttribute('alt', 'Иконка доп. телефона');
      spanTooltipHref.textContent = maskPhone;
    }

    spanTooltip.append(spanTooltipHref);
    aContactLink.append(imgContactLink);
    aContactLink.append(spanTooltip);
    liContactItem.append(aContactLink);
    ulContactList.append(liContactItem);
  }

  const btnChangeEdit = document.createElement('button');
  const btnChangeDelete = document.createElement('button');

  btnChangeEdit.classList.add('change__edit');
  btnChangeDelete.classList.add('change__delete');

  btnChangeEdit.textContent = 'Изменить';
  btnChangeDelete.textContent = 'Удалить';

  btnChangeEdit.onclick = (e) => {
    e.preventDefault();
    newPerson(data);
  }

  btnChangeDelete.onclick = (e) => {
    e.preventDefault();
    // trPerson.remove()
    openModalDelete(data);
  }

  divChange.append(btnChangeEdit);
  divChange.append(btnChangeDelete);

  tdId.append(divId);
  tdFio.append(divFio);
  tdDataCreate.append(spanDataCreateD);
  tdDataCreate.append(spanDataCreateT);
  tdDataEdit.append(spanDataEditD);
  tdDataEdit.append(spanDataEditT);
  tdContact.append(ulContactList);
  tdChange.append(divChange);

  trPerson.append(tdId);
  trPerson.append(tdFio);
  trPerson.append(tdDataCreate);
  trPerson.append(tdDataEdit);
  trPerson.append(tdContact);
  trPerson.append(tdChange);

  tbody.append(trPerson);
  // console.log(new Date().toJSON())
}

export {tbody, loadServer, preloadFn}
