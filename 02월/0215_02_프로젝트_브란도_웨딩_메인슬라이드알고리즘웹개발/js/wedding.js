// $(function(){  제이쿼리 선언문 -> $ 사인이 제이쿼리, 라이브러리와 충돌할 수 있다
//     console.log($);
// });

(function($){ //내부 변수 충돌 가능성 제로

    //객체 생성:변수의 중복을 피한다.
    const wedding = {
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){
            console.log('header');
        },
        section1(){
            console.log('section1');
        },
        section2(){
            console.log('section2');
        },
        section3(){
            console.log('section3');
        }
    }
    wedding.init()

})(jQuery); //즉시실행함수 IIFE

// (function(){
//     alert('즉시실행함수');
// })();