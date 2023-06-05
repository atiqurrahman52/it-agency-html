
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
// swiper slider end