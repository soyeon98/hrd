public class J01_Method_기본생성_호출_실행 {
    public static void main(String[] args) { // 모든 클래스에 한 개만 존재하는 메인 메서드
         // void 리턴값이 없는 메서드 / String, int, float... 리턴값이 있는 메서드
        // 메서드(Method)
        // 1. 메서드 선언 => 함수같은 종류
        // 리턴타입 메서드이름(타입 매개변수1,...){
        //     실행문(영역=>scope)
        // }

        // 기타 프로그램에서의 메서드와 함수
        // 예)
        // 객체내에서의 함수
        // const Object = new Object();
        // Object = {
        //     state:{ // 멤버 변수 속성 필드
        //         isLogic:true;
        //     },
        //     mainSlide: function(){

        //     },
        //     scrollEvent(){

        //     },
        // }

        // class Object2 {
        //     state:{
        //         cnt:0
        //     }
        //     mainSlide(){  객체 내에 있으므로 메서드인 함수
                
        //     }
        //     mainSlide(){

        //     }
            
        // }

        // 접근제한자 public
        // public static 리턴타입(자료형 String, int ..., void) 메서드이름(){}
        // public static 리턴타입(자료형 String, int ..., void) 메서드이름(매개변수){}

        // 메서드 호출 실행
        MainSlide("박소연");
        MainSlide("박미연");
        MainSlide("이아현");
        MainSlide("한수진");

    } // 메인 메서드

    public static void MainSlide(String irum){ // 메서드 호출 실행 메인메서드내에서 메서드 이름();
        System.out.println("출력결과 : 메인슬라이드메서드입니다 " + irum);
    }

}
