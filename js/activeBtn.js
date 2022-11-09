const modalAdd = document.querySelector('#btnAdd')
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close-btn');

modalAdd.addEventListener('click', function (e) {
  e.preventDefault()
  modal.classList.add('active')
})

modalClose.addEventListener('click', function(e) {
  e.preventDefault()
  modal.classList.remove('active')
})


