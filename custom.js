/* Js for floating divs */

$(window).load(function(){
$('.contenitore').hover(function() {
    $(this).animate({
        width: 300,
        height: 400,
        top: -80,
        left: -45
    }, 'slow');
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
    }, 100);
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
    /*    function showwords() {
      $(".words1").hide(slow);
      $(".words2").show(slow);
    }
*/     

});

//form submission function

function submitValues() {
  var fields = $(":input").serializeArray();
  //replace with server technology
  var oldfields = JSON.parse(localStorage.getItem('results'));
  //end replace
  for(var i in fields)
  {
    if(fields[i].name != undefined)
        fields[i].name = parseInt(fields[i].name.substring(4), 10);
    fields[i].value == "like" ? fields[i].value = true : fields[i].value = false;
  }
  Array.prototype.push.apply(fields,oldfields);
  //replace with server technology
  localStorage.setItem('results', JSON.stringify(fields));
  //end replace
  $("input[type='radio']").attr("checked", false);
}

$("#submitform").click(submitValues);

//form clear function

$("#clearform").click(function() {
  $("input[type='radio']").attr("checked", false);
});

//form retrieve function

function loadBoard() {
  //replace with server technology
  var fields = JSON.parse(localStorage.getItem('results'));
  //end replace
  var likes = {};
  var dislikes = {};
  for(var i in fields)
  {
    if(likes[fields[i].name] == undefined && fields[i].value == true)
      likes[fields[i].name] = 1;
    else if(dislikes[fields[i].name] == undefined && fields[i].value == false)
      dislikes[fields[i].name] = 1;
    else
      fields[i].value ? likes[fields[i].name]++ : dislikes[fields[i].name]++;
  }
  var tableappend = "";
  for(var j = 0; j < 24; j++)
    tableappend += "<tr><td>" + j + "</td><td>" + (likes[j] == undefined ? 0 : likes[j]) + "</td><td>" + (dislikes[j] == undefined ? 0 : dislikes[j]) + "</td><td>10</td></tr>";

  $("tbody#results").append(tableappend);
}

$("tbody#results").ready(loadBoard);

//something to do with sliders

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