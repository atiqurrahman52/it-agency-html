
// $(document).ready(function(){
//     $(".menu-toggle").on("click",function(){
//         console.log("open");
//         $(".mobile-menu").removeClass("hidden");
//           $(".mobile-menu").removeClass("-right-[241px]").addClass("right-0")
//     })

//     $(".close-menu").on("click", function() {
//         console.log("close");
//         $(".mobile-menu").addClass("hidden");
//         $(".mobile-menu").addClass("-right-[241px]").removeClass("right-0")
//     })
// })

// $(document).ready(function() {
//     // Toggle mobile menu
//     $(".menu-toggle").click(function() {
//       $(".mobile-menu").toggleClass("hidden");
//     });
  
//     // Close mobile menu
//     $(".close-menu").click(function() {
//       $(".mobile-menu").addClass("hidden");
//     });
//   });

// swiper slider start 
var swiper_recent_work = new Swiper(".recent_work", {
    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".recent_work_pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

// var swiper_testimonial = new Swiper(".testimonial", {
//     spaceBetween: 20,
//     slidesPerView: 1,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//       delay: 2000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: ".testimonial_pagination",
//       clickable: true,
//     },
//     breakpoints: {
//       1024: {
//         slidesPerView: 3,
//         spaceBetween: 24,
//       },
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       640: {
//         slidesPerView: 2,
//         spaceBetween: 20,
//       },
//       320: {
//         slidesPerView: 1,
//         spaceBetween: 20,
//       },
//     },
//   });

var swiper_recent_work = new Swiper(".testimonial", {
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".testimonial_pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
   
    600: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

var swiper_client = new Swiper(".client", {

    spaceBetween: 20,
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopAdditionalSlides: 2,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial_pagination",
      clickable: true,
    },
    breakpoints: {
      1024: {
        slidesPerView: 10,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      320: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
  });
// swiper slider end


// Jquery Start 


$(document).ready(function() {
    
  //alert('here');

$('.tabs a').click(function(){

   $('.panel').hide();
   $('.tabs a.active').removeClass('active');
   $(this).addClass('active');
   
   var panel = $(this).attr('href');
   $(panel).fadeIn(1000);
   
   return false;  // prevents link action
  
});  // end click 

   $('.tabs li:first a').click();
   
}); // end ready
