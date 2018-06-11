$('.slider-1').slick({
  centerMode: true,
  centerPadding: '80px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerPadding: '70px',
        slidesToShow: 1
      }
    },
    {
      breakpoint: 560,
      settings: {
        centerPadding: '40px',
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
  asNavFor: '.slider-2-nav,.slider-2-text'
});

$('.slider-2-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-2-nav,.slider-2-for'
});

$('.slider-2-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-2-for,.slider-2-text',
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

$('#nav-home').click(function(e) {
  $('body').scrollTo('#home', 500);
});
$('#nav-about').click(function(e) {
  $('body').scrollTo('#about', 500);
});
$('#nav-gallery').click(function(e) {
  $('body').scrollTo('#gallery', 500);
});
$('#nav-products').click(function(e) {
  $('body').scrollTo('#products', 500);
});
$('#nav-contact').click(function(e) {
  $('body').scrollTo('#contact', 500);
});
$('.button-1').click(function(e) {
  $('body').scrollTo('#contact', 500);
});
$('.button-2').click(function(e) {
  $('body').scrollTo('#subscribe', 500);
});
$('#contact-form').submit(function (e) {
  const data = $('#contact-form').serializeArray().reduce(function (prev, curr) {
    prev[curr.name] = curr.value;
    return prev;
  }, {});
  $.ajax({
    type: 'POST',
    url: '/contact',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success: function(data) {
      alert(data && data.result);
    },
    error: function(error) {
      alert('Error:' + error);
    },
  });
  e.preventDefault();
});