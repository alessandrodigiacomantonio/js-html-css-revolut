$(document).ready(function() {
  $('.header__nav .items').hover( function () {

    if (!$(this).hasClass('active')) {
      $(this).find('.items__dropdown').show();
    }
  });
  $('li#lingua.items').hover(
    function() {
    $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
    $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
  }, function() {
    $('#lingua').find('.fa-chevron-up').addClass('fa-chevron-down');
    $('#lingua').find('.fa-chevron-down').removeClass('fa-chevron-up');
  });
  $('.header__nav__right .items').on('click', function () {
    if (!$(this).hasClass('active')) {
      $('.header__nav__right .items').removeClass('active');
      $(this).toggleClass('active');
    } else $(this).toggleClass('active');
  });
});
