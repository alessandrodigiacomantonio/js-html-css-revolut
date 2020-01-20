$(document).ready(function() {
  $('.items').hover( function () {
    $(this).find('.items__dropdown').toggle();
  });
});
