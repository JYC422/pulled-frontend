$(document).ready(function() {
  $('#purchase-bids-select').multiSelect();

  $(".bid-details-btn").click(function(){
    event.stopPropagation();
  });

  $(".checkout-button").click(function(){
    window.location.href = '/checkout.html';
  })

  $("#ms-purchase-bids-select .ms-list i").click(function(){
    event.stopPropagation();
    $('#bid-details').modal('show');
    $('.invoice-items-table').cardtable({myClass:'stacktable small-only' });
  })


});
