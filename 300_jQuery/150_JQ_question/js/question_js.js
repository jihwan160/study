
window.onload = function() {
    var allOpenBtn = document.querySelector('#all_open_btn');
    var allCloseBtn = document.querySelector('#all_close_btn');

    var openBtn = document.querySelectorAll('.open_btn');
    var closeBtn = document.querySelectorAll('.close_btn');
    
    var answer = document.querySelectorAll('.answer');
    
    function allOpen(){
        for(var i = 0; i < answer.length; i++) {
            answer[i].style.display = "block";
        }
    }
    function allClose() {
        for(var i = 0; i < answer.length; i++) {
            answer[i].style.display = "none";
        }
    }

    function open(){
        var open1 = this.parentNode.nextSibling.nextSibling.style.display = "block";
    }

    function close(){
        var close1 = this.parentNode.nextSibling.nextSibling.style.display = "none";
    }

    allOpenBtn.addEventListener('click',allOpen);
    allCloseBtn.addEventListener('click',allClose);

    for(var i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener('click',open);
    }

    for(var i = 0; i < closeBtn.length; i++) {
        closeBtn[i].addEventListener('click',close);
    }
}