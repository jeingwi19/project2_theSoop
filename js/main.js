$(document).ready(function () {
    var swiperMainTop = new Swiper('.mainbanner .swiper-container', {
        loop: true,
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
            renderFraction: function (currentClass, totalClass) {
                return '<span class="' + currentClass + '"></span>' +
                        '' +
                        '<span class="' + totalClass + '"></span>';
            }
        },
        
    });
    //본문1 자동 실행과 일시정지 추가
    //일시정지 클릭
    $('#cntr .autostop').on('click', function () {
        //alert();
        $(this).hide().siblings().show();
        swiperMainTop.autoplay.stop(); //https://swiperjs.com/api/#autoplay
        return false;
    });
    //자동실행 클릭
    $('#cntr .autoplay').on('click', function () {
        $(this).hide().siblings().show();
        swiperMainTop.autoplay.start();
        return false;
    });

    /* 상단메뉴 */
    /* $('.swiper-container.top_qmenu').each(function (idx) {
        var swiperTopmenu = new Swiper($(this), {
            slidesPerView: 4,
            spaceBetween: 16,
            centeredSlides: true,
          });
    }); */
    
    /* cnt1 */
    var swiperCnt1  = new Swiper('.swiper-container.cnt1_swiper', {
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
    });

    /* cnt2 */
    var swiperCnt2 = new Swiper('.swiper-container.cnt2_swiper', {
        spaceBetween: 10, //각 슬라이더 사이 공간
        slidesPerView: 'auto', //한 화면에 보여질 슬라이더 개수 기본1
        centeredSlides: true, //슬라이더 가운데 중요 슬라이더 위치
        a11y: {
            //prevSlideMessage: '이전 슬라이드',
            //nextSlideMessage: '다음 슬라이드',
            firstSlideMessage: '첫번째 슬라이드',
            lastSlideMessage: '마지막 슬라이드',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
    });


    /* subPage_books */
    var scrollY = 0
    var timer = 0;

    $(window).on('scroll', function() {
        clearTimeout(timer);

        timer = setTimeout(function() {
            scrollY = $(this).scrollTop();
            //console.log(scrollY);

            $('.fade').each(function () {
                if(scrollY > $(this).offset().top- 300) $(this).stop().
                animate({opacity: 1, top: 0});
                else $(this).stop().animate({opacity: 0, top: 50});
            });
        }, 100);
    })
});