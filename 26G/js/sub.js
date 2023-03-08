$(function(){
    
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
})