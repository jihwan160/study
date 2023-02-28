
// 탭관련 스크립트
$('.tab_btn li').click(function(){
    // 각각의 탭 index값 리턴 메서드
    const idx = $(this).index();
    console.log(idx);

    // 탭 영역에 각각 on클래스 적용
    $('.tab_btn li').removeClass('on');
    $(this).addClass('on');

    // 해당 탭 내용만 보이도록 코딩
    $('.tab_contents .list').hide();
    $('.tab_contents .list').eq(idx).stop().show();



})

// 해당 질문과 답| 화살표 방향 스크립트

$('.tab_contents .list .question').click(function(){
    // 빈 hasClass()

    if($(this).hasClass('active')) { //클래스명 active가 있으면 실행
        $(this).removeClass('active');
        $(this).children('dd').removeClass('up');
        $(this).children('dd').addClass('down');
        
        // 해당 내용 가리기
        $(this).siblings('.answer').stop().slideUp(500);
        // $(this).next().stop().slideUp();

    }else { //클래스명 active가 없으면 실행
        $(this).addClass('active');
        //화살표 방향 바꾸기
        $(this).children('dd').removeClass('down');
        $(this).children('dd').addClass('up');

        // 해당 내용 보여주기
        $(this).siblings('.answer').stop().slideDown(500);
        // $(this).next().stop().slideDown();
        
    }

})