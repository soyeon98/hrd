public class J05_논리연산자 {
    public static void main(String[] args) {
        //논리연산자 (논리곱 논리합 논리부정)
        //  && - 논리곱(AND) 연산자 - 모두 만족(true)이면 true
        //  || - 논리합(OR) 연산자 - 어느 하나라도 만족(true)이면 true
        //  !  - 논리부정(NOT) 연산자 => 반대 true이면 false, false이면 true

        //논리연산자 조건표
        ///&& : 논리곱(and)////////////////////
        // 이항 연산
        // 참/거짓  연산자  참/거짓    결과
        //  true    &&      true     true  
        //  true    &&      false    false  
        //  false   &&      true     false  
        //  false   &&      false    false  

        ///|| : 논리합(or)////////////////////
        // 이항 연산
        // 참/거짓  연산자  참/거짓    결과
        //  true    ||      true     true  
        //  true    ||      false    true 
        //  false   ||      true     true 
        //  false   ||      false    false  


        /// ! : 논리부정(not)////////////////////
        // 단항 연산
        // 참/거짓  연산자   결과
        //  true     !      false
        //  false    !      true 

        int num1 = 90;
        int num2 = 70;
        boolean p1 = num1 > num2; // 90은 70보다 크다 true 참
        boolean p2 = num1 == num2; // 90은 70과 같다 false 거짓
        boolean logic1 = p1 && p2; // p1 논리값과 p2논리값 논리곱
        boolean logic2 = p1 || p2; // p1 논리값과 p2논리값 논리합
        boolean logic3 = !p1; // p1 논리값 논리부정
        boolean logic4 = !p2; // p2논리값 논리부정

        System.out.println("num1 = "+num1);
        System.out.println("num2 = "+num2);
        System.out.println("p1 = num1 > num2 : "+p1);
        System.out.println("p2 = num1 == num2 : "+p2);
        System.out.println("p1 && p2 : "+logic1);
        System.out.println("p1 || p2 : "+logic2);
        System.out.println("!p1 : "+logic3);
        System.out.println("!p2 : "+logic4);


        //복합연산자
        boolean p3 = (((num1>num2)&&(num1<num2))||((num1==num2)||(num1!=num2)));
        System.out.println("() || () : "+ p3);

        // 삼항 연산
        // 조건식 ? 참 : 거짓

        int score = 90;
        score = 80;

        System.out.println("합격여부 : "+ (score >= 90?"합격":"불합격"));



    }
}
