/* $(function(){

    function atualizar_info () {

        $(".product-name").text( $(".slick-center").data("nome"));
        var productPrice = parseFloat($(".slick-center").data("valor")).toLocaleString("pt-BR,", {style:"currency", currency:"BRL", minimumFractionDigits: 2});
        $(".product-price").text(productPrice);
    }
    $(".carrossel-mais-vendidos").on("init", function(){
        atualizar_info();
    })

    $(".carrossel-mais-vendidos").slick({
        autoplay: true,
        infinite: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        autoplaySpeed: 1800,   
    });

    $(".carrossel-mais-vendidos").on("afterChange", function(){
        atualizar_info();
    })
}); */

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
  
  