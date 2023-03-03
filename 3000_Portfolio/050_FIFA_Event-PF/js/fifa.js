// Video 제어버튼 CSS
$('figure').find('button').css({
    position : 'absolute',
    right : '400px',
    top : '50px',
    cursor : 'pointer',
    background: 'none',
    outline: 'none'
});
$('figure').find('i').css({
    fontSize: '30px',
    color: '#fff'
});
$('figure').find('button').eq(0).css({
    right: '610px'
});
$('figure').find('button').eq(1).css({
    right: '540px'
});
$('figure').find('button').eq(2).css({
    right: '470px'
});



// Video 제어스크립트
// const video = $('.vid video');
// console.log(video);
// const button = $('figure').find('button');
// console.log(button);

// $(button).eq(0).click(function(){
//     video.get(0).play();
// })
// $(button).eq(1).click(function(){
//     video.get(0).pause();
// })
// $(button).eq(2).click(function(){
//     video.get(0).load();
// })
$('figure button').eq(0).click(function(){
    $('figure').find('video').get(0).play();
})
$('figure button').eq(1).click(function(){
    $('figure').find('video').get(0).pause();
})
$('figure button').eq(2).click(function(){
    $('figure').find('video').get(0).load();
})

const video = $('.vid video');
video.prop('muted',true);
$('figure button').eq(3).click(function(){
  if(video.prop('muted')) {
    video.prop('muted',false);
    $('figure button').eq(3).html('<i class="fa fa-volume-up" aria-hidden="true"></i>').css({fontSize:'30px',color:'#fff'});
  }else {
    video.prop('muted',true);
    $('figure button').eq(3).html('<i class="fa fa-volume-off" aria-hidden="true"></i>');
  }
})

























