// DOM객체 탭메뉴 갯수를 콘솔에 출력
var tab = $('#menu_gnb').find('li');
console.log('탭메뉴 li갯수 : ' + tab.length);

// Event Listener
function tab_menu(num){
    var i;
    for(i = 0; i < tab.length; i++) {
        if(num == i) {
            // a-1. active 클래스 적용
            // 내가 한 것
            // $('li').eq(i).addClass("active");
            tab.eq(i).addClass("active");
            // b-1. 해당 콘텐츠 보여주기
            $('.tab_content_0' + [i]).show();
        }else {
            // a-1. active 클래스 제거
            // 내가 한 것
            // $('li').eq(i).removeClass("active");
            tab.eq(i).removeClass("active");
            // b-1. 나머지 콘텐츠 가리기
            $('.tab_content_0' + [i]).hide();
        }
    }
}























