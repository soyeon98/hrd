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
            // console.log($('#section6').offset().top);

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
            let cnt=0;
            let setId = 0; //메모리에 할당된 인덱스번호를 저장한다.

            //1.메인슬라이드함수
             function mainSlide(){
                $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},600,'easeInOutSine',function(){
                    if(cnt===3)cnt=0;
                    if(cnt<0) cnt=2; //첫번째 왼쪽으로 이동하면 마지막 슬라이드
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
                });
             }
            //2-1.다음카운트함수
            function nextCount(){
                cnt++;
                mainSlide();
            }
            //2-2. 이전카운트함수
            function prevCount(){
                cnt--;
                mainSlide();
            }
            //3.자동타이머함수
            function autoTimer(){
                setId=setInterval(nextCount,3000); //다음카운트함수 3초간격으로 호출하기
                console.log(setId);
            }
            autoTimer(); //로딩 시 실행

            // 4.타이머 일시정지
            //   슬라이드 컨테이너 박스에 마우스를 올리면(mouseover = mouseenter)
            //   슬라이드 컨테이너 박스에서 마우스가 떠나면(mouseout = mouseleave) 이벤트는 대문자 안씀
            // $('#section1').on({
            //     mouseenter(){
            //         clearInterval(setId);
            //     },
            //     mouseleave(){
            //         autoTimer();
            //     }
            // });
            $('.arrow-next-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    // 슬라이드 랩퍼 박스가 에니메이션이 진행 중 아닐 때 다음 슬라이드 호출
                    if(!$('.slide-wrap').is(':animated')){
                    nextCount();
                }
                }
            });
            $('.arrow-prev-btn').on({
                mouseenter(){
                    clearInterval(setId);
                },
                mouseleave(){
                    autoTimer();
                },
                click(){
                    if(!$('.slide-wrap').is(':animated')){
                        prevCount();
                    }
                }
            });

            let touchStart=0;
            let touchEnd=0;
            let mouseDown=false;
            $('#section1').on({
                mousedown(e){
                    touchStart=e.clientX;
                    clearInterval(setId);
                    mouseDown=true;
                },
                mouseup(e){
                    touchEnd=e.clientX;
                    autoTimer();
                    if(touchStart-touchEnd>0){
                        nextCount();
                    }
                    if(touchStart-touchEnd<0){
                        prevCount();
                    }
                    mouseDown=flase;
                },
                mousemove(e){
                    if(mouseDown!==true)return;
                    $('.slide-wrap').css({left:e.clientX});

                }
            });

        },
        section2(){},
        section3(){}
    }
    wedding.init();


})(jQuery);