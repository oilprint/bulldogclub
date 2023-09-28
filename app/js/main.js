
$(function () {

   //Mobile Menu
    const burger = document.querySelector('.header__burger');

    console.log('test');
    const mobileMenu = document.querySelector('.mobile-menu'); 
    const closeButton = document.querySelector('.mobile-menu__button');
    const bodyLock = document.querySelector('body'); 

    burger.addEventListener('click', () => {
      mobileMenu.classList.add('active'); 
      bodyLock.classList.add('lock');
    });

    closeButton.addEventListener('click', () => {
      mobileMenu.classList.remove('active'); 
      bodyLock.classList.remove('lock');
    });



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

    //end pagination
    
  Fancybox.bind('[data-fancybox="gallery"]', {
  });



  //swiper
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
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

    breakpoints: {
    
    568: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    
    1024: {
      slidesPerView: 3,
      spaceBetween: 30
    }    
  }  

  });

  //swiper end


 

  // show more


  const btnShow = document.querySelector('#show');
  const cardShow = document.querySelector('[data-show]');

  console.log('show');
      
    btnShow.addEventListener('click', function() {
     
      if (
        cardShow.classList.toggle('hidden')

      ) {

        btnShow.textContent = "Show more";

      } else {
        btnShow.textContent = "Show Less";
      }

    });

  // show more end

   
  
});


$(function () {
  var mixer = mixitup('.gallery__list');
});