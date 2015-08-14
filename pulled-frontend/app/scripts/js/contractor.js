$("body").click(function(){
  $(".dropdown-menu").hide();
});

$(".contractor-header-item").click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

  $(".contractor-container").hide();
  var container_id = $(this).attr('data-container');
  $("#" + container_id).show();
});

$(".container-data-item.invoice").click(function(){
  if(isMobile()){
    /* Open popover with less information */
    if($(this).find('.popover').length === 0){
      $(this).find(".invoice-show-contracted").popover({
        html: true,
        content: $(this).find(".invoice-expanded").html(),
        placement: 'bottom'
      });
      $(this).find(".invoice-show-contracted").popover('show');
      openModalEvent();
    }
  } else {
    /* Expand table */
    $(this).find(".invoice-contracted").toggle();
    $(this).find(".invoice-expanded").toggle();
    $(this).find(".invoice-show-contracted").toggle();
    $(this).find(".invoice-show-expanded").toggle();
  }
});

$(".container-data-item.bid").click(function(){
  $(this).find(".bid-contracted").toggle();
  $(this).find(".bid-expanded").toggle();
  $(this).find(".bid-show-contracted").toggle();
  $(this).find(".bid-show-expanded").toggle();
});

$(".container-data-item.job-cost").click(function(){
  $(this).find(".job-cost-contracted").toggle();
  $(this).find(".job-cost-expanded").toggle();
  $(this).find(".job-cost-show-contracted").toggle();
  $(this).find(".job-cost-show-expanded").toggle();
});

$(".glyphicon-unchecked, .glyphicon-checked, .dropdown-toggle, .dropdown-menu").click(function(){
  event.stopPropagation();
});

$(".bid-dropdown-btn, .search-result-dropdown-btn").click(function(){
  event.stopPropagation();
  $(this).siblings(".dropdown-menu").toggle();
});

$(".credit-application.request").click(function() {
  $("#vendors table").hide();
  $("#vendors .credit-application-container").show();
});

$(".credit-application-container .cancel-button").click(function() {
  $("#vendors .credit-application-container").hide();
  $("#vendors table").show();
});

$(".to-purchase-btn").click(function(){
  window.location.href = '/purchase_bids.html';
})

$("#jobs .edit-job-btn").click(function(){
  event.stopPropagation();
  $('#edit-job-modal').modal('show');
});
