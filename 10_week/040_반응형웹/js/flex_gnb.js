// gnb lnb ham ES6 방식으로DOM객체 할당하세요
const ham_btn = document.querySelector('.ham');
const gnb = document.querySelector('#gnb');
const lnb = document.querySelector('#lnb');
console.log(ham_btn,gnb,lnb);

// 화살표 함수 ()=>{} function name(){}
ham_btn.addEventListener('click',()=>{
    gnb.classList.toggle('active');
    lnb.classList.toggle('active');
});






























