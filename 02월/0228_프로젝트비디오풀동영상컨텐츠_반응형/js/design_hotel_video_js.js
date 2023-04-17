((window,document,undefined)=>{

    class DesignHotelClass { 
        init(){
            this.mainMethod();
        }
        mainMethod(){

            const $video = document.querySelector('#videoHotel video');
            
            let winW = window.innerWidth;
            let winH = window.innerHeight;
            let vidW = $video.clientWidth;
            let vidH = $video.clientHeight;
            let marT = 0;
            let marL = 0;
            let setId = 0;
            //로딩시 강제 실행
            setId = setInterval(resizeVideo, 100);
     
            
            //반응형 함수
            function resizeVideo(){
                
                winW = window.innerWidth;
                winH = window.innerHeight;
                vidW = $video.clientWidth;
                vidH = $video.clientHeight;      
                marT= (winH-vidH)/2;
                marL = (winW-vidW)/2;


                if(winW > vidW){
                    $video.style.width=`${winW}px`;
                    $video.style.height=`auto`;
                }
                if(winH > vidH){
                    $video.style.width=`auto`;
                    $video.style.height=`${winH}px`;
                }
                $video.style.marginTop=`${marT}px`
                $video.style.marginLeft=`${marL}px`
            }

            //반응형

            $(window).resize(function(){
                clearInterval(setId);
                resizeVideo();
            });

        }
    }

    const newDesignHotelClass = new DesignHotelClass();
    newDesignHotelClass.init(); //생성자를 생성하여 메서드 호출 실행

})(window,document);