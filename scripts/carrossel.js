
  new Glider(document.querySelector('.carrossel-mais-vendidos'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    rewind:true,
    dots: '.dots',
    arrows: {
      prev: '.prev',
      next: '.next',
    },
    responsive: [
      
      {
      
        breakpoint:1000,
        settings: {
          
          slidesToShow: 'auto',
          slidesToScroll: '1',
          itemWidth: 500,
          duration: 2,
          rewind:true,
        },
        breakpoint:600,
        settings: {
          
          slidesToShow: 'auto',
          slidesToScroll: '1',
          itemWidth: 500,
          duration: 2,
          rewind:true,
        }
      },{
        
        breakpoint: 450,
        settings: {
          slidesToShow: "auto",
          slidesToScroll: "1",
          itemWidth: 500,
          duration: 2,
          rewind:true,
        }
      }
    ]
  });