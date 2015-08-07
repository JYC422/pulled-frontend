$(function(){
  $('.toggleVendors').click(function(){
    $(this).find('i').toggleClass('glyphicon-menu-up glyphicon-menu-down');
    $(this).closest('.order-status-item-container').find('.order-vendors').toggle();
  });

  $('.toggleProducts').click(function(){
    $(this).find('i').toggleClass('glyphicon-menu-up glyphicon-menu-down');
    $(this).closest('.vendor-order-summary').find('.order-vendor-products').toggle();
  });
});
