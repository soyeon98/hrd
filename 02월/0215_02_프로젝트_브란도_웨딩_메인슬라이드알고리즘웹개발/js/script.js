(function($){
    const wedding={
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){

            //로딩 시 바로가기 메뉴의 포지션 탑 값 가져오기
            //console.log($('#section6').offset().top);

            //메인버튼 클릭 이벤트 스무스 스크롤링 이벤트 구현
            $('.main-btn').on({
                click(){
                    console.log($(this).attr('href')); // attribute 어트리뷰트 속성
                    let pos= $(this).attr('href'); 
                    $('html,body').animate({scrollTop:$(pos).offset().top}, 600);
                    // $('html,body').animate({scrollTop:$(pos).offset().left}, 600); top left 두가지만 있음
                }
            });

            //모바일 버튼 이벤트 
            //클릭 시 자식요소에서 line 클래스를 찾아서 find('.line')
            //  on 클래스를 추가(addClass('on'))
            // $('.mobile-btn').on({
            //     click(){              
            //       $(this).find('.line').toggleClass('on');                
            //     }
            let t=false; //토글 구현:스위칭,교환
            $('.mobile-btn').on({
                click(e){
                    e.preventDefault();//a 새로고침 기능 막기
                    if(t===false){
                        t=true;
                        $(this).find('.line').addClass('on');
                    }
                    else{
                        t=false;
                        $(this).find('.line').removeClass('on');
                    }
                    
                    
                }
            });
            
        },
        section1(){
            //메인슬라이드 웹개발
            //우측에서 좌측으로 0.6초간 이동하고 3초간 대기

            //자동타이머를 이용한 슬라이드구현
            // let cnt=3; 0으로 리턴
            let cnt=0;
          

            //1.메인슬라이드함수()
            function mainSlide(){//애니메이션 버블링 stop으로 막아주기
                $('.slide-wrap').stop().animate({left:`${-100 * cnt}%`},1000,'easeInOutExpo', function(){//이동이 끝나면
                    if(cnt===3) {cnt=0}; //처음으로 리턴
                    $('.slide-wrap').animate({left:`${-100 * cnt}%`},0);
                });
            }
            //2.다음카운트함수()
            function nextCount(){
                cnt++;
                mainSlide(); //mainSlide함수 호출
            }
        
            //3.자동타이머함수()
            function autoTimer(){
                setInterval(function(){
                    nextCount();
                },3000);//3초 간격으로 무한하게 반복 수행
            }
            autoTimer();
        },
        section2(){},
        section3(){}
    }
    wedding.init();


})(jQuery);