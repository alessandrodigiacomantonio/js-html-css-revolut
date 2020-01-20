$(document).ready(function() {
  $('.header__nav__right .items').hover(
    function () {
      if ( !$(this).hasClass('active') || !$('#tariffazione') ) {
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.items__dropdown').hide();
        $(this).addClass('active');
        $(this).find('.items__dropdown').show();
      }
    }, function () {
      if ( !$(this).hasClass('active') || !$('#tariffazione') ) {
        $(this).find('.items__dropdown').hide();
      }
    });
  $('.header__nav__right .items').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.header__nav__right .items').removeClass('active');
      $(this).toggleClass('active');
      $(this).find('.items__dropdown').show();
    } else {
      $(this).toggleClass('active');
      $(this).find('.items__dropdown').hide();
    }
  });
  $('html').on('click', function() {
    $('.header__nav__right .items').removeClass('active');
    $('.header__nav__right .items').find('.items__dropdown').hide();
  });
});
