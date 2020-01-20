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
  $('.header__nav #lingua.items').hover(
    function() {
    $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
    $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
  }, function() {
    if ($('.header__nav #lingua.items').hasClass('active')) {
      $('#lingua').find('.fa-chevron-up').addClass('fa-chevron-down');
      $('#lingua').find('.fa-chevron-down').removeClass('fa-chevron-up');
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
});
