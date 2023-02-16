
// $('.gnb li').on({'mouseenter':function(){
//     alert('경고!!');
// },'mouseleave':function(){
//     alert('경고합니다!!');
// }})
$('.gnb li').mouseenter(function(){
    $(this).children('div').stop().slideDown();
});

$('.gnb li').mouseleave(function(){
    // $(this).children('div').stop().slideUp();
    $(this).children('div:visible').stop().slideUp();
})