

$(function(){

  
    $(".carrossel-mais-vendidos").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      prevArrow: $(".prev"),
      nextArrow: $(".next"),
      responsive: [
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  

  
  })
  
  