$("body").click(function(){
  $(".dropdown-menu:not(.selectpicker + .bootstrap-select .dropdown-menu)").hide();
});

$(document).ready(function() {
  $('#vendors-select').multiSelect();

  $(".credit-application-btn").click(function(){
    event.stopPropagation();
  });

  $(".category-dropdown-btn").click(function(){
    console.log("click");
    event.stopPropagation();
    $(this).siblings(".dropdown-menu").toggle();
  });
});

$(".dropdown-toggle, .dropdown-menu").click(function(){
  event.stopPropagation();
});
