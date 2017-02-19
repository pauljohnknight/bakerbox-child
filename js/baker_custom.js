
jQuery(document).ready(function($){

// BRINGS YOU BACK TO THE TOP OF THE PAGE ON REFRESH

  // var url = window.location.href;
  //     if( url.indexOf('#') < 0 ) {
  //         window.location.replace(url + "#");
  //     } else {
  //         window.location.replace(url);
  //     };

// PRELOADER

window.addEventListener('load', function(){
    // var loader_overlay = document.getElementById("loader_overlay");
    // loader_overlay.style.display = "none";
    boxHeight();
});


// TOP BAR

$('#page-container').before('<div id="topbar"></div>');
$('#main-header').after('<div class="bb-menubox shimmieup"><p><a href="http://localhost:8888/BakerBox/events/list/"><span>Book Now</span></a></p></div>');
$('.logo_container span').attr('class', 'shimmieup');

  // ----------- LINES
  //  This is a row of divs each with an inner div positioned absolutely

  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox1"><div class="bb-innerdiv" id="bb-innerdiv1"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox2"><div class="bb-innerdiv" id="bb-innerdiv2"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox3"><div class="bb-innerdiv" id="bb-innerdiv3"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox4"><div class="bb-innerdiv" id="bb-innerdiv4"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox5"><div class="bb-innerdiv" id="bb-innerdiv5"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox6"><div class="bb-innerdiv" id="bb-innerdiv6"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox7"><div class="bb-innerdiv" id="bb-innerdiv7"></div></div>');
  $('.page-id-36 .et_pb_section_0').before('<div class="baker_linebox" id="linebox8"><div class="bb-innerdiv" id="bb-innerdiv8"></div></div>');


//    VERTICAL TEXT 1
$('.page-id-36 .et_pb_row_1').after('<div class="vtext" id="verticaltext1"><p>Have fun whilst you learn<span class="bb_sitelink1"></span></p></div>');


// INITIAL ANIMATIONS ON LOAD FOR HOMES
// THESE ANIMATIONS ARE NOT LINKED TO SCROLL MAGIC

var boxHeight = function() {
  var tl2 = new TimelineMax();

tl2
.fromTo('#topbar', 1, {scaleY: '100vh'}, {scaleY: '.75vh', ease: Back.easeOut.config(.2)})
.staggerFrom('.shimmieup', 1, {y:90, ease: Back.easeOut.config(1.7)}, .07, '-=1' )

.to ('#menu-item-318', 1.5, {autoAlpha: 1, x: -113, ease: Power3.easeOut, delay: 0})
.to ('#menu-item-309', 1.5, {autoAlpha: 1, x: -222, ease: Power3.easeOut}, '-=1.5')
.to ('#menu-item-307', 1.5, {autoAlpha: 1, x: -338, ease: Power3.easeOut}, '-=1.5')
.to ('#menu-item-308', 1.5, {autoAlpha: 1, x: -442, ease: Power3.easeOut}, '-=1.5')
;
};

// -------- MOBILE MENU CAUSING PAGE TO FADE OUT

var mobilehandler1 = function() {
// TweenMax.to ('.page-id-36 .et_pb_section_0', .75, {autoAlpha: .5});
TweenMax.set ('#mobile_menu .menu-item', {autoAlpha: 1});
TweenMax.to ('.page-id-36 .et_pb_section_0', .75, {autoAlpha: .2});
TweenMax.to ('.page-id-36 .et_pb_section_1', .75, {autoAlpha: .2});
TweenMax.to ('.logo_container span', .75, {autoAlpha: .2});


$(this).one("click", mobileHandler2);
};

var mobileHandler2 = function() {
TweenMax.to ('.page-id-36 .et_pb_section_0', .75, {autoAlpha: 1});
TweenMax.to ('.page-id-36 .et_pb_section_1', .75, {autoAlpha: 1});
TweenMax.to ('.logo_container span', .75, {autoAlpha: 1});
$(this).one("click", mobilehandler1);
};

$(".mobile_menu_bar").one("click", mobilehandler1);

// TEXT SLIDER ON FIRST TEXT CONTAINER

var slidetext1 = ('.slidetext1'),
    slidetext2 = ('.slidetext2'),
    more = ('.more'),             //spans at bottom of slide
    less = ('.less');

var bbOpenSlide = function(){
TweenMax.to('.slidetext1', .75, {xPercent: -115, ease: Power3.eastOut});
TweenMax.to('.slidetext2', 1, {xPercent: -115, delay: .2, ease: Power3.eastOut});
TweenMax.to('.less', 1.75, {autoAlpha: 1});
TweenMax.to('.more', 1.75, {autoAlpha: 0});

      $(less).one("click", bbCloseSlide);
};

var bbCloseSlide = function(){
TweenMax.to('.slidetext1', 1.5, {xPercent: 0, delay: .2, ease: Power3.eastOut});
TweenMax.to('.slidetext2', 1, {xPercent: 0, ease: Power3.eastOut});
TweenMax.to('.less', 2, {autoAlpha: 0});
TweenMax.to('.more', 2, {autoAlpha: 1});

      $(more).one("click", bbOpenSlide);  // HAD TO USE VARIABLE INSTEAD OF 'THIS', WILL LOOK INTO WHY
};

$(more).one("click", bbOpenSlide);


// MORE... ON FIRST TEXT SECTION
TweenMax.from('.more', 3, {color: '#D46142', repeat: -1,   yoyo: true});


// SIGN UP FORM

$('#hellyeah').click(function() {

TweenMax.to ('#courses', .3, {yPercent: -70, autoAlpha: 0});
TweenMax.fromTo ('#bb_form', .7, {yPercent:70}, {autoAlpha: 1, yPercent:0, ease: Back.easeOut.config(1.7)});

});


// -------------------- ANIMATION TWEENS FOR SCROLL MAGIC

var onScrollText1 = TweenMax.staggerFrom('.shimmieup2', 1.5,{autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var onScrollVerticalText = TweenMax.staggerFrom('#verticaltext1', 1.5,{delay: .15, autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var onScrollText2 = TweenMax.staggerFrom('.shimmieup3', 1.5,{autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var onScrollText3 = TweenMax.staggerFrom('.shimmieup4', 1.5,{autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var onScrollText4 = TweenMax.staggerFrom('.shimmieup5', 1.5,{autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var footerWidgetsUp = TweenMax.staggerFrom('.shimmieup6', 1.5,{autoAlpha:0, y:50, ease: Back.easeOut.config(1.7)}, 0.15);
var footerTextIn = TweenMax.from('#footer-info', 2.5, {autoAlpha:0, delay: .15});

// FIRST BACKGROUND SLIDER
var imageSlideCover1 = new TimelineMax();
var bb_slide_text1H2 = $(".bb_slide_text1 h2"),
    bb_slide_text1P = $(".bb_slide_text1 p"),
    bb_slide_text2H2 = $(".bb_slide_text2 h2"),
    bb_slide_text2P = $(".bb_slide_text2 p"),
    bb_slide_bar = $(".bb_slider_bar"),
    bb_slide_dot = $(".bb_slider_bar_dot");

var innerTimeline1 = new TimelineMax({repeat: -1}); // timeline to be nested
    innerTimeline1
    .fromTo(bb_slide_bar, 4, {scaleX: 0}, {scaleX: 1})    // slider bar underneath text
    .to(bb_slide_text1H2, .75, {y: -50, autoAlpha:0})
    .to(bb_slide_text1P, .5, {y: -50, autoAlpha:0},'-=.6')  // the delay here is to tweak the natural flow of a TimelineMax
    .from(bb_slide_text2H2, .75, {y: 50, autoAlpha:0})
    .from(bb_slide_text2P, .5, {y: 50, autoAlpha:0}, '-=.6')

    .fromTo(bb_slide_bar, 4, {scaleX: 0}, {scaleX: 1})  // slider bar underneath text

    .to(bb_slide_text2H2, .75, {y: -50, autoAlpha:0})
    .to(bb_slide_text2P , .5, {y: -50, autoAlpha:0},'-=.6')

      .set(bb_slide_text1H2, {y:50, autoAlpha: 0})
      .set(bb_slide_text1P, {y:50, autoAlpha: 0})
    .to(bb_slide_text1H2, .75, {y: 0, autoAlpha:1})
    .to(bb_slide_text1P, .5, {y: 0, autoAlpha:1},'-=.6');

var bb_slide_cover1 = CSSRulePlugin.getRule("#photoslide1:before"); //get the rule

// imageSlideCover1
// .to(bb_slide_cover1, 1.5, {cssRule:{transformOrigin: 'center right', scaleX: 0.05, opacity: .9}, ease: Power2.easeOut})
// .fromTo(bb_slide_dot, 1, {opacity: 0}, {opacity: 1}, '-=1')
// .add(innerTimeline1, '-=1')  // this is the inner timeline nested from above
// ;
imageSlideCover1
.to('#photoslide-col-1', 1, {transformOrigin: 'center left', scaleX: 1, ease: Power2.easeOut})
.to('.bb_slidetextwrapper1', 1, {opacity: 1, ease: Power2.easeOut})
.fromTo(bb_slide_dot, 1, {opacity: 0}, {opacity: 1}, '-=1')
.add(innerTimeline1, '-=1')
;

// SECOND BACKGROUND SLIDER
var imageSlideCover2 = new TimelineMax();
var bb_second_slide_text1H2 = $(".bb_second_slide_text1 h2"),
    bb_second_slide_text1P = $(".bb_second_slide_text1 p"),
    bb_second_slide_text2H2 = $(".bb_second_slide_text2 h2"),
    bb_second_slide_text2P = $(".bb_second_slide_text2 p"),
    bb_second_slide_bar = $(".bb_second_slider_bar"),
    bb_second_slide_dot = $(".bb_second_slider_bar_dot");

var innerTimeline2 = new TimelineMax({repeat: -1}); // timeline to be nested
    innerTimeline2
    .fromTo(bb_second_slide_bar, 4, {scaleX: 0}, {scaleX: 1})    // slider bar underneath text
    .to(bb_second_slide_text1H2, .6, {y: -50, autoAlpha:0})
    .to(bb_second_slide_text1P, .5, {y: -50, autoAlpha:0},'-=.6')  // the delay here is to tweak the natural flow of a TimelineMax
    .from(bb_second_slide_text2H2, .75, {y: 50, autoAlpha:0})
    .from(bb_second_slide_text2P, .5, {y: 50, autoAlpha:0}, '-=.6')

    .fromTo(bb_second_slide_bar, 4, {scaleX: 0}, {scaleX: 1})  // slider bar underneath text

    .to(bb_second_slide_text2H2, .75, {y: -50, autoAlpha:0})
    .to(bb_second_slide_text2P , .5, {y: -50, autoAlpha:0},'-=.6')

      .set(bb_second_slide_text1H2, {y:50, autoAlpha: 0})
      .set(bb_second_slide_text1P, {y:50, autoAlpha: 0})
    .to(bb_second_slide_text1H2, .75, {y: 0, autoAlpha:1})
    .to(bb_second_slide_text1P, .5, {y: 0, autoAlpha:1},'-=.6')
    ;

imageSlideCover2
.to('#photoslide-col-2', 1, {transformOrigin: 'center left', scaleX: 1, ease: Power2.easeOut})
.to('.bb_slidetextwrapper2', 1, {opacity: 1, ease: Power2.easeOut})
.fromTo(bb_second_slide_dot, 1, {opacity: 0}, {opacity: 1}, '-=1')
.add(innerTimeline2, '-=1')
;

// ---------------------- SCROLL MAGIC

var controller = new ScrollMagic.Controller();

// FIRST TEXT SLIDE
var section2Up = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_1',
triggerHook: 0.8

})
.setTween(onScrollText1)
.addTo(controller);

// VERTICAL TEXT SLIDE
var section2Up = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_1',
triggerHook: 0.8

})
.setTween(onScrollVerticalText)
.addTo(controller);


// SECOND TEXT SLIDE (HELL YEAR)
var section3Up = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_2',
triggerHook: 0.8

})
.setTween(onScrollText2)
.addTo(controller);


// FIRST IMAGE BACKGROUND SLIDE COVER

var backgroundSlideOver1 = new ScrollMagic.Scene ({
triggerElement: 'div#photoslide-col-1',
triggerHook: 1

})
.setTween(imageSlideCover1)
.addTo(controller);


// THIRD TEXT SLIDE UP (PRICING)
var section4In = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_4',
triggerHook: 0.8

})
.setTween(onScrollText3)
.addTo(controller);

// SECOND IMAGE BACKGROUND SLIDE COVER

var backgroundSlideOver2 = new ScrollMagic.Scene ({
triggerElement: 'div#photoslide-col-2',
triggerHook: 1

})
.setTween(imageSlideCover2)
.addTo(controller);

// FOURTH TEXT SLIDE UP (EMAIL US)
var section5In = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_6',
triggerHook: 0.8

})
.setTween(onScrollText4)
.addTo(controller);

// FOOTER TEXT
var section5In = new ScrollMagic.Scene ({
triggerElement: '.page-id-36 .et_pb_section_7',
triggerHook: 0.8

})
.setTween([footerWidgetsUp,footerTextIn])
.addTo(controller);

// ---------------------- EVENTS CALENDAR PLUGIN
var eventsBack = $('.tribe-events-back a').attr('href', 'http://localhost:8888/BakerBox/events/list/');

// back to homepage
$('#topbar').after('<a href="http://localhost:8888/BakerBox/"><div id="bb-backtohome"></div></a>');


});
