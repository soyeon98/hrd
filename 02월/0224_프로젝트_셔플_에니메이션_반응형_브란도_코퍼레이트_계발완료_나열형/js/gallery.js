(function($,window,documet){

    const gallery = {
        init(){
            this.main();
        },
        main(){
            //선택자 중복을 피하기 위해서 반드시 해당 섹션 아이디를 앞에 표기
            const galleryBtn = $('#sectionGallery .gallery-btn'); //갤러리 이벤트 버튼
            const imgBox = $('#sectionGallery .img-box');
            const galleryBoxUl =$('#gallery-box ul');
            const galleryBoxUlLi =$('#gallery-box ul li');
            let n = galleryBoxUlLi.length; // li 갯수
            let cols = 4; // 기본 4칸
            let rows = Math.ceil(n/cols); // 8개/4칸 = 2줄
            let winW = $(window).innerWidth();
            let imgW = winW/cols; // 창너비/칸수
            let imgH = imgW * 0.75; // 이미지너비*0.75
            let galBoxH = imgH*rows; // 갤러리박스 전체 높이
            let btnNumber = 0; //버튼 클릭 시 전달되는 번호

            //로딩시 함수 호출 실행
            galleryFn();
            galleryBtn.removeClass('on');
            galleryBtn.eq(btnNumber).addClass('on');

            // 1. 반응형 이벤트
            // $(window).scroll() -> 스크롤 발생할때
            $(window).resize(function(){ // 크기 변경 시 이벤트 발생
                galleryFn();
            
            }) ;

            // 2.갤러리 함수
            function galleryFn(){

                console.log('버튼 번호',btnNumber);
                switch(btnNumber){
                    case 0:
                        n=8;
                        break;
                    case 1:
                        n=5;
                        break;
                    case 2:
                        n=6;
                        break;
                    case 3:
                        n=4;
                        break;
                    case 4:
                        n=7;
                        break;            
                    default:
                }         
                
                console.log('갤러리 리스트 갯수',n);
               
               
                if( $(window).innerWidth()>= 1200){  // 1200 ~ 4개 배열
                    cols=4;
                }
                else if( $(window).innerWidth()>=991){ // 991 ~ 1200 미만 3개 배열 
                    cols=3;
                }
                 else if( $(window).innerWidth()>=768){ // 768 ~ 991 미만 2개 배열
                    cols=2;
                }
                else {  // 768 미만 1개 배열
                    cols=1;
                }
              
             
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

                
                if(btnNumber===0){  // ALL - 8개                   
                    
                    //줌아웃(Womm Out)
                    imgBox.removeClass('addZoom'); // 줌효과 모두 초기화
                    switch(cols){//스위치(조건) 케이스(case ~인 경우) 문
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
                    //줌인(Zoom In)    
                    imgBox.eq(0).addClass('addZoom');    
                    imgBox.eq(1).addClass('addZoom');    
                    imgBox.eq(2).addClass('addZoom');    
                    imgBox.eq(3).addClass('addZoom');    
                    imgBox.eq(4).addClass('addZoom');    
                    imgBox.eq(5).addClass('addZoom');    
                    imgBox.eq(6).addClass('addZoom');    
                    imgBox.eq(7).addClass('addZoom');
                    //find() 자식요소 또는 자손요소 검색 가능 자기 자신의 요소는 검색 불가-HasClass 이용   
                     //galleryBoxUlLi.eq(0).find('.img-box').addClass('addZoom');
  
                }
                else if(btnNumber===1){  // WEB - 5개
                    //줌아웃(Womm Out)
                    imgBox.removeClass('addZoom');

                    //갤러리 리스트 포지션
                    switch(cols){//스위치(조건) 케이스(case ~인 경우) 문
                        case 4: //cols가 4인 경우
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*0,left:imgW*2},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*0,left:imgW*3},300);

                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*0},300);
                            break;
                        case 3:

                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*0,left:imgW*2},300);

                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*1},300);
                            break;
                        case 2:
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*1},300);

                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*1},300);

                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*2,left:imgW*0},300);
                            break;
                        default: // 그 외 else
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*2,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*3,left:imgW*0},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*4,left:imgW*0},300);
        
                        } 
                    //줌인(Zoom In) 
                    //hide
                    imgBox.eq(0).removeClass('addZoom'); // 안 써도 됨.     
                    imgBox.eq(1).removeClass('addZoom'); // 안 써도 됨.   
                    imgBox.eq(4).removeClass('addZoom'); // 안 써도 됨. 
                    //show
                    imgBox.eq(2).addClass('addZoom');    
                    imgBox.eq(3).addClass('addZoom');                        
                    imgBox.eq(5).addClass('addZoom');    
                    imgBox.eq(6).addClass('addZoom');    
                    imgBox.eq(7).addClass('addZoom');

                }
                else if(btnNumber===2){  // DESIGN - 6
                    //줌아웃(Womm Out)
                    imgBox.removeClass('addZoom');

                    //갤러리 리스트 포지션
                    switch(cols){//스위치(조건) 케이스(case ~인 경우) 문
                        case 4: //cols가 4인 경우
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*2},300);                          
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*0,left:imgW*3},300);
                           
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*1},300);
                            break;
                        case 3:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*2},300); 

                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*1},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*2},300);
                            break;
                        case 2:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);

                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*0},300);                          
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*1},300);
                           
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*2,left:imgW*0},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*2,left:imgW*1},300);
                            break;
                        default: // 그 외 else
                             galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                             galleryBoxUlLi.eq(1).stop().animate({top:imgH*1,left:imgW*0},300);
                             galleryBoxUlLi.eq(3).stop().animate({top:imgH*2,left:imgW*0},300);                          
                             galleryBoxUlLi.eq(4).stop().animate({top:imgH*3,left:imgW*0},300);
                             galleryBoxUlLi.eq(6).stop().animate({top:imgH*4,left:imgW*0},300);
                             galleryBoxUlLi.eq(7).stop().animate({top:imgH*5,left:imgW*0},300);

                        } 
                    //줌인(Zoom In) 
                    //hide
                    imgBox.eq(2).removeClass('addZoom');
                    imgBox.eq(5).removeClass('addZoom'); 
                    //show
                    imgBox.eq(0).addClass('addZoom');     
                    imgBox.eq(1).addClass('addZoom');                        
                    imgBox.eq(3).addClass('addZoom');                        
                    imgBox.eq(4).addClass('addZoom');    
                    imgBox.eq(6).addClass('addZoom');    
                    imgBox.eq(7).addClass('addZoom');                    
                }
                else if(btnNumber===3){  // BRANDING - 4

                    imgBox.removeClass('addZoom'); 

                    switch(cols){
                        case 4: 
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*0,left:imgW*2},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*0,left:imgW*3},300);
                            break;
                        case 3:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*0,left:imgW*2},300);

                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*0},300);
                            break;
                        case 2:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(2).stop().animate({top:imgH*0,left:imgW*1},300);

                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*1},300);
                            break;
                        default: 
                             galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                             galleryBoxUlLi.eq(2).stop().animate({top:imgH*1,left:imgW*0},300);
                             galleryBoxUlLi.eq(4).stop().animate({top:imgH*2,left:imgW*0},300);
                             galleryBoxUlLi.eq(6).stop().animate({top:imgH*3,left:imgW*0},300);

                        }   
                    //줌인(Zoom In)    
                    //hide
                    imgBox.eq(1).removeClass('addZoom');     
                    imgBox.eq(3).removeClass('addZoom');
                    imgBox.eq(5).removeClass('addZoom');
                    imgBox.eq(7).removeClass('addZoom'); 
                    //show
                    imgBox.eq(0).addClass('addZoom');      
                    imgBox.eq(2).addClass('addZoom');                           
                    imgBox.eq(4).addClass('addZoom');                           
                    imgBox.eq(6).addClass('addZoom');    
                                    
                }
                else if(btnNumber===4){  // ADVERTISING - 7
                    imgBox.removeClass('addZoom'); 

                    switch(cols){
                        case 4: 
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*2},300);
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*0,left:imgW*3},300);

                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*1},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*1,left:imgW*2},300);
                            break;
                        case 3:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*0,left:imgW*2},300);

                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*1,left:imgW*1},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*1,left:imgW*2},300);

                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*2,left:imgW*0},300);
                            break;
                        case 2:
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*0,left:imgW*1},300);

                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*1,left:imgW*1},300);

                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*2,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*2,left:imgW*1},300);

                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*3,left:imgW*0},300);
                            break;
                        default: 
                            galleryBoxUlLi.eq(0).stop().animate({top:imgH*0,left:imgW*0},300);
                            galleryBoxUlLi.eq(1).stop().animate({top:imgH*1,left:imgW*0},300);
                            galleryBoxUlLi.eq(3).stop().animate({top:imgH*2,left:imgW*0},300);
                            galleryBoxUlLi.eq(4).stop().animate({top:imgH*3,left:imgW*0},300);
                            galleryBoxUlLi.eq(5).stop().animate({top:imgH*4,left:imgW*0},300);
                            galleryBoxUlLi.eq(6).stop().animate({top:imgH*5,left:imgW*0},300);
                            galleryBoxUlLi.eq(7).stop().animate({top:imgH*6,left:imgW*0},300);
        
                        }   
                    //줌인(Zoom In)    
                    imgBox.eq(2).removeClass('addZoom'); 

                    imgBox.eq(0).addClass('addZoom');    
                    imgBox.eq(1).addClass('addZoom');                        
                    imgBox.eq(3).addClass('addZoom');    
                    imgBox.eq(4).addClass('addZoom');    
                    imgBox.eq(5).addClass('addZoom');    
                    imgBox.eq(6).addClass('addZoom');    
                    imgBox.eq(7).addClass('addZoom');                   
                }

            }

            //3. 갤러리 버튼 클릭 이벤트
            //5개 버튼 개체 배열 처리
            galleryBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        galleryBtn.removeClass('on');
                        console.log(idx); //클릭한 버튼 번호
                        btnNumber = idx;
                        galleryFn();
                    }
                });
            });

     



         
    }
    
}
gallery.init();

})(jQuery,window,document);