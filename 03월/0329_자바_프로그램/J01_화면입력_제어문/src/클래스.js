(()=>{
    class Kurly{
        init(){
            this.section1();
        }
        section1(){
            console.log('섹션1 메소드입니다.');
        }
        nextLine(){

        }
        next(){
            console.log('일반');
        }
        nextInt(){
            console.log('정수');
        }
        nextDouble(){
            console.log('실수');
        }
    }

    // 클래스는 함수이다.
    const newKurly = new Kurly(); 

    newKurly.init();
})();