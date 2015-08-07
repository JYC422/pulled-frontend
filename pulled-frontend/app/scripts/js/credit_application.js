$("#partnership").click(function(){
  $("#subform-company").hide();
  $("#subform-partnership").show();
  $("#partnership").addClass("selected");
  $("#company").removeClass("selected");
});

$("#company").click(function(){
  $("#subform-partnership").hide();
  $("#subform-company").show();
  $("#company").addClass("selected");
  $("#partnership").removeClass("selected");
});

$("#partner1-home-no").click(function(){
  $("#partner1-amount").hide();
  swapCirclesNo("partner1-home");
});
$("#partner1-home-yes").click(function(){
  $("#partner1-amount").show();
  swapCirclesYes("partner1-home");
});

$("#partner2-home-no").click(function(){
  $("#partner2-amount").hide();
  swapCirclesNo("partner2-home");
});
$("#partner2-home-yes").click(function(){
  $("#partner2-amount").show();
  swapCirclesYes("partner2-home");
});

$("#po-required-no").click(function(){
  swapCirclesNo("po-required");
});
$("#po-required-yes").click(function(){
  swapCirclesYes("po-required");
});

$("#job-name-required-no").click(function(){
  swapCirclesNo("job-name-required");
});
$("#job-name-required-yes").click(function(){
  swapCirclesYes("job-name-required");
});

$("#for-resale-no").click(function(){
  $("#resale-number").hide();
  swapCirclesNo("for-resale");
});
$("#for-resale-yes").click(function(){
  $("#resale-number").show();
  swapCirclesYes("for-resale");
});

$("#business-site-owned-no").click(function(){
  $("#business-site-owned").hide();
  swapCirclesNo("business-site-owned");
});
$("#business-site-owned-yes").click(function(){
  $("#business-site-owned").show();
  swapCirclesYes("business-site-owned");
});

function swapCirclesYes (element_id) {
  $("#" + element_id + "-yes").removeClass("fa-circle-o");
  $("#" + element_id + "-yes").addClass("fa-dot-circle-o");
  $("#" + element_id + "-no").removeClass("fa-dot-circle-o");
  $("#" + element_id + "-no").addClass("fa-circle-o");
}

function swapCirclesNo (element_id) {
  $("#" + element_id + "-no").removeClass("fa-circle-o");
  $("#" + element_id + "-no").addClass("fa-dot-circle-o");
  $("#" + element_id + "-yes").removeClass("fa-dot-circle-o");
  $("#" + element_id + "-yes").addClass("fa-circle-o");
}
