$(document).ready(function() {
  $('.items').hover( function () {
    $(this).find('.items__dropdown').toggle();
  });
  $('li#lingua.items').hover( function() {
    $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
    $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
  }, function() {
    $('#lingua').find('.fa-chevron-up').addClass('fa-chevron-down');
    $('#lingua').find('.fa-chevron-down').removeClass('fa-chevron-up');
  });
});
