$(document).ready(function () {
    var scrollT;
    var timer = 0;
  
    var $gnb = $('#gnb');
  
    //문서가 로딩되면 #header.load를 추가해서 브라우저 상단에서 아래로 내려오게 함
    $('#header').addClass('load');
    $('#content .top_visual').addClass('on');
    $('.sub_tit_effect').addClass('effect');
  
    $(window).on('scroll', function () {
      clearTimeout(timer);
  
      timer = setTimeout(function () {
        scrollT = $(this).scrollTop();
  
        if (scrollT > $('.top_visual').outerHeight()  - $('#header').outerHeight()) $('#header').addClass('bgchange');
        else $('#header').removeClass('bgchange');
  
        $('.fade').each(function () {
          if (scrollT > $(this).offset().top - 500) $(this).addClass('on');
        });
      }, 50);
    });
    $(window).trigger('scroll');
  
    //메뉴열기 클릭
    $('.btn_menu').on('click', function () {
      if ($(this).hasClass('active')) { //닫기
        $gnb.stop().animate({left: '100%'}, 300, function () {
          $(this).css({display: 'none'}).find('ul li.on').removeClass('on').children('ul').stop().slideUp();
        });
  
        $(this).removeClass('active').find('.blind-b').text('메뉴 열기');
      } else {    //열기
        var scrollMove = scrollT;  //click시 스크롤을 저장
        console.log(scrollMove);
  
        $(this).addClass('active').find('.blind-b').text('메뉴 닫기');
  
        //가정처음과 마지막에서 #gnb 외부로 포커스가 나가지 않도록 제어
        var $first = $gnb.find('[data-link="first"]');
        var $last = $gnb.find('[data-link="last"]');
  
        $gnb.css({display: 'block'}).stop().animate({left: 0}, 300, function () {
          $first.focus();   //대상 엘리먼트에 포커스를 강제로 이동
        });
  
        //첫번째 a 태그에서 shift+tab을 눌러 header의 영역으로 포커스가 이동하지 못하게 제한
        $first.on('keydown', function (e) {
          console.log(e.keyCode);   //tab을 클릭하면 9를 반환
          if ( e.shiftKey && e.keyCode == 9) {
            e.preventDefault();   //포커스 이동을 강제로 제한
            $last.focus();        //처음 포커스로 이동, #gnbWrap을 벗어나지 않고 순환됨
          }
        });
        //마지막 버튼 태그에서 tab을 눌러 container의 영역으로 포커스가 이동하지 못하게 제한
        $last.on('keydown', function (e) {
          if ( !e.shiftKey && e.keyCode == 9) {
            e.preventDefault();
            $('.btn_menu').focus();
          }
        });
  
      }
  
      //depth1 a click
      $gnb.find('>ul>li>a').on('click', function () {
        if ($(this).next().size() === 0) {	//depth1 <a>만 있는 경우
          //console.log($(this).next().size());
          location.href=$(this).attr("href");
        }else {								//depth2 <ul>도 있는 경우
          //console.log($(this).next().size());
          //초기화 : 미리 열려진 컨텐츠 처음으로 되돌리기
          $(this).parent().siblings().removeClass('on').find('ul').stop().slideUp("fast");
  
          $(this).next().stop().slideToggle("fast").parent().toggleClass('on');
        }
  
        return false;
      });
    });
  });