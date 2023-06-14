$(".menu-toggle").on("click", function () {
  $("body").addClass("overflow-hidden");
  $(".mobile-menu").removeClass("-left-[241px]").addClass("left-0");

  $(".mobile-overlay")
    .removeClass("opacity-0, invisible")
    .addClass("opacity-100 visible");
});

$(".close-menu, .mobile-overlay").on("click", function () {
  $("body").removeClass("overflow-hidden");
  $(".mobile-menu").addClass("-left-[241px]").removeClass("left-0");
  $(".mobile-overlay")
    .addClass("opacity-0, invisible")
    .removeClass("opacity-100 visible");
});







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

var swiper_testimonial = new Swiper(".testimonial", {
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
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
var swiper_related_post = new Swiper(".related_post", {
  spaceBetween: 20,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".related_post_pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },

    600: {
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
  // slidesPerView: 1,
  // centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: true,
  // loopAdditionalSlides: 2,
  speed: 1000,
  autoplay: {
    delay: -1000,
    disableOnInteraction: false,
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

$(document).ready(function () {

//  scroll to top start 
  // $(".scrollTopButton").click(function () {
  //   $("html").animate(
  //     {
  //       scrollTop: 0,
  //     },
  //     10000
  //   );
  // });
  // $(window).scroll(function () {
  //   var $scrolling = $(this).scrollTop();

  //   if ($scrolling > 300) {
  //     $(".scrollTopButton").addClass("show");
  //   } else {
  //     $(".scrollTopButton").removeClass("show");
  //   }
  // });

//  scroll to top end




  $(".tabs a").click(function () {
    $(".panel").hide();
    $(".tabs a.active").removeClass("active");
    $(this).addClass("active");

    var panel = $(this).attr("href");
    $(panel).fadeIn(1000);

    return false; // prevents link action
  }); // end click

  $(".tabs li:first a").click();

  // latest post start
  $(".filter-button").on("click", function () {
    var filter = $(this).data("filter");

    $(".filter-button").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".item").show();
    } else {
      $(".item").hide();
      $(".item." + filter).show();
    }
  });

  // Initially show all categories
  $(".item").show();

  // latest post end
});

$(document).ready(function () {
  $("nav li").click(function () {
    $(this).toggleClass("active").siblings().removeClass("active");
    $(this).siblings().find("ul").slideUp();
    $(this)
      .find("ul")
      .slideToggle(function () {
        $(this)
          .find("li")
          .each(function (index) {
            $(this)
              .delay(index * 100)
              .animate({ opacity: "1" }, 200);
          });
      });
  });
});
