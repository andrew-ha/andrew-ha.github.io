// code when webpage is ready
$(document).ready(function() {
  // fix whether navbar is fixed
  if ($(document).scrollTop() >= $(window).height() ) {
    $('.navbar').addClass('fixed-top');
  }
  // which webpage is the user on
  activeLink();
});

// clicking on navbar links
$(document).ready(function (){
  $(".scroll").click(function (){
    // animate scroll effect
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top + 1
    }, 1000); 
  });
});

// scrolling functions
$(document).ready(function() {
  // change whether navbar is fixed when leaving start section
  $(window).scroll(function () { 
    if ($(document).scrollTop() >= $(window).height() - $('.navbar').height()) {
      $('.navbar').addClass('fixed-top');
      $('.navbar').removeClass('nav-bottom');
    }
    if ($(document).scrollTop() < $(window).height()  - $('.navbar').height()) {
      $('.navbar').removeClass('fixed-top');
      $('.navbar').addClass('nav-bottom');
    }
    // change active when scrolling
    $('.active').removeClass('active');
    activeLink();
  });
});

// supporting functions
function activeLink () {
  if ($(document).scrollTop() >= $('#details-section').offset().top) {
    $('#details-li').addClass('active');
  } else if ($(document).scrollTop() >= $('#volunteering-section').offset().top) {
    $('#volunteering-li').addClass('active');
  } else if ($(document).scrollTop() >= $('#projects-section').offset().top) {
    $('#projects-li').addClass('active');
  } else if ($(document).scrollTop() >= $('#work-section').offset().top) {
    $('#work-li').addClass('active');
  } else if ($(document).scrollTop() >= $('#about-section').offset().top) {
    $('#about-li').addClass('active');
  } else {
    $('#start-li').addClass('active');
  }
}

// jQuery(document.links).filter(function() {
//   return this.hostname != window.location.hostname;
// }).attr('target', '_blank');  