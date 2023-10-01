
$(function () {

  const buttons = document.querySelectorAll('[data-modal-button]');
  const modal = document.querySelector('[data-modal]');
  const buttonClose = document.querySelector('[data-modal-close]');
  const bodyLock = document.querySelector('body'); 
 

  buttons.forEach(function (item) {
    item.addEventListener('click', function () {
      modal.classList.remove('hidden');
      bodyLock.classList.add('lock');
    });
  });
 
  buttonClose.addEventListener('click', function () {
    modal.classList.add('hidden');
    bodyLock.classList.remove('lock');
    
  });

  modal.addEventListener('click', function ( ) {
    modal.classList.add('hidden');   
    bodyLock.classList.remove('lock');
  });


  modal.querySelector('.modal').addEventListener('click', function (e) {
    e.stopPropagation();
  });


});
