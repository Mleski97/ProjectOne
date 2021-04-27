$('.team-carousel').slick(
  
  {
    arrows: false,
    mobilefirst: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }

  ]
    
 }
  
);


$('.sponsor-carousel').slick(
  
  {
    arrows: false,
    autoplaySpeed: 1500,
    autoplay: true,
    mobilefirst: true,
    infinite: true,
    
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }

  ]
    
 }
  
);








