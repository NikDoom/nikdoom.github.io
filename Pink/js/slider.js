$('.review-container').slick({
	arrows: true,
  dots: false,
  slidesToShow: 1,
  infinite: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 959,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});