(function($,window,document){
    const wedding={
        init(){
            this.header();
            this.section1();
            this.section2();
            this.section3();
        },
        header(){

            //페럴록스 구현
            //스크롤 탑값이 아래로 내려가면 헤더에 on 클래스를 추가한다.
            //스크롤 탑값이 위로 올라가면 헤더에 on 클래스를 삭제한다.

            console.log(`윈도우 스크롤 이벤트 $(window).scrollTop()=${$(window).scrollTop()}`); //스크롤 탑값은 스크롤이벤트가 발생되어야만 작동됨.

            //$(window).resize();//창크기 높이 너비가 변하면 동작
            $(window).scroll(function(e){
                // console.log($(this).scrollTop());
            });//스크롤 값이 변경되면 동작

            //로딩 시 바로가기 메뉴의 포지션 탑 값 가져오기
            // console.log($('#section6').offset().top);

            let newScroll = $(window).scrollTop();  //새로운 스크롤값
            let oldScroll = newScroll;              //이전 스크롤값

            $(window).scroll(function(){
                newScroll = $(window).scrollTop();
                // console.log(newScroll);
                // console.log(`newScroll-oldScroll ${newScroll-oldScroll}`);
                if(newScroll-oldScroll>0){
                    // console.log('아래로');
                    $('#header').addClass('on');
                    $('#header').removeClass('off');
                }
                if(newScroll-oldScroll<0){
                    // console.log('위로');
                    $('#header').removeClass('on');
                    $('#header').addClass('off');
                }


                oldScroll=newScroll;
                // console.log(oldScroll);
            })


            //메인버튼 클릭 이벤트 스무스 스크롤링 이벤트 구현//////////////////////////////////////////////////////////
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
                    if(cnt > 2)cnt=0;
                    if(cnt < 0) cnt=2; //첫번째 왼쪽으로 이동하면 마지막 슬라이드
                    $('.slide-wrap').stop().animate({left:`${-100*cnt}%`},0);
                });
                //슬라이드박스 좌표 구하기
                // console.log(cnt,$('.slide-wrap').offset().left);

                //페이지네이션함수
                pageNation();
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
                // console.log(setId);
            }
            autoTimer(); //로딩 시 실행


            //4좌우화살 버튼
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

            // 5.터치 스와이프
            // 터치는 section1 
            // 마우스로 터치하면 방향을 게산하는 알고리즘
            let touchStart = 0;
            let touchEnd = 0;
            let mouseDown = false; //마우스다운하면 true 아니면 false
            let dragStart = 0;
            let dragEnd = 0;
            let winWidth = $(window).innerWidth();

            //데스크 용-마우스로
            $('#section1').on({
                mousedown(e){
                    winWidth = $(window).innerWidth();
                    touchStart =e.clientX;
                    dragStart =e.clientX - $('.slide-wrap').offset().left-winWidth;
                    mouseDown=true;
                    clearInterval(setId);
                },
                mouseup(e){
                    touchEnd =e.clientX;
                    autoTimer();
                    if(touchStart-touchEnd>0){
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }                      
                    }
                    if(touchStart-touchEnd<0){
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }                    
                    }
                    mouseDown=false;
                },
                mousemove(e){
                    if(mouseDown!==true)return;

                    // 마우스가 down되면 그 때부터 따라다녀라
                    // 마우스 down할 때 변수에 down상태를 저장한다. 
                    // 만약 마우스 down상태가 아니면 마우스무브는 취소해라 
                    dragEnd =  e.clientX;
                    // console.log(dragEnd-dragStart);
                    $('.slide-wrap').css({left:dragEnd-dragStart});
                }
            });

            //모바일, 테블릿 용 - 손가락으로 터치
            $('#section1').on({
                touchstart(e){ //mousedown
                    winWidth = $(window).innerWidth();
                    touchStart =e.originalEvent.changedTouches[0].clientX;
                    dragStart =e.originalEvent.changedTouches[0].clientX - $('.slide-wrap').offset().left-winWidth;
                    mouseDown=true;
                    console.log(e);
                    clearInterval(setId);
                    console.log(`손가락 터치시작`,e.originalEvent.changedTouches[0].clientX);
                },
                touchend(e){//mouseup
                    touchEnd =e.originalEvent.changedTouches[0].clientX;
                    autoTimer();
                    if(touchStart-touchEnd>0){
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }                      
                    }
                    if(touchStart-touchEnd<0){
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }                    
                    }
                    mouseDown=false;
                    console.log(`손가락 터치끝`);
                },
                touchmove(e){//mousemove
                    if(mouseDown!==true)return;

                    // 마우스가 down되면 그 때부터 따라다녀라
                    // 마우스 down할 때 변수에 down상태를 저장한다. 
                    // 만약 마우스 down상태가 아니면 마우스무브는 취소해라 
                    dragEnd =  e.originalEvent.changedTouches[0].clientX;
                    console.log(dragEnd-dragStart);
                    $('.slide-wrap').css({left:dragEnd-dragStart});
                }
            });

            // 7. 페이지네이션함수 ===> 메인슬라이드 함수
            function pageNation(){
                // console.log(cnt===3 ? 0:cnt);
                // console.log(cnt>2 ? 0:cnt);
                $('.page-btn').removeClass('on');       // 페이지버튼 모든 클래스 삭제
                $('.page-btn').eq(cnt>2 ? 0:cnt).addClass('on');  // 현재 슬라이드 번호
            }

            // 8. 페이지버튼 클릭 이벤트
            // $('.page-btn').eq(0).on({ //첫번째
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=0;
            //         // 메인슬라이드함수() 호출
            //         mainSlide();
            //     }
            // });
            // $('.page-btn').eq(1).on({ //두번째
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=1;
            //         // 메인슬라이드함수() 호출
            //         mainSlide();
            //     }
            // });
            // $('.page-btn').eq(2).on({ //세번째
            //     click(e){
            //         e.preventDefault();
            //         clearInterval(setId);
            //         cnt=2;
            //         // 메인슬라이드함수() 호출
            //         mainSlide();
            //     }
            // });

            //페이지버튼 클릭 이벤트 선택자 배열처리
            $('.page-btn').each(function(idx){
                // console.log(idx);
                $(this).on({
                    click(e){
                        e.preventDefault(); //a링크 새로고침 막기
                        clearInterval(setId);
                        cnt = idx;
                        mainSlide();
                    }
                });
            });


        },
        section2(){},
        section3(){}
    }
    wedding.init();


})(jQuery, window, document);