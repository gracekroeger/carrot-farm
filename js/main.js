$(document).ready(function()
  {



$(window).scroll(function() {
// 100 = The point you would like to fade the nav in.
  
  if ($(window).scrollTop() > 80 ){
    
    $('.bg').addClass('show');
    
  } else {
    
    $('.bg').removeClass('show');
    
  };    
});

$('.scroll').on('click', function(e){   
    e.preventDefault()
    
  $('html, body').animate({
      scrollTop : $(this.hash).offset().top
    }, 1500);
});

});

// scroll
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 800);
        return false;
      }
    }
  });
});

function lightbox() { $('.fullImage').toggle("fast"); }
function lightbox2() { $('.fullImage2').toggle("fast"); }
function lightbox3() { $('.fullImage3').toggle("fast"); }
function lightbox4() { $('.fullImage4').toggle("fast"); }
function lightbox5() { $('.fullImage5').toggle("fast"); }


$(document).ready(function()
  {
    $('.fullImage').hide();
    $('.fullImage2').hide();
    $('.fullImage3').hide();
    $('.fullImage4').hide();
    $('.fullImage5').hide();

    $('.thumbnail').click(lightbox);
    $('.thumbnail2').click(lightbox2);
    $('.thumbnail3').click(lightbox3);
    $('.thumbnail4').click(lightbox4);
    $('.thumbnail5').click(lightbox5);
  });



$(document).ready(function() {
    $('.close').click(function(){
        $(this).parent().toggle("fast");
    });
});//end ready
