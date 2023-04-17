(function($,window,documet){

    const gallery = {
        init(){
            this.main();
        },
        main(){

            const num =$('#sectionCount .num');
            let countNum =[78200003,9050002,31000007,60000824];
            let countSum = [0,0,0,0]; //누적 변수는 반드시 초기값 설정
            let setId = 0; // Number

            //천단위마다 콤마형식으로 변환(치환 replace)하기
            // 스트링(문자열).replace(정규표현식REGEXP,` 그룹1,그룹2`)
            // (시작문자(^) 숫자(\d) 1자 이상(+)) 234 뒤 세자리는 반드시 숫자{3}
            // (시작문자(^) 숫자(\d) 1자 이상(+)) 1,234
            // (시작문자(^) 숫자(\d) 1자 이상(+)) 123,456
            // (시작문자(^) 숫자(\d) 1자 이상(+)) 1,234,567,891
            // const regexp= /(그룹1)(그룹2)/g;
            // const regexp= /(&1)(&2)/g; 달러사인이 그룹 이름으로 지정한다
            const regexp= /(^\d+)(\d{3})/g;

            //콤마형식 1회 구현하기 1000,000
            //콤마형식 반복문 사용 구현하기 1,000,000
            let number=7825;
            let number2=543;
            let number3=String(5446298037);
            console.log(String(number).replace(regexp,`$1,$2`));


            //정규표현식 참 거짓 확인테스트
            //정규표현식.test('문자열')
            //regexp.test('String(number)')
            console.log(regexp.test(String(number)));
            console.log(regexp.test(String(number2)));
            function commaFn(value){
                number3=String(value);
                while(regexp.test(number3)){
                    number3 = number3.replace(regexp,'$1,$2');
                    console.log(number3);
                }
                //화일문 끝나면 리턴 값을 되돌려 보내줘라
                return number3;
            }




            function countFn(){

                for(let i=0; i<countNum.length;i++){
                    countSum[i] += (countNum[i]/1000);
                }
                if(countSum[0]>countNum[0]){
                    clearInterval(setId);
                }              
                for(let i=0; i<countNum.length;i++){
                    num.eq(i).html(commaFn(Math.round(countSum[i])));
                }  
            }

            setId=setInterval(countFn,1);
        }
    
}
gallery.init();

})(jQuery,window,document);