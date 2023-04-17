(function($, window, document){
    const tomtom = {
        init(){
            this.header();
            this.section1();
            this.section3();
            this.section5();
            this.goTop();
        },
        header(){

            let newScroll = $(window).scrollTop();  //새로운 스크롤값               
            console.log(`윈도우 스크롤 이벤트 $(window).scrollTop()=${$(window).scrollTop()}`);

            $(window).scroll(function(e){
                
            });
            $(window).scroll(function(){
                newScroll = $(window).scrollTop(); 
                if(newScroll>0){
                    $('#header').addClass('on');
                }
                if(newScroll===0){
                    $('#header').removeClass('on');
                }
            });
            
        },
        section1(){
            const $slide= $('#section1 .slide');
            const $pageBtn = $('#section1 .page-btn');
            const $changeNumber = $('#section1 .change-num');
            let cnt=0;
            let imsi = null;
          
         
            //1-1 메인 다음 슬라이드 함수
            function mainNextSlide(){ // 1 2 3 4 0 1 2 3 ...     
                $slide                      .css({zIndex:1,opacity:1});
                $slide.eq(imsi!==null?imsi:(cnt===0 ? 4:cnt-1)).css({zIndex:2}); //현재슬라이드
                $slide.eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000); //다음슬라이드
                pageBtn();
     
            }
            // 1-2 메인 이전 슬라이드 함수
            function mainPrevSlide(){
                $slide.css({zIndex:1,opacity:1});
                $slide.eq(cnt).css({zIndex:2});
                $slide.eq(imsi!==null?imsi:(cnt===4?0:cnt+1)).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000);
                pageBtn();
            }
            // 2. 다음 카운트 함수
            function nextCount(){
                cnt++;
                if (cnt>4){ 
                    cnt=0; 
                }
                mainNextSlide(); 
            }
            // 2. 이전 카운트 함수
            function prevCount(){
                cnt--;
                if(cnt<0){
                    cnt=4;
                }
                mainPrevSlide();
            }
            //자동타이머 함수
            function autoTimer(){
                setId=setInterval(nextCount, 4000);
                }         
                autoTimer();
            //페이지네이션함수
            function pageBtn(){
                $pageBtn.removeClass('on');
                $pageBtn.eq(cnt>4?0:cnt).addClass('on');

            }
           
            $pageBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        clearInterval(setId);  
                        if(cnt<idx){
                            if(Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                                cnt=idx;
                            }
                            else{
                                imsi=null;
                                cnt=idx;
                            }                           
                            mainNextSlide();
                        }
                        if(cnt>idx){
                            if(Math.abs(idx-cnt)>=2){
                                imsi=cnt;
                                cnt=idx;
                            }
                            else{
                                imsi=null;
                                cnt=idx;
                            }
                            mainPrevSlide();
                        }
                    }
                });
            });

            //터치스와이프
            let touchStart = 0;
            let touchEnd = 0;

            $('#section1').on({
                mousedown(e){
                    touchStart=e.clientX;
                    clearInterval(setId);
                },
                mouseup(e){
                    touchEnd=e.clientX;
                
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
                }
            });
            //
            let t=false;
          
            // $('#section1 i').on({
            //     click(e){
            //         e.preventDefault();
            //         if(t===false){
            //             t=true;
            //             $(this).find('i').removeClass('fa fa-pause');
            //             $(this).find('i').addClass('fa fa-play');
                       
            //         }
                    
            //         else{
            //             t=false;                                                 
            //             $(this).find('i').removeClass('fa fa-play');
            //             $(this).find('i').addClass('fa fa-pause');
            //             clearInterval(setId);
            //         }
                    
                   
            //     }
            // });
        
            

     
        },
        section3(){
            let cnt = 0;

            //슬라이드함수
            function mainSlide(){

                $('#section3 .slide-wrap').stop().animate({left:-466.7*cnt},600,'swing',function(){
                   if(cnt > 8) cnt=0;
                   if(cnt < 0) cnt=8;
                   $('#section3 .slide-wrap').stop().animate({left:-466.7*cnt},0);
                });
                pageNation();
              }   

                function nextCount(){
                    cnt++;
                    mainSlide();
                }
                function prevCount(){
                    cnt--;
                    mainSlide();
                }
                function autoTimer(){
                    setId=setInterval(nextCount, 4000);
                    }         
                    autoTimer();
                //좌우 화살표 버튼
                $('#section3 .arrow-next-btn').on({
                    click(e){
                        e.preventDefault();
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }
                        
                    }
                });
                $('#section3 .arrow-prev-btn').on({
                    click(e){
                        e.preventDefault();
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }
                    }
                });
                
                //페이지네이션 함수
                function pageNation(){
                    $('#section3 .page-btn').removeClass('on');
                    $('#section3 .page-btn').eq(cnt>8?0:cnt).addClass('on');

                }
                $('#section3 .page-btn').each(function(idx){
                    $(this).on({
                        click(e){
                            e.preventDefault();
                            clearInterval(setId);
                            cnt=idx;
                            mainSlide();
                        }
                    });
                });            
                //드래그앤드롭
                let mouseDown=false;
                let dragStart=0;
                let dragEnd=0;
                let winWidth = $(window).innerWidth();
                $('#section3').on({
                    mousedown(e){
                        winWidth = $(window).innerWidth();
                        dragStart=e.clientX -2800.2;
                        mouseDown=true;
                        clearInterval(setId);
                    },
                    mouseup(e){
                        touchEnd=e.clientX;
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
                        dragEnd =  e.clientX;                    
                        $('.slide-wrap').css({left:dragEnd-dragStart});
                    }
                });
        },
        section5(){

            let cnt = 0;

            //슬라이드함수
            function mainSlide(){

                $('#section5 .slide-wrap').stop().animate({left:-466.7*cnt},600,'swing',function(){
                   if(cnt > 4) cnt=0;
                   if(cnt < 0) cnt=4;
                   $('#section5 .slide-wrap').stop().animate({left:-466.7*cnt},0);
                });
                pageNation();
              }   

                function nextCount(){
                    cnt++;
                    mainSlide();
                }
                function prevCount(){
                    cnt--;
                    mainSlide();
                }
                function autoTimer(){
                    setId=setInterval(nextCount, 4000);
                    }         
                    autoTimer();
                //좌우 화살표 버튼
                $('#section5 .arrow-next-btn').on({
                    click(e){
                        e.preventDefault();
                        if(!$('.slide-wrap').is(':animated')){
                            nextCount();
                        }
                        
                    }
                });
                $('#section5 .arrow-prev-btn').on({
                    click(e){
                        e.preventDefault();
                        if(!$('.slide-wrap').is(':animated')){
                            prevCount();
                        }
                    }
                });
                //페이지네이션 함수
                function pageNation(){
                    $('#section5 .page-btn').removeClass('on');
                    $('#section5 .page-btn').eq(cnt>4?0:cnt).addClass('on');

                }
                $('#section5 .page-btn').each(function(idx){
                    $(this).on({
                        click(e){
                            e.preventDefault();
                            clearInterval(setId);
                            cnt=idx;
                            mainSlide();
                        }
                    });
                });

            
         

            
        },
        goTop(){
            let newScroll = $(window).scrollTop();  //새로운 스크롤값               
            console.log(`윈도우 스크롤 이벤트 $(window).scrollTop()=${$(window).scrollTop()}`);

            $(window).scroll(function(e){
                
            });
            $(window).scroll(function(){
                newScroll = $(window).scrollTop(); 
                if(newScroll>0){
                    $('.go-top a').removeClass('on');
                }
                if(newScroll===0){
                    $('.go-top a').addClass('on');
                }
            });
        }

    }
    tomtom.init();

})(jQuery, window, document);