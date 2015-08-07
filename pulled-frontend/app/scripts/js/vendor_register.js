$("body").click(function(){
  $(".dropdown-menu:not(.selectpicker + .bootstrap-select .dropdown-menu)").hide();
});

$(document).ready(function() {
  $('#manufacturer-select').multiSelect();
  $('[data-toggle="tooltip"]').tooltip();

  $(".credit-application-btn").click(function(){
    event.stopPropagation();
  });

  $(".category-dropdown-btn").click(function(){
    console.log("click");
    event.stopPropagation();
    $(this).siblings(".dropdown-menu").toggle();
  });

  $("#add-vendor").click(function(){
    event.stopPropagation();
    $("#add-vendor").before('<div class="location-form clearfix"><div class="col-xs-6 form-group"><input class="form-control input-grey-box" placeholder="Vendor name"></div><div class="col-xs-6 form-group"><input class="form-control input-grey-box" placeholder="Vendor email"></div><div class="col-xs-4 form-group"><select class="form-control input-grey-box"><option>San Francisco</option><option>Los Angeles</option><option>San Jose</option><option>Las Vegas</option></select></div><div class="col-xs-4 form-group"><select class="form-control input-grey-box"><option>California</option><option>Nebraska</option><option>Florida</option><option>Virginia</option><option>Alabama</option></select></div><div class="col-xs-4 form-group"><input class="form-control input-grey-box" placeholder="Zip"></div></div>');
  });
});

$(".dropdown-toggle, .dropdown-menu").click(function(){
  event.stopPropagation();
});
