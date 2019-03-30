$( document ).ready(function() {
  let hamburger = $('#hamburger-icon');
  let menu = $('.header-nav');
  let header = $('.header');
  let intro = $('.intro');

  hamburger.click(function() {
     hamburger.toggleClass('active');
     menu.toggle(400);
     menu.toggleClass('border');
     header.toggleClass('opacity');
     intro.toggleClass('js-head_back');      
     return false;
  });
});