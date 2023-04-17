public class J04_관게연산자_비교연산자 {
    public static void main(String[] args) {
        //관계연산자(비교연산자)
        // > 크다 >= 크커나 같다(이상) < 작다 <= 작거나같다(이하) == 같다  != 같지 않다(부정)
        // Boolean true(1), false(0) 논리값을 나타낸다.

        int n=10;
        boolean b1 = n > 5; // 변수 n은 5보다 크다
        System.out.println("b1 = n > 5 "+b1);

        // 문제1) 
        //  n1 정수형 변수에 8 을 대입 
        //  a 정수형 변수에 20 대입 
        //  b2 는 boolean 으로 자료형 선언 변수
        //  비교연산 구현하시오 - n1는 a보다 작거나 같다

        n = 8;
        int a = 20;
        boolean b2;
        b2 = n <= a;
        System.out.println("n <= a "+b2);

        // b3 결과 변수
        // m변수에 15 대입
        // n변수에 14 대입
        // b3 같다 => 같다
        // b4 비교연산 => 같지 않다
        boolean b3;
        boolean b4;
        int m =15;
        n = 14;
        b3 = n == m;
        b4 = n != m;
        System.out.println("비교연산___같다/같지 않다");
        System.out.println("m = "+15);
        System.out.println("n = "+14);
        System.out.println("n == m : "+b3);
        System.out.println("n != m : "+b4);

        //문제2
        // 변수 정수형 x= 90
        // 변수 정수형 y= 70
        // 변수 불린형 p1 크다
        // 변수 불린형 p2 작다
        // 변수 불린형 p3 크거나 같다
        // 변수 불린형 p4 작거나 같다
        // 변수 불린형 p5 같다
        // 변수 불린형 p6 같지 않다

        //모든 변수 출력

        int x,y;
        boolean p1,p2,p3,p4,p5,p6;
        x=90;
        y=70;
        p1 = x>y;
        p2 = x<y;
        p3 = x>=y;
        p4 = x<=y;
        p5 = x==y;
        p6 = x!=y;

        System.out.println("x= "+x);
        System.out.println("y= "+y);
        System.out.println("x>y "+p1);
        System.out.println("x<y "+p2);
        System.out.println("x>=y "+p3);
        System.out.println("x<=y "+p4);
        System.out.println("x==y "+p5);
        System.out.println("x!=y "+p6);


        






    }
}
