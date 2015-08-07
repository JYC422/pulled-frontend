$("body").click(function(){
  $(".dropdown-menu:not(.selectpicker + .bootstrap-select .dropdown-menu)").hide();
});

$(document).ready(function() {
  $('.search-container').hide();
  $('#irrigation_material').show();
    // document.getElementById('search_result_json').innerHTML =  JSON.stringify(publications_data);
  $('#search-bar-contractor').tipuedrop({
    'mode': 'json',
    'contentLocation': tipuedrop
  });

  $(".select-dropdown-btn").click(function(){
    event.stopPropagation();
    $(this).siblings(".dropdown-menu").toggle();
  });

  $(".select-dropdown ul li").click(function(){
    event.stopPropagation();
    $('#assign-job-modal').modal('show');
    $('#assign-job-modal .job-creation').hide();
  });
});

$('.results-container-header .search_menu_item').click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');

  $('.search-container').hide();
  var container_id = $(this).attr('data-container');
  $('#' + container_id).show();
});

$('.check-product').hide();
$('.select-individually').click(function(){
  event.stopPropagation();
  $(this).closest('.result').find('.check-product').toggle();
});

$(".result").click(function(){
  if ($(this).hasClass('expanded')) {
    $(this).removeClass('expanded');
    $(this).find(".show-more").text('View all');
  } else {
    $(this).addClass('expanded');
    $(this).find(".show-more").text('Hide');
  }
  $(this).find('.result-item-hidden').toggle();
});

$('#assign-job-modal .job-row').click(function(){
  $(this).siblings('.active').removeClass('active');
  $(this).addClass('active');
});

$('#assign-job-modal .add-new-job').click(function(){
  $(this).siblings('.job-creation').toggle();
});
