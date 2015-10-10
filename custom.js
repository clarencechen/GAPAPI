/* Js for floating divs */

$(window).load(function(){
$('.contenitore').hover(function() {
    $(this).animate({
        width: 300,
        height: 400,
        top: -80,
        left: -45
    }, 'fast');
  $(this).animate().css('box-shadow', '0 0 5px #000');
    $(this).css({
        zIndex: 100 
    });
}, function() {
  $(this).animate().css('box-shadow', 'none')
    $(this).animate({
        width: 210,
        height: 240,
        top: 0,
        left: 0
    }, 'slow');
    $(this).css({
        zIndex: 1
    });
});
});

/*end of floating div Js */

/* this should make the divs appear and disaper */
var array_of_functions = [
    function() {
      $(".words1").show(10000);
      $(".words1").hide(5000);
      $(".words2").show(20000);
      $(".words2").hide(5000);
      $(".words6").show(15000);
      $(".words3").show(35000);
      $(".words3").hide(5000);
      $(".words4").show(45000);
      $(".words6").show(40000)
      $(".words4").hide(5000);
      $(".words5").show(55000);
    }
]
function sendnet(){
      window.location.href = "about.html"; 
    }
  $(window).load(function(){
  $(".words2").hide();
  $(".words3").hide();
  $(".words4").hide();
  $(".words5").hide();
  $(".words6").hide();
  for (var i =0; i < array_of_functions.length; i++) {
    setTimeout( array_of_functions[i](), 5000);
    if (i >= array_of_functions.length){
      sendnet();
    }
    }
    /*    function showwor)ds() {
      $(".words1").hide(slow);
      $(".words2").show(slow);
    }
*/     

});


$(window).ready(function(){
  $('.list').bxSlider({
  mode: 'fade',
  captions: true,
  infiniteLoop: true,
  hideControlOnEnd: true,
  easing: 'ease-in-out',
  speed: 500,
  adaptiveHeight: true,
  maxSlides: 2,
  slideWidth: 200,
  pagerCustom: '#bx-pager',
  autoHover: true
});
});
$(window).ready(function(){
$('.front').bxSlider({
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10,
  ticker: true,
  tickerHover:true,
  speed: 11000
});
});