$(document).ready(function() {
  $('.items').hover( function () {
    $('#lingua').find('.fa-chevron-down').addClass('fa-chevron-up');
    $('#lingua').find('.fa-chevron-up').removeClass('fa-chevron-down');
    $(this).find('.items__dropdown').toggle();
  });
});
