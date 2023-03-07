$(function(){

    // 박스 슬라이더 스크립트
    $('.slide_gallery').bxSlider({
        // auto: true,
        auto: false,
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

    // 헤더 인클루드
    // $('#header').load('./header.html');



})