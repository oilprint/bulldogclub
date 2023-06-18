
$(function () {
  




  // var mixer = mixitup('.gallery__list');

    // pagination

    const prevNext = document.querySelectorAll('.pagination__btn');
    const  numbers = document.querySelectorAll('.pagination__link');

    let currentStep = 0;

    const updateBtn = () => {
      if (currentStep === 3) {
        prevNext[1].disabled = true;
      } else if (currentStep === 0) {
        prevNext[0].disabled = true;
      } else {
        prevNext[1].disabled = false;
        prevNext[0].disabled =false;
      }
    };

    numbers.forEach((number, numIndex) => {
      number.addEventListener('click', (e) => {
        e.preventDefault();
        
        currentStep = numIndex;

        document.querySelector('.pagination__link--active').classList.remove('pagination__link--active');

        number.classList.add('pagination__link--active');
        updateBtn();

      });
    });


    prevNext.forEach(button => {
      button.addEventListener('click', (e) => {
        currentStep += e.target.id === 'next' ? 1 : -1;
        numbers.forEach((number, numIndex) => {
          console.log(numIndex, currentStep);

          number.classList.toggle('pagination__link--active', numIndex === currentStep);
          updateBtn();

        });
      });
    });
    

    // swiper

  const slider = document.querySelector('.swiper');

  const swiper = new Swiper(slider, {
    
    slidesPerView: 3,
    spaceBetween: 30, 
  
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });

  
  Fancybox.bind('[data-fancybox="gallery"]', {
  });


  const btnnShow = document.querySelector('#show');
  const cardShow = document.querySelectorAll('[data-show]');
  console.log('data-show');
     
  btnnShow.addEventListener('click', function() {
    if (
    cardShow.forEach(function (item) {
      item.classList.toggle('hidden');
      console.log('hiddev');
    })

    ){
      btnnShow.textContent = 'Show More';
    } else {

      btnnShow.textContent = 'Show Less';

    }
  });

  

  
});