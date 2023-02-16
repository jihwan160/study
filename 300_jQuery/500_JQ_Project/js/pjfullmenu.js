$(function() {
    $('#menu_dept').hide();
    
    // 1. 1depth 클릭시 2depth 서브메뉴 나옴
    $('#menu .gnb li a').click(function(){
        $('#menu_dept').stop().show();
    });

    // 2. 닫기 클릭시 2depth 서브메뉴 사라짐
    $('.close').click(function(){
        $('#menu_dept').hide();
    })
});