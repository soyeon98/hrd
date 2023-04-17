(function($,window,documet){

    const gallery = {
        init(){
            this.main();
        },
        main(){
            const galleryBoxUl =$('#gallery-box ul');
            const galleryBoxUlLi =$('#gallery-box ul li');
            let n = galleryBoxUlLi.length; // li 갯수
            let cols = 4; // 기본 4칸
            let rows = Math.ceil(n/cols); // 8개/4칸 = 2줄
            let winW = $(window).innerWidth();
            let imgW = winW/cols; // 창너비/칸수
            let imgH = imgW * 0.75; // 이미지너비*0.75
            let galBoxH = imgH*rows; // 갤러리박스 전체 높이

            // 1. 반응형 이벤트
            // $(window).scroll() -> 스크롤 발생할때
            $(window).resize(function(){ // 크기 변경 시 이벤트 발생
                galleryFn();
            
            }) ;

            // 2.갤러리 함수
            function galleryFn(){
                // 1200 ~ 4개 배열
                // 991 ~ 1200 미만 3개 배열 
                // 768 ~ 991 미만 2개 배열
                // 768 미만 1개 배열
                if( $(window).innerWidth()>= 1200){
                    cols=4;
                }
                else if( $(window).innerWidth()>=991){
                    cols=3;
                }
                 else if( $(window).innerWidth()>=768){
                    cols=2;
                }
                else {
                    cols=1;
                }
              
                cols = 4; 
                rows = Math.ceil(n/cols); 
                winW = $(window).innerWidth();
                imgW = winW/cols; 
                imgH = imgW * 0.75; 
                galBoxH = imgH*rows; 

                // console.log(`n ${n}`);
                // console.log(`cols ${cols}`);
                // console.log(`rows ${rows}`);
                // console.log(`winW ${winW}`);
                // console.log(`imgW ${imgW}`);
                // console.log(`imgH ${imgH}`);
                // console.log(`galBoxH ${galBoxH}`);

                //갤러리박스 높이 설정

                galleryBoxUl.css({height:galBoxH});
                galleryBoxUlLi.css({width:imgW,height:imgH});

                // if(cols===4){
                //     galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                //     galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*2},300);
                //     galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*3},300);

                //     galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*1},300);
                //     galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*2},300);
                //     galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*3},300);
                // }
                
                // else if(cols===3){
                //     galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                //     galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*2},300);

                //     galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*0},300);
                //     galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*1},300);
                //     galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*2},300);

                //     galleryBoxUlLi.eq(6).stop().animate({top:imgH*2,left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({top:imgH*2,left:imgW*1},300);
                // }

                // else if(cols===2){
                //     galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);

                //     galleryBoxUlLi.eq(2).stop().animate({top:imgH*1,left:imgW*0},300);
                //     galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*1},300);

                //     galleryBoxUlLi.eq(4).stop().animate({top:imgH*2,left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({top:imgH*2,left:imgW*1},300);
                    
                //     galleryBoxUlLi.eq(6).stop().animate({top:imgH*3,left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({top:imgH*3,left:imgW*1},300);
                // }

                // else{
                //     galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                //     galleryBoxUlLi.eq(1).stop().animate({top:imgH*1,left:imgW*0},300);
                //     galleryBoxUlLi.eq(2).stop().animate({top:imgH*2,left:imgW*0},300);
                //     galleryBoxUlLi.eq(3).stop().animate({top:imgH*3,left:imgW*0},300);
                //     galleryBoxUlLi.eq(4).stop().animate({top:imgH*4,left:imgW*0},300);
                //     galleryBoxUlLi.eq(5).stop().animate({top:imgH*5,left:imgW*0},300);
                //     galleryBoxUlLi.eq(6).stop().animate({top:imgH*6,left:imgW*0},300);
                //     galleryBoxUlLi.eq(7).stop().animate({top:imgH*7,left:imgW*0},300);
                // }
                
                            //스위치(조건) 케이스(case ~인 경우) 문
                 switch(cols){
                case 4: //cols가 4인 경우
                    galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                    galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                    galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*2},300);
                    galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*3},300);

                    galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*0},300);
                    galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*1},300);
                    galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*2},300);
                    galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*3},300);
                    break;
                case 3:
                    galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                    galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                    galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*2},300);

                    galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*0},300);
                    galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*1},300);
                    galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*2},300);

                    galleryBoxUlLi.eq(6).stop().animate({top:imgH*2,left:imgW*0},300);
                    galleryBoxUlLi.eq(7).stop().animate({top:imgH*2,left:imgW*1},300);
                    break;
                case 2:
                    galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                    galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);

                    galleryBoxUlLi.eq(2).stop().animate({top:imgH*1,left:imgW*0},300);
                    galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*1},300);

                    galleryBoxUlLi.eq(4).stop().animate({top:imgH*2,left:imgW*0},300);
                    galleryBoxUlLi.eq(5).stop().animate({top:imgH*2,left:imgW*1},300);
                    
                    galleryBoxUlLi.eq(6).stop().animate({top:imgH*3,left:imgW*0},300);
                    galleryBoxUlLi.eq(7).stop().animate({top:imgH*3,left:imgW*1},300);
                    break;
                default: // 그 외 else
                    galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                    galleryBoxUlLi.eq(1).stop().animate({top:imgH*1,left:imgW*0},300);
                    galleryBoxUlLi.eq(2).stop().animate({top:imgH*2,left:imgW*0},300);
                    galleryBoxUlLi.eq(3).stop().animate({top:imgH*3,left:imgW*0},300);
                    galleryBoxUlLi.eq(4).stop().animate({top:imgH*4,left:imgW*0},300);
                    galleryBoxUlLi.eq(5).stop().animate({top:imgH*5,left:imgW*0},300);
                    galleryBoxUlLi.eq(6).stop().animate({top:imgH*6,left:imgW*0},300);
                    galleryBoxUlLi.eq(7).stop().animate({top:imgH*7,left:imgW*0},300);
  
              }

            }




         
    }
    
}
gallery.init();

})(jQuery,window,document);