(($,window,document,undefined)=>{

    //객체는 첫글자 소문자 중간단어 대문자 => 카멜 케이스 기법

    // const designHotelArray = new Array(); //생성자방식
    // designHotelArray = [1,2,3,4,5];

    const designHotelArr = [1,2,2,3]; //리터럴방식 - 권장

    // const designHotelObject = new Object(); //생성자방식
    // designHotelObject = {
    const designHotelObject = {
        init(){
            this.mainMethod();
        },mainMethod(){
            
        }
    }
    designHotelObject.init();
    // 클래스는 첫 글자 대문자 중간단어도 대분자 => 파스칼 케이스 기법
    class DesignHotelClass { // 클래스선언
        init(){
            this.mainMethod();
        }
        mainMethod(){
           
            //창너비
            //창높이
            //비디오너비
            //비디오높이
            //마진 left
            //마진 top
            let winW = $(window).innerWidth();
            let winH = $(window).innerHeight();
            let vidW=$('#videoHotel video').innerWidth();
            let vidH=$('#videoHotel video').innerHeight();       
            let marT = 0;
            let marL = 0;
            let setId = 0;

            //로딩시 강제 실행
            setId = setInterval(resizeVideo, 100);
     
            
            //반응형 함수
            function resizeVideo(){
                const $video = $('#videoHotel video');
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                vidW=$('#videoHotel video').innerWidth();
                vidH=$('#videoHotel video').innerHeight();       
                marT= (winH-vidH)/2;
                marL = (winW-vidW)/2;


                //창너비가 비디오너비보다 크면 비디오너비를 창너비로 한고 비디오 높이는 auto
                if(winW > vidW){
                    $video.css({width:winW,height:'auto'});//창너비 기준으로 높이를 정렬 마진으로
                }
                if(winH > vidH){
                    $video.css({width:'auto',height:winH});//창높이를 기준으로 너비를 정렬 마진으로
                }
                $video.css({marginTop:marT,marginLeft:marL});
            }

            //반응형

            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();
            });

        }
    }

    //클래스도 함수이다.
    // 클래스는 반드시 생성자를 생성하고 호출 실행항다
    const newDesignHotelClass = new DesignHotelClass();
    newDesignHotelClass.init(); //생성자를 생성하여 메서드 호출 실행

})(jQuery,window,document);