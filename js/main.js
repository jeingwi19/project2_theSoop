$(document).ready(function () {
    var mySwiper1 = new Swiper('.cnt_top .swiper-container', {
        // Optional parameters
        direction: 'horizontal', //vertical
        loop: true, //터치할 경우 마지막 슬라이더에서 처음으로 되돌리지 않음

        // 이전, 다음 버튼
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        //자동실행
        autoplay: {
            delay: 10000, //1초 = 1000
            disableOnInteraction: false, //swiper이후에도 자동실행 동작
        },
    })
    //본문1 자동 실행과 일시정지 추가
    //일시정지 클릭
    $('.cnt1 .controller .autostop').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper1.autoplay.stop(); //https://swiperjs.com/api/#autoplay
        return false;
    });
    //자동실행 클릭
    $('.cnt1 .controller .autoplay').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper1.autoplay.start();
        return false;
    });

    //자동실행 클릭
    $('.cnt7 .controller .autoplay').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper7.autoplay.start();
        return false;
    });

});