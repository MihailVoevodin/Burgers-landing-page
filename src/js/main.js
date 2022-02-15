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
    mobile: true,
    live: true
  });
  wow.init();

  const waw = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 700,
    mobile: true,
    live: true
  });
  waw.init();

  const wuw = new WOW({
    boxClass: 'wow',
    animateClass: 'animate__animated',
    offset: 100,
    mobile: true,
    live: true
  });
  wuw.init();
  
  const accordion = document.querySelectorAll('.features-accordion__title');

  accordion.forEach(acc => {
    acc.addEventListener('click', () => {
      console.log(acc);
      const acco = acc.parentNode;
      console.log(acco);
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

});