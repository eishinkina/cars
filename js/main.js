$(function(){
    $('.design-slider') .slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:'<img class="arrow arrow-left" src="images/Arrow-left.svg" alt="">',
        nextArrow:'<img class="arrow arrow-right" src="images/Arrow-right.svg" alt="">',
        Responsive: [{
            breakpoint: 361,
            settings : {
                variableWidth: false,
                slidesToShow: 1,
            }
        }]

    });
});