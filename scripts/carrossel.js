/* 

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
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
    });
  
    $(".carrossel-mais-vendidos").slick("unslick")
  
  })
  
   */
  new Glider(document.querySelector('.carrossel-mais-vendidos'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind:true,
    dots: '.dots',
    arrows: {
      prev: '.prev',
      next: '.next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint:600,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 'auto',
          slidesToScroll: 'auto',
          itemWidth: 500,
          duration: 0.25,
          rewind:true,
        }
      },{
        // screens greater than >= 1024px
        breakpoint: 450,
        settings: {
          slidesToShow: "auto",
          slidesToScroll: "auto",
          itemWidth: 150,
          duration: 0.25,
          rewind:true,
        }
      }
    ]
  });