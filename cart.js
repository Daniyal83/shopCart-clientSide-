$(document).on('click', '.delete', function() {
  var thisRow = $(this).closest('tr');
  var thisTable = $(this).closest('table');
  var numRows = $(thisTable).find('tbody tr').length;

  $(thisRow).fadeOut(300);
  setTimeout(function(){
    $(thisRow).remove();
  }, 310);
  
  if(numRows === 1) {
    setTimeout(function(){
      $(thisTable).remove();
    }, 310);
    $("#cartTitle").text("Ваша корзина пуста");
    $("#cartTitle").css("text-align", "center");
}
});

$(document).on('click', '.add', function(){
  var thisRow = $(this).closest('tr');
  var cartTable = $('#cart');
  var cartTableLastRow = $(cartTable).find('tbody tr:last-of-type');

  $(thisRow).clone().insertAfter(cartTableLastRow);
  $(cartTable).find('.add').attr('class', 'delete').text('Удалить');
});


