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
    sizeChanges();
});

$(window).resize(function() {
    sizeChanges();
});

function sizeChanges () {
    if ($(window).width() < mdWidth) {
        $('.start-left').addClass('flex-row-reverse');
        $('.circle').addClass('circle-md');
        $('.company-img').addClass('company-img-md');
        $('.circle-md').removeClass('circle');
        $('.company-img-md').removeClass('company-img');
    } else {
        $('.start-left').removeClass('flex-row-reverse');
        $('.circle-md').addClass('circle');
        $('.company-img-md').addClass('company-img');
        $('.circle').removeClass('circle-md');
        $('.company-img').removeClass('company-img-md');
    }
}

var currPos = document.body.scrollTop || document.documentElement.scrollTop;
var sectionOfScreen = 5/8;
var posOnScreen = currPos + sectionOfScreen*document.documentElement.clientHeight;
var iconList = document.getElementsByClassName('timeline-circle');
var bodyList = document.getElementsByClassName('timeline-content');
var currItem = determineCurrItem();

$(document).ready(function() {
    for (var i = currItem; i < iconList.length; i++) {
        $(iconList[i]).addClass('icon-disappear-animation');
        if ($(window).width() >= mdWidth && $(bodyList[i]).parent().hasClass('start-left')) {
            $(bodyList[i]).addClass('body-disappear-left');
        } else {
            $(bodyList[i]).addClass('body-disappear-right');
        }
    }
});

$(window).scroll(function() {

    // update current position
    currPos = document.body.scrollTop || document.documentElement.scrollTop;
    posOnScreen = currPos + sectionOfScreen*document.documentElement.clientHeight;

    // draw the timeline line inside the timeline div
    if (posOnScreen >= $('#timeline-line').offset().top && posOnScreen <= $('#bottom-circle').offset().top + $('#bottom-circle').height()) {
        var lineHeight = posOnScreen - $('#timeline-line').offset().top;
        document.getElementById("timeline-line").style.height = lineHeight + "px";
    } else if (posOnScreen < $('#timeline-line').offset().top) {
        document.getElementById("timeline-line").style.height = "0px";
    } else {
        document.getElementById("timeline-line").style.height = $('#bottom-circle').offset().top - $('#timeline-line').offset().top + "px";
    }

    // edge cases
    if (currItem == 0) {
        if (posOnScreen >= $(iconList[currItem]).offset().top) {
            showTimelineSection();
        }
    } else if (currItem == iconList.length) {
        if (posOnScreen < $(iconList[currItem-1]).offset().top) {
            hideTimelineSection();
        }
    /// show icons after passing
    } else if (posOnScreen >= $(iconList[currItem]).offset().top) {
        showTimelineSection();
    // hide icons after passing backwards
    } else if (posOnScreen < $(iconList[currItem-1]).offset().top) {
        hideTimelineSection();
    }

    // bottom circle
    if (posOnScreen >= $('#bottom-circle').offset().top) {
        $('#bottom-circle').addClass('icon-appear-animation');
        $('#bottom-circle').removeClass('icon-disappear-animation');
    } else {
        $('#bottom-circle').addClass('icon-disappear-animation');
        $('#bottom-circle').removeClass('icon-appear-animation');
    }

});

// find out which part of the timeline the user is seeing, depending on current position of the viewer
function determineCurrItem() {
    for (var i = 0; i < iconList.length; i++) {
        if ($(iconList[i]).offset().top >= posOnScreen) break;
    }
    return i;
}

function showTimelineSection() {
    // iconList[currItem].style.visibility = 'visible';
    $(iconList[currItem]).addClass('icon-appear-animation');
    $(iconList[currItem]).removeClass('icon-disappear-animation');
    bodyList[currItem].style.visibility = 'visible';
    if ($(window).width() >= mdWidth && $(bodyList[currItem]).parent().hasClass('start-left')) {
        $(bodyList[currItem]).addClass('body-appear-left');
        $(bodyList[currItem]).removeClass('body-disappear-left');
    } else {
        $(bodyList[currItem]).addClass('body-appear-right');
        $(bodyList[currItem]).removeClass('body-disappear-right'); 
    }
    currItem = determineCurrItem();
}

function hideTimelineSection() {
    $(iconList[currItem-1]).addClass('icon-disappear-animation');
    $(iconList[currItem-1]).removeClass('icon-appear-animation');
    if ($(window).width() >= mdWidth && !$(bodyList[currItem]).parent().hasClass('start-left')) {
        $(bodyList[currItem-1]).addClass('body-disappear-left');
        $(bodyList[currItem-1]).removeClass('body-appear-left');
    } else {
        $(bodyList[currItem-1]).addClass('body-disappear-right');
        $(bodyList[currItem-1]).removeClass('body-appear-right');
    }
    currItem = determineCurrItem();
}

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