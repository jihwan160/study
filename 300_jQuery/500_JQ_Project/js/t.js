
var slideIndex = 1;

showSlide(slideIndex);

function plusSlides(num) {
    showSlide(slideIndex += num);
    
}
function currentSlides(num) {
    showSlide(slideIndex = num);
}


function showSlide(num) {
    var i;
    var slide = $('.slide');
    var dot = $('.dot');

    if(num > slide.length) {
        slideIndex  = 1;
    }
    
    if(num < 1) {
        slideIndex = slide.length;
    }
    console.log(slideIndex);

    for(var i = 0; i < slide.length; i++) {
        $(slide[i]).hide();
    }
    $(slide).eq(slideIndex-1).show();

    $(dot).eq(slideIndex-1).css({backgroundColor:"red"});
    $(dot).eq(slideIndex-2).css({backgroundColor:"#ccc"});
    $(dot).eq(slideIndex-3).css({backgroundColor:"#ccc"});
}