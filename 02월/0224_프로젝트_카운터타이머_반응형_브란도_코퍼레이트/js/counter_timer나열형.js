(function($,window,documet){

    const gallery = {
        init(){
            this.main();
        },
        main(){

            const num =$('#sectionCount .num');
            let countNum1 = 7823/1000; // Number 
            let countNum2 = 9052/1000; // Number 
            let countNum3 = 3107/1000; // Number 
            let countNum4 = 6824/1000; // Number 

            let countSum1 = 0; // Number
            let countSum2 = 0; // Number
            let countSum3 = 0; // Number
            let countSum4 = 0; // Number

            let setId = 0; // Number
            let cnt = 0;

            function countFn(){
                cnt++; //1~ 1000


                countSum1 += countNum1;
                num.eq(0).html(Math.round(countSum1));
                if(countSum1>7823){
                    clearInterval(setId);
                }
                countSum2 += countNum2;
                num.eq(1).html(Math.round(countSum2));
                countSum3 += countNum3;
                num.eq(2).html(Math.round(countSum3));
                countSum4 += countNum4;
                num.eq(3).html(Math.round(countSum4));

                
                
                
                
            }

            setId=setInterval(countFn,1);
        }
    
}
gallery.init();

})(jQuery,window,document);