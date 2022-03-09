/***********Testinomial Slide************/
$(document).ready(function () {
  let slides = document.getElementsByClassName("car_spec");
  let dots = document.getElementsByClassName("dotSpec");
  let prev = document.querySelector(".prevSpec");
  let next = document.querySelector(".nextSpec");

  if (!slides.length == 0) {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    let currentSlide = function (n) {
      showSlides((slideIndex = n));
    };

    function showSlides(n) {
      if (n > slides.length) {
        slideIndex = 1;
      }

      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }
  }

  prev.addEventListener("click", () => {
    plusSlides(-1);
  });

  next.addEventListener("click", () => {
    plusSlides(1);
  });

});


/***********Car Details Page Tab Sticky************/
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
      $('.second_nav_sticky').addClass('second_nav_scrolled');
    } else {
      $('.second_nav_sticky').removeClass('second_nav_scrolled');
    }
  });
});

$(document).ready(function () {
  $("nav.second_nav").on('click','li',function(){
    $("nav.second_nav li.active").removeClass("active"); 
    $(this).addClass("active"); 
});
});

/***********Second Footer Sticky************/
$(document).ready(function () {
  var lastScrollTop = 0;
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
     if (st > lastScrollTop){

       $('.footer_menu').addClass('scrolling_down_footer');
       $('.footer_menu').removeClass('scrolling_up_footer');
     } else {
 
       $('.footer_menu').addClass('scrolling_up_footer');
       $('.footer_menu').removeClass('scrolling_down_footer');
     }
     lastScrollTop = st;
  });
  
});

/***********Click Tab Car Details ************/
$(document).ready(function () {
  $('.second_nav ul li a').on('click',function(event){
    var $anchor = $(this);
    $('html, body').animate({
      scrollTop: $($anchor.attr('href')).offset().top - 80
    }, 500);
    event.preventDefault();
  });
});