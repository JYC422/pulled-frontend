$(function(){
  $('.toggleProducts').click(function(){
    $(this).find('i').toggleClass('glyphicon-menu-up glyphicon-menu-down');
    $(this).closest('.vendor-order-summary').find('.order-vendor-products').toggle();
  });
});
