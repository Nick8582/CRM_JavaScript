const thead = document.createElement('thead');
const trHead = document.createElement('tr');

const thId = document.createElement('th');
const divId = document.createElement('div');
const pId = document.createElement('p');
const spanId = document.createElement('span');

const thFio = document.createElement('th');
const divFio = document.createElement('div');
const pFio = document.createElement('p');
const spanFio = document.createElement('span');

const thDataCreate = document.createElement('th');
const divDataCreate = document.createElement('div');
const pDataCreate = document.createElement('p');
const spanDataCreate = document.createElement('span');

const thDataEdit = document.createElement('th');
const divDataEdit = document.createElement('div');
const pDataEdit = document.createElement('p');
const spanDataEdit = document.createElement('span');

const thContact = document.createElement('th');

const thChange = document.createElement('th');

thId.classList.add('table__id', 'sorted');
divId.classList.add('id', 'th-title');
pId.classList.add('table-clients-id', 'table__title-name');
spanId.classList.add('table-clients-id-img', 'table-img');

thFio.classList.add('table__fio', 'sorted');
divFio.classList.add('fio', 'th-title');
pFio.classList.add('table-clients-fio', 'table__title-name');
spanFio.classList.add('table-clients-fio-img', 'table-img');

thDataCreate.classList.add('table__data-create', 'sorted');
divDataCreate.classList.add('time-creation', 'th-title');
pDataCreate.classList.add('table-time-creation', 'table__title-name');
spanDataCreate.classList.add('table-time-creation-img', 'table-img');

thDataEdit.classList.add('table__data-edit', 'sorted');
divDataEdit.classList.add('time-change', 'th-title');
pDataEdit.classList.add('table-time-change', 'table__title-name');
spanDataEdit.classList.add('table-time-change-img', 'table-img');

thContact.classList.add('table__contact');

thChange.classList.add('table__change');

thead.append(trHead);
trHead.append(thId);
trHead.append(thFio);
trHead.append(thDataCreate);
trHead.append(thDataEdit);
trHead.append(thContact);
trHead.append(thChange);

thId.append(divId);
divId.append(pId);
pId.textContent = 'ID';
pId.append(spanId);

thFio.append(divFio);
divFio.append(pFio);
pFio.textContent = 'Фамилия Имя Отчество';
pFio.append(spanFio);
spanFio.textContent = 'А-Я';

thDataCreate.append(divDataCreate);
divDataCreate.append(pDataCreate);
pDataCreate.textContent = 'Дата и время создания'
pDataCreate.append(spanDataCreate);

thDataEdit.append(divDataEdit);
divDataEdit.append(pDataEdit);
pDataEdit.textContent = 'Последние изменения';
pDataEdit.append(spanDataEdit);

thContact.textContent = 'Контакты';

thChange.textContent = 'Действия';



export {thead}
