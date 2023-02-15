
window.onload = function() {
    // 1. 개별열기/닫기 버튼
    var opens = document.querySelectorAll('.open1');
    var closes = document.querySelectorAll('.close1');
    // console.log('opens : ',opens);
    // console.log('closes : ',closes);
    // 2. 모두열기/모두닫기 버튼
    var open = document.querySelector('.open');
    var close = document.querySelector('.close');
    // console.log(open);
    // console.log(close);
    
    // 3. 각각 콘텐츠 
    var content = document.querySelectorAll('.content');
    // console.log(content);
    // var content = document.querySelectorAll('article>h2+p');
    
    // 2-1 모두열기 구현
    open.addEventListener('click',allOpen);
    //이벤트리스너
    function allOpen() {
        for(var i = 0; i < content.length; i++) {
            content[i].style.display = "block";
        }
    }
    // 2-1 모두닫기 구현
    close.addEventListener('click',allClose);
    //이벤트리스너
    function allClose() {
        for(var i = 0; i < content.length; i++) {
            content[i].style.display = "none";
        }
    }
    

    // 개별열기/닫기 버튼
    for(var i = 0; i < opens.length; i++) {
        opens[i].addEventListener('click',eachOpen);
        closes[i].addEventListener('click',eachClose);
    }

    // 개별열기
    function eachOpen() {
        var cnt = this.parentElement.nextElementSibling;
        cnt.style.display = "block";
    }

    // 개별닫기
    function eachClose() {
        var cCnt = this.parentElement.nextElementSibling;
        cCnt.style.display = "none";
    }


    // 개별열기 내가 한것
    // function open1() {
    //     var opens1 = this.parentNode.nextSibling.nextSibling.style.display = "block";
    //     console.log(opens1);
    // }
    // for(var i = 0; i < opens.length; i++) {
    //     opens[i].addEventListener('click',open1);
    // }

    // 개별닫기 내가한것
    // function close1() {
    //     var closes1 = this.parentNode.nextSibling.nextSibling.style.display = "none";
    //     console.log(closes1);
    // }
    // for(var i = 0; i < closes.length; i++) {
    //     closes[i].addEventListener('click',close1);
    // }
    
}