$('.img-parallax').each(function(){
  var img = $(this);
  var imgParent = $(this).parent();
  function parallaxImg () {
    var speed = img.data('speed');
    var imgY = imgParent.offset().top;
    var winY = $(this).scrollTop();
    var winH = $(this).height();
    var parentH = imgParent.innerHeight();


    // The next pixel to show on screen      
    var winBottom = winY + winH;

    // If block is shown on screen
    if (winBottom > imgY && winY < imgY + parentH) {
      // Number of pixels shown after block appear
      var imgBottom = ((winBottom - imgY) * speed);
      // Max number of pixels until block disappear
      var imgTop = winH + parentH;
      // Porcentage between start showing until disappearing
      var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50)) + 25;
    }
    img.css({
      backgroundPosition: '0% '+ imgPercent + '%',
    });
  }
  $(document).on({
    scroll: function () {
      parallaxImg();
    }, ready: function () {
      parallaxImg();
    }
  });
});

$(document).ready(function(){

    var carouselSettings = {
      slidesToShow: 4,
      slidesToScroll: 4,
      nextArrow: '<button type="button" class="slick-next">&#10095;</button>',
      prevArrow: '<button type="button" class="slick-prev">&#10094;</button>',
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 1000,
      responsive: [
          {
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false,
            }
          },
          {
            breakpoint: 950,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
  };

    $('#apartment-carousel').slick(carouselSettings);
    $('#apartment-carousel-2').slick(carouselSettings);
  });
