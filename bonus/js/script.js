$(document).ready(function() {
	var luca = $('body');
  $('.header__nav__right .items').hover(
    function () {
    	console.log('sono entrato');
    	
      if ($(this).siblings('#lingua').length == 0) {
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.items__dropdown').hide();
        $(this).addClass('active');
        $(this).find('.items__dropdown').show();
        $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
        $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
      }
      if ( $(this).siblings('#tariffazione').length == 1 && !$(this).hasClass('active') && $(this).siblings('#lingua').length == 1) {
        $(this).siblings().removeClass('active');
        $(this).siblings().find('.items__dropdown').hide();
        $(this).addClass('active');
        $(this).find('.items__dropdown').show();
        $('#lingua').find('.fa-chevron-up').addClass('fa-chevron-down');
        $('#lingua').find('.fa-chevron-down').removeClass('fa-chevron-up');
      }
    }, function () {
      console.log('sono uscito');
      $('html').one('click', function() {
    $('.header__nav__right .items').removeClass('active');
    $('.header__nav__right .items').find('.items__dropdown').hide();
  });
      
    });
  $('.header__nav__right .items').on('click', function () {

    if ($(this).siblings('#lingua').length == 0) {
      if ($(this).hasClass('active') ) {
        $('#lingua').find('.fa-chevron-up').addClass('fa-chevron-down');
        $('#lingua').find('.fa-chevron-down').removeClass('fa-chevron-up');
      } else {
        $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
        $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
      }
    }
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
