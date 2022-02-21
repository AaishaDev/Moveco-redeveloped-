$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      
    //   loop: true,
      margin: 25,
      nav: true,
    //   stagePadding: 50,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 3,
        },
        1500:{
            items:4,
        },
      },
    });
  });