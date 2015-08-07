$("body").click(function(){
  $(".dropdown-menu:not(.selectpicker + .bootstrap-select .dropdown-menu)").hide();
});

$(".container-data-item").click(function(){
  $(".container-data-item").removeClass('active');
  $(this).addClass('active');

  $(".first-item.active").removeClass('active');
  $(this).children(".first-item").addClass('active');
});

$(".company-header-item").click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

  $(".company-container").hide();
  var container_id = $(this).attr('data-container');
  $("#" + container_id).show();
});

$(".company-container .list-group-item").click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
});

$(".company-container .edit-button").click(function(){
  $('#edit-vendor-modal').modal('show');
});

$(".company-container .add-location").click(function(){
  $('#new-vendor-modal').modal('show');
});

$(".company-container .view-details").click(function(){
  $('#credit-app-details-modal').modal('show');
});

$(".company-container .save-info").click(function(){
  $('#edit-company-modal').modal('show');
});

$(".company-container .account-button").click(function(){
  window.location.href = '/vendor.html';
});

$(document).ready(function() {
  $('#company-information').show();

  $('.selectpicker').selectpicker();

  $('.mobile-card-table').cardtable( { myClass:'stacktable small-only' } );
});


