/* side bar functions */
jQuery(function ($) {

  $(".sidebar-dropdown > a").click(function() {

    $(".sidebar-submenu").slideUp(200);

    if ($(this).parent().hasClass("active")) {
      $(".sidebar-dropdown").removeClass("active");
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-dropdown").removeClass("active");
      $(this).next(".sidebar-submenu").slideDown(200);
      $(this).parent().addClass("active");
    }
  });

  $(".close-sidebar").click(function() {
    $(".page-wrapper").removeClass("toggled");
  });
  $("#show-sidebar").click(function() {
    $(".page-wrapper").addClass("toggled");
  });

});

/* Animating the scroll */
$(document).ready(function (){

  // $('.scroll').on('click', function() {
  //   $('html, body').animate({
  //       scrollTop: $($(this).attr('href')).offset().top
  //     }, 1000, function() {console.log("Finished animating")}); 
  // });

  $(".scroll").click(function (){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 1000); 
  });
});

/*no scroll bar */
/*var parent = document.getElementById('container1');
var child = document.getElementById('container2');
child.style.paddingRight = child.offsetWidth - child.clientWidth + "px";*/