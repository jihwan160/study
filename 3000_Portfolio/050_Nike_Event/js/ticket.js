$('#myBtn').on('click',myFunction);

// Eventlistener
function myFunction(){
    // 변수할당
    var dots = $('#dots');
    var moreButton = $('#more');
    var btnText = $('#myBtn');
    var result = $('#dots').css('display');
    console.log(result);
    // display가 none이라면
    if(result == 'none') {
        dots.css({display:'inline'});
        btnText.text('+MORE');
        moreButton.css({display:'none'});
    }else {
        dots.css({display:'none'});
        btnText.text('-CLOSE');
        moreButton.css({display:'inline'});

    }
}