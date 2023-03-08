$(function(){

    // 박스 슬라이더 스크립트
    $('.slide_gallery').bxSlider({
        auto: true,
        slideWidth: 1920,
    });


    // 알림메시지 스크립트로 생성
    $('<div class="alert"><img src="./images/icons/alert.png" alt="준비중 알림창"></div>').appendTo('body');
    // a태그 기능 삭제
    $('a[href="#"]').click(function(e){
        e.preventDefault();
        $('.alert').stop().fadeIn(500);

        setTimeout(function(){
            $('.alert').stop().fadeOut(500);
        },1000)
    })


    // animate 부드러운 스크롤탑 이동
    $('.top').click(function(){
        $('html,body').stop().animate({scrollTop:0},'1000','swing');
    });

    // 스크롤 100일떄 top버튼 생성
    var sa = 100;
    $(window).scroll(function(){
        var num = $(window).scrollTop();
        console.log(num);
        if(num > sa) {
            $('aside div').stop().fadeIn(700);
        }else {
            $('aside div').stop().fadeOut(700);
        }
        
    });

    // 검색버튼 누르면 위치값바뀜
    $('.search').click(function(){
        $(this).css({'transform':'translateY(30px)'});
        $('<div class="w1240"><input type="text" name="search" maxlength="20" size="20"></div>').appendTo('#header');
        $('.snb li').eq(0).css({display:'none'});
        $('.snb li').eq(1).css({display:'none'});
        $('.snb li').eq(2).css({display:'none'});
        $('.snb li').eq(3).css({display:'none'});
        $('.snb li').eq(4).css({display:'none'});
    })

    $('#wrap').click(function(e){
        if(!$('.search').has(e.target).length) {
            $('.search').css({'transform':'translateY(0px)'});
            $('input[type="text"]').css({display:'none'});
            $('.snb li').eq(0).css({display:'block'});
            $('.snb li').eq(1).css({display:'block'});
            $('.snb li').eq(2).css({display:'block'});
            $('.snb li').eq(3).css({display:'block'});
            $('.snb li').eq(4).css({display:'block'});
        }
        
    })

})