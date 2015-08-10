openModalEvent();

function openModalEvent(){
  $(".invoice-number.open-modal").click(function(){
    event.stopPropagation();
    $('.popover').popover('destroy');
    $('#invoice-details').modal('show');
    $('.invoice-items-table').cardtable({myClass:'stacktable small-only' });
  });

  $(".job-bid-summary.open-modal").click(function(){
    event.stopPropagation();
    $('.popover').popover('destroy');
    $('#bid-details').modal('show');
    $('.invoice-items-table').cardtable({myClass:'stacktable small-only' });
  });

  $(".job-invoice-summary.open-modal").click(function(){
    event.stopPropagation();
    $('.popover').popover('destroy');
    $('#invoice-details').modal('show');
    $('.invoice-items-table').cardtable({myClass:'stacktable small-only' });
  });
}

$( window ).resize(function() {
  $('.popover').popover('destroy');
});

function isMobile(){
  var width = window.innerWidth > 0 ? window.innerWidth : screen.width;
  return width <= 768;
}

$(document).ready(function() {
  $(".as-contractor-button").click(function(){
    window.location.href = '/contractor_register.html';
  });

  $(".as-vendor-button").click(function(){
    window.location.href = '/vendor_register.html';
  });
})
