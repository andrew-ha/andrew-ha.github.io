// // code when webpage is ready
// $(document).ready(function() {
//   // fix whether navbar is fixed
//   if ($(document).scrollTop() >= $(window).height() ) {
//     $('.navbar').addClass('fixed-top');
//   }
//   // which webpage is the user on
//   activeLink();
// });

// // clicking on navbar links
// $(document).ready(function (){
//   $(".scroll").click(function (){
//     // animate scroll effect
//     $('html, body').stop().animate({
//       scrollTop: $($(this).attr('href')).offset().top
//     }, 1000); 
//   });
// });

// // scrolling functions
// $(document).ready(function() {
//   // change whether navbar is fixed when leaving start section
//   $(window).scroll(function () { 
//     if ($(document).scrollTop() >= $(window).height() - $('.navbar').height()) {
//       $('.navbar').addClass('fixed-top');
//       $('.navbar').removeClass('nav-bottom');
//     }
//     if ($(document).scrollTop() < $(window).height()  - $('.navbar').height()) {
//       $('.navbar').removeClass('fixed-top');
//       $('.navbar').addClass('nav-bottom');
//     }
//     // change active when scrolling
//     $('.active').removeClass('active');
//     activeLink();
//   });
// });

// // supporting functions
// function activeLink () {
//   if ($(document).scrollTop() >= $('#details-section').offset().top) {
//     $('#details-li').addClass('active');
//   } else if ($(document).scrollTop() >= $('#volunteering-section').offset().top) {
//     $('#volunteering-li').addClass('active');
//   } else if ($(document).scrollTop() >= $('#projects-section').offset().top) {
//     $('#projects-li').addClass('active');
//   } else if ($(document).scrollTop() >= $('#work-section').offset().top) {
//     $('#work-li').addClass('active');
//   } else if ($(document).scrollTop() >= $('#about-section').offset().top) {
//     $('#about-li').addClass('active');
//   } else {
//     $('#start-li').addClass('active');
//   }
// }

// jQuery(document.links).filter(function() {
//   return this.hostname != window.location.hostname;
// }).attr('target', '_blank'); 

// projects colour click
/*$(document).ready(function (){
  $("#database-project-link").click(function(){changeFocus('#database-project-link','#database-project-img');});
});
$(document).ready(function (){
  $("#streami-project-link").click(function(){changeFocus('#streami-project-link','#streami-project-img');});
});
$(document).ready(function (){
  $("#cicd-project-link").click(function(){changeFocus('#cicd-project-link','#cicd-project-img');});
});
$(document).ready(function (){
  $("#rekog-project-link").click(function(){changeFocus('#rekog-project-link','#rekog-project-img');});
});
function changeFocus (projectLink, projectImg) {
  if ($(projectLink).attr('aria-expanded') == "false") {
    removeAll();
    $(projectImg).removeClass('project-img');
    $(projectImg).addClass('project-img-clicked');
  } else if ($(projectLink).attr('aria-expanded') == "true") {
    $(projectImg).removeClass('project-img-clicked');
    $(projectImg).addClass('project-img');
  }
}

$(document).ready(function (){
  $(".fa-times").click(function(){
    removeAll();
  });
});

function removeAll() {
  $('#projectGroup').on('show.bs.collapse', function() {
    console.log("shown");
  });
  $('#projectGroup').find('.collapse.card').collapse('hide');
  $('.project-img-clicked').addClass('project-img');
  $(".project-img").removeClass('project-img-clicked');
}*/

// function collapseEvent() {
//   // $('#projectGroup').on('show.bs.collapse', function() {
//     console.log(id);
//   // });
//   // $('#projectGroup').find('.collapse.card').collapse('hide');
//   // $('.project-img-clicked').addClass('project-img');
//   // $(".project-img").removeClass('project-img-clicked');
// }

// work section javascript
var mdWidth = 768;

$(document).ready(function() {
    if ($(window).width() < mdWidth) {
        $('.start-left').addClass('flex-row-reverse');
    }
});

$(window).resize(function() {
    if ($(window).width() < mdWidth) {
        $('.start-left').addClass('flex-row-reverse');
    } else {
        $('.start-left').removeClass('flex-row-reverse');
    }
});

var currPos = document.body.scrollTop || document.documentElement.scrollTop;

$(window).scroll(function() {
    currPos = document.body.scrollTop || document.documentElement.scrollTop;
    var posOnScreen = currPos + (1/2)*document.documentElement.clientHeight;
    if(posOnScreen >= $('#line').offset().top && posOnScreen <= $('#bottom-circle').offset().top + $('#bottom-circle').height()) {
        var lineHeight = posOnScreen - $('#line').offset().top;
        document.getElementById("line").style.height = lineHeight + "px";
    } else if (posOnScreen < $('#line').offset().top) {
        document.getElementById("line").style.height = "0px";
    } else {
        document.getElementById("line").style.height = $('#timeline-div').height() - 80 + "px"
    }
});

// Project section javascript
var activeCard = null;
var activeImg = null;

$(document).ready(function() {

    $(".project-img").click(function(event) {

        var clickedImg = '#' + event.target.id;
        var isClosing = clickedImg == activeImg;
        hideProjectCard(isClosing);
        if(clickedImg == "#database-project-img") {
            changeFocus('#database-project-img','#database-project-card', isClosing);
            showProjectCard('#database-project-card', isClosing);
        } else if(clickedImg == "#streami-project-img") {
            changeFocus('#streami-project-img','#streami-project-card', isClosing);
            showProjectCard('#streami-project-card', isClosing);
        } else if(clickedImg == "#cicd-project-img") {
            changeFocus('#cicd-project-img','#cicd-project-card', isClosing);
            showProjectCard('#cicd-project-card', isClosing);
        } else if(clickedImg == "#rekog-project-img") {
            changeFocus('#rekog-project-img','#rekog-project-card', isClosing);
            showProjectCard('#rekog-project-card', isClosing);
        }

    });

});

$(document).ready(function() {
    $(".fa-times").click(function(event) {
        hideProjectCard(true);
        changeFocus(activeImg, activeCard);
    });
});

function hideProjectCard(isClosing) {
    if(!isClosing) $(activeCard).addClass('project-card-no-trans');
    $(activeCard).collapse('hide');
    if(!isClosing) $(activeCard).removeClass('project-card-no-trans');
}

function showProjectCard(projectCard, isClosing) {
    $(projectCard).collapse('toggle');
    $(projectCard).removeClass('project-card-no-trans');
    activeCard = projectCard;
    if (isClosing) activeCard = null;
}

function changeFocus(projectImg, projectCard, isClosing) {

    $(activeImg).addClass('project-img');
    $(activeImg).removeClass('project-img-clicked');
    if ($(projectCard).is('.collapse:not(.show)')) {
        if(activeCard != null) $(projectCard).addClass('project-card-no-trans');
        $(projectImg).addClass('project-img-clicked');
        $(projectImg).removeClass('project-img');
    }
    activeImg = projectImg;
    if (isClosing) activeImg = null;

}