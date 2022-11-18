const modalAdd = document.querySelector('#btnAdd')
const modal = document.querySelector('#createClient');
const modalClose = document.querySelector('.modal__close-btn');

modalAdd.addEventListener('click', function (e) {
  e.preventDefault()
  modal.classList.add('active')
})

modalClose.addEventListener('click', function(e) {
  e.preventDefault()
  modal.classList.remove('active')
})

const openDeleteModal = document.querySelector('#openDeleteModal');
const deleteClient = document.querySelector('#deleteClient');

openDeleteModal.addEventListener('click', function (e) {
  e.preventDefault()
  modal.classList.remove('active')
  deleteClient.classList.add('active')
})
