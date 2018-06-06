$('.slider-1').slick({
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerPadding: '80px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.slider-2-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-2-nav'
  });
  
  $('.slider-2-nav').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider-2-for',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }
      ]
  });