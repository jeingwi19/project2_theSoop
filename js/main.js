$(document).ready(function () {
    $('.swiper-container.main_top').each(function (idx) {
        var mySwiper1 = new Swiper($(this), {
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
    
            //페이지네이션
            pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            },
        });
    });
    
    //본문1 자동 실행과 일시정지 추가
    //일시정지 클릭
    $('.main_top .controller .autostop').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper1.autoplay.stop(); //https://swiperjs.com/api/#autoplay
        return false;
    });
    //자동실행 클릭
    $('.main_top .controller .autoplay').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper1.autoplay.start();
        return false;
    });

    //자동실행 클릭
    $('.main_top .controller .autoplay').on('click', function () {
        $(this).hide().siblings().show();
        mySwiper1.autoplay.start();
        return false;
    });


    $('.swiper-container.top_qmenu').each(function (idx) {
        var swiperTopmenu = new Swiper($(this), {
            slidesPerView: 4,
            spaceBetween: 16,
            centeredSlides: true,
          });
    });
    
    $('.swiper-container.cnt1_swiper').each(function (idx){
        var mySwiper2 = new Swiper($(this), {
            spaceBetween: 10, //각 슬라이더 사이 공간
            slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
            centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true,    //스크롤바를 직접 드래그해서 이동가능
            },
            a11y: {
              //prevSlideMessage: '이전 슬라이드',
              //nextSlideMessage: '다음 슬라이드',
              firstSlideMessage: '첫번째 슬라이드',
              lastSlideMessage: '마지막 슬라이드',
            }
          })
    });

    $('.swiper-container.cnt2_swiper').each(function (idx){
        var mySwiper3 = new Swiper($(this), {
            spaceBetween: 10, //각 슬라이더 사이 공간
            slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
            centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
            scrollbar: {
              el: '.swiper-scrollbar',
              draggable: true,    //스크롤바를 직접 드래그해서 이동가능
            },
            a11y: {
              //prevSlideMessage: '이전 슬라이드',
              //nextSlideMessage: '다음 슬라이드',
              firstSlideMessage: '첫번째 슬라이드',
              lastSlideMessage: '마지막 슬라이드',
            }
          })
    });

});

