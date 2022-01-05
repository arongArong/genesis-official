$(document).ready(function () {

    var slide1 = $('.firstBn').bxSlider({
        auto: true,
        pause: 2000,
        autoHover: true
    });

    $('.controls .play').on('click', function () {
        slide1.startAuto();
    });
    $('.controls .pause').on('click', function () {
        slide1.stopAuto();
    });

    var slide2 = $('.secondBn').bxSlider({
        auto: true,
        pause: 2000,
        autoHover: true
    });

    $('.controls2 .play2').on('click', function () {
        slide2.startAuto();
    });
    $('.controls2 .pause2').on('click', function () {
        slide2.stopAuto();
    });

    var slide3 = $('.thirdslide').bxSlider({
        auto: false,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 380,
        pause: 3500,
        autoHover: true,
        pager: false,
    });

    var slide4 = $('.fourthslide').bxSlider({
        auto: true,
        pause: 3000,
        autoHover: true,
        mode: 'fade',
        controls: false
    });

    var slide5 = $('.slideul').bxSlider({
        auto: true,
        pause: 2000,
        speed: 300,
        autoHover: true,
        mode: 'vertical',
        controls: false,
        pager:false
    });

    $('.controls-foot .play-f').on('click', function () {
        slide1.startAuto();
    });
    $('.controls-foot .pause-f').on('click', function () {
        slide1.stopAuto();
    });


});