function refreshHeaderLogin(){
  if (sessionStorage.getItem("user")) {
    $(".header-item").hide();
    $("#header-logout").show();
  } else {
    $(".header-item").show();
    $("#header-logout").hide();
  }

  $('#loginModal').modal('hide');
}

$(".login-form").submit(function(){
  var email = $(this).find(".login-email").first().val();
  var pwd = $(this).find(".login-pwd").first().val();

  if(email === "demo@mgs.com" && pwd === "demo") {
    sessionStorage.setItem("user", email);
    if (window.redirectUrl) {
      var reload = (window.location.href.indexOf("contractor") > -1);
      window.location.href = window.redirectUrl;
      if (reload) {
        window.location.reload();
      }
    }
    else {
      refreshHeaderLogin();
    }
  }
  return false;
});

$("#header-logout").click(function(){
  sessionStorage.setItem("user", "");
  refreshHeaderLogin();
  window.location.href = '/';
});

$(document).ready(function() {

  $(".login-email").each(function(){ $(this).val("demo@mgs.com"); });
  $(".login-pwd").each(function(){ $(this).val("demo"); });

  refreshHeaderLogin();
});
