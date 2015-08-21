$("body").click(function(){
  $(".dropdown-menu:not(.selectpicker + .bootstrap-select .dropdown-menu)").hide();
});

$(".container-data-item").click(function(){
  $(".container-data-item").removeClass('active');
  $(this).addClass('active');

  $(".first-item.active").removeClass('active');
  $(this).children(".first-item").addClass('active');
});

$(".vendor-header-item").click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

  $(".vendor-container").hide();
  var container_id = $(this).attr('data-container');
  $("#" + container_id).show();
});

$(document).ready(function() {
  /* INVENTORY SUMMARY*/
  $('.selectpicker').selectpicker();

  $("#inventory-summary").show();

  // inventory dropdown
  $.each($('.selectDiv'), function(){
    $(this).find('.selectDefault').text($(this).find(":selected").text());
  });

  $('.selectBox').on('change',function(){
     var defaulttext2 = $(this).find(":selected").text();
     $(this).closest('.selectDiv').find('.selectDefault').text(defaulttext2);
  });

  $(".container-data-header").each(function(){
    var new_width = (100 / $(this).children('.container-data-header-item').length);
    $(this).children('.container-data-header-item').css('width', new_width + "%");
  });

  $(".container-data-item").each(function(){
    var new_width = 100 / $(this).children('.container-data-item-col').length;
    $(this).children('.container-data-item-col').css('width', new_width + "%");
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('.contractors-modal').click(function(){
    $('#tier-contractors-management').modal('show');
    $('#my-select').multiSelect();
  });

  $('.edit-contractor').click(function(){
    $('#contractor-edit').modal('show');
  });

  $(".order-management").click(function(){
    $('#order-management-modal').modal('show');
  });

  $(".payments-btn").click(function(){
    $('#payments-management-modal').modal('show');
  });

  $(".order-dropdown-btn").click(function(){
    event.stopPropagation();
    $(this).siblings(".dropdown-menu").toggle();
  });

  $(".glyphicon-unchecked, .glyphicon-checked").click(function(){
    event.stopPropagation();
  });

  // $('.datepicker').datepicker();
});

