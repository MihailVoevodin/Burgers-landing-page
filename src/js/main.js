$(function () {

  $('.about-slider').slick({
    fade: true,
    dots: true,
    prevArrow: '<img class="slider-arrow slider-arrow__prev" src="img/slider-prev.svg" alt="Arrow">',
    nextArrow: '<img class="slider-arrow slider-arrow__next" src="img/slider-next.svg" alt="Arrow">',
  });

  const wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 700,
    mobile: false,
    live: true
  });
  wow.init();

  const waw = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 700,
    mobile: false,
    live: true
  });
  waw.init();

  const wuw = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 100,
    mobile: false,
    live: true
  });
  wuw.init();
  
  const accordion = document.querySelectorAll('.features-accordion__title');

  accordion.forEach(acc => {
    acc.addEventListener('click', () => {
      const acco = acc.parentNode;
      if (acco.classList.contains('active')) {
        acco.classList.remove('active');
      } else {
        document.querySelectorAll('.features-accordion__item').forEach(child => {
          child.classList.remove('active');
          console.log(child);
        });
        
        acco.classList.toggle('active');
      }
    });

    

  });

  const menuClose = document.querySelector('.hamburger-menu__close'),
        menuSide = document.querySelector('.hamburger-menu'),
        menuOpen = document.querySelector('.hamburger');

    menuOpen.addEventListener('click', () => {
        menuSide.classList.add('active');
    }) 

    menuClose.addEventListener('click', () => {
        menuSide.classList.remove('active');
    })

    document.addEventListener('click', e => {
        if (!e.target.closest('.hamburger-menu') && !e.target.closest('.hamburger')) {
            menuSide.classList.remove('active');
        }
    })

    const menuItems = document.querySelectorAll('.hamburger-menu__item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuSide.classList.remove('active');
        })
    })
});