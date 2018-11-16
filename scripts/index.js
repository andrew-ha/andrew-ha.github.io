$(document).ready(function() {
  
  $(window).scroll(function () { 

    if ($(document).scrollTop() > $(window).height() ) {
      $('#navbar-id').addClass('fixed-top');
    }

    if ($(document).scrollTop() < $(window).height() ) {
      $('#navbar-id').removeClass('fixed-top');
    }

  });

});