$('.contents article').mouseenter(function(){
    $(this).stop().animate({width:'35%'},500);
    $(this).find('video').get(0).play();
})

$('.contents article').mouseleave(function(){
    $(this).stop().animate({width:'12%'},500);
    $(this).find('video').get(0).pause();
})



