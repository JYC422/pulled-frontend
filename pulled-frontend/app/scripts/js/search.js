$(".search-form").submit(function(){
  var search_inputs = $(this).find('input');
  if (validate_search(search_inputs)) {
    if (!sessionStorage.getItem("user")) {
      window.redirectUrl = '/contractor.html#search-results';
      $('#loginModal').modal('show');
    } else {
      window.location.href = '/contractor.html#search-results';
    }
  } else {
    alert("Please enter valid search items");
  }
  return false;
});

$(".contractor-search-form").submit(function(){
  var search_inputs = $(this).find('input');
  if (validate_search(search_inputs)) {
    if (!sessionStorage.getItem("user")) {
      window.redirectUrl = '/contractor.html#search-results';
      $('#loginModal').modal('show');
    } else {
      $("#search").hide();
      $("#search_result").show();
      $("#contractor-search-results").show();
      window.location.hash = 'search-results';
    }
  } else {
    alert("Please enter valid search items");
  }
  return false;
});

$(".search-item-quantity").each(function(){
  for(var i = 1; i <= 100; i++){
    $(this).append("<option>" + i + "</option>");
  }
});

$("#add-item").click(function(){
  var newItem = "<div class='form-group row'>" +
                  $("#item-list .form-group:first-child").html() +
                    "</div>";
  $("#new-item").replaceWith(newItem + "<div id='new-item'></div>");
  $('.tipue_drop_input').tipuedrop();
  $(".close").click(function(){
    $(this).parents('.form-group').remove();
  });
});

$(".close").click(function(){
  $(this).parents('.form-group').remove();
});

$(document).ready(function() {
  $('.tipue_drop_input').tipuedrop();
});

function validate_search (inputs) {
  var valid = true;
  for (var i = 0; i < inputs.length; i++) {
    valid = validate_item(inputs[i].value);
    if (!valid) {
      break;
    }
  }
  return valid;
}

function validate_item (item) {
  var valid = false;
  for (var i = 0; i < tipuedrop.pages.length; i++) {
    if (tipuedrop.pages[i].title == item) {
      valid = true;
      break;
    }
  }
  return valid;
}
