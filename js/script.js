$(document).ready(function(){

    $("#mobile_menus").click(function(){
        $(".dropdown").slideToggle(300);
    })

    $(".mobile_btn").click(function(){
        $(".menu").toggleClass("active_menu");
        $(".mobile_menu").toggleClass("active");
    })  

    $(window).scroll(function(){
      if($(this).scrollTop() > 200){
        $(".header_section").addClass("sticky");
      }
      else{
        $(".header_section").removeClass("sticky");
      }
    }); 
    // Scroll To Top Header

    var scroll_up = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
          $(scroll_up).css("opacity", "1","border-redius:0px;");

        } else {
          $(scroll_up).css("opacity", "0");
        }
      }); 

      $(scroll_up).click(function() {
        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
    }); 


    

    // Counter Section 

    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });

    });
    $('#meet_team').owlCarousel({
        autoplay: true,
        dots: true,
        autoplayHoverPause: true,
        loop: true,
        margin:30,
        smartSpeed: 1500,
        autoplayTimeout: 2500,
        responsiveClass: true,
        nav: true,
        loop: true,
        responsive: {
            0: {
              items: 1
            },
            568: {
              items: 2
            },
            600: {
              items: 3
            },
            760: {
              items: 4
            }

            
          }
    });

    $('#video_sec').owlCarousel({
        autoplay: true,
        dots: false,
        autoplayHoverPause: true,
        loop: true,
        margin:30,
        smartSpeed: 1500,
        autoplayTimeout: 2500,
        responsiveClass: true,
        nav: false,
        loop: true,
        responsive: {
            0: {
              items: 1
            },
            568: {
              items: 2
            },
            600: {
              items: 3
            },
            760: {
              items: 3
            }

            
          }
   
    });

    $("#social_link_btn").click(function(){
      $("social_link_btn").show(".list_icon");
    })



    var t;

    var start = $('#myCarousel').find('.active').attr('data-interval');
    t = setTimeout("$('#myCarousel').carousel({interval: 50000});", start-1000);

    $('#myCarousel').on('slid.bs.carousel', function () {  
         clearTimeout(t);  
         var duration = $(this).find('.active').attr('data-interval');
        
         console.log(duration);
        
         $('#myCarousel').carousel('pause');
         t = setTimeout("$('#myCarousel').carousel();", duration-1000);
    })

    $('.carousel-control-next').on('click', function(){
        clearTimeout(t);   
    });

    $('.carousel-control-prev').on('click', function(){
        clearTimeout(t);   
    });


});
 


 