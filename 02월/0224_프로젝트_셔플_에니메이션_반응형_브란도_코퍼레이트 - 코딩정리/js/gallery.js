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
            let a = [];

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

                //버튼 번호에 따른
                switch(btnNumber){
                    case 0:
                        a=[0,1,2,3,4,5,6,7];
                        break;
                    case 1:
                        a=[2,3,5,6,7];
                        break;
                    case 2:
                        a=[0,1,3,4,6,7];
                        break;
                    case 3:
                        a=[0,2,4,6];
                        break;
                    case 4:
                        a=[0,1,3,4,5,6,7];                      
                }

                //전제 반복 처리 마무리
                imgBox.removeClass('addZoom'); 
                let k=-1;
                for(i=0; i<rows;i++){ //0 1
                    for(j=0; j<cols; j++){ // 0 1 2 3  0 1 2 3
                        k++;
                        galleryBoxUlLi.eq(a[k]).stop().animate({top:imgH*i,left:imgW*j},300);
                    }
                }  
                for(let i=0; i<a.length; i++){
                imgBox.eq(a[i]).addClass('addZoom');    
                }


            } //갤러리 함수 끝

            //3. 갤러리 버튼 클릭 이벤트
            //5개 버튼 개체 배열 처리
            galleryBtn.each(function(idx){
                $(this).on({
                    click(e){
                        e.preventDefault();
                        galleryBtn.removeClass('on');                                                      
                        console.log(idx); //클릭한 버튼 번호
                        btnNumber = idx;
                        galleryBtn.eq(idx).addClass('on');      
                        galleryFn();
                    }
                });
            });

     



         
    }
    
}
gallery.init();

})(jQuery,window,document);