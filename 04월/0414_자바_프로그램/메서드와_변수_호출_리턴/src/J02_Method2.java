public class J02_Method2 {
    public static void main(String[] args) {
        Method1();
        System.out.println();
        Method2("박소연");
        System.out.println();
        Method3(3,4);      
        System.out.println();
        System.out.println("리턴값이 있는 메서드 호출 결과 = "+Method4(5,8));
        System.out.println();
        int res = Method4(5,9);
        System.out.println();
        System.out.println("리턴값이 있는 매개변수 2개 메서드 변수 사용 호출 결과 : " + res);
        System.out.println();
        res = Method5(3,5,7);
        System.out.println("리턴값이 있는 매개변수 3개 메서드 변수 사용 호출 결과 : " + res);
        res = Method5(100,2,3);
       
        res = Method5(9,22,3);
        res = Method5(10,1,33);
        res = Method5(100,2,3);
        System.out.println("오버로딩 호출 결과 : " + res);

        String resstr = Method5("오버로딩","매개변수2개");

        System.out.println("리턴값이 있는 문자열 : " + resstr);
    }

    // 1. 기본메서드 : 리턴값이 없는 메서드 void
    //                매개변수 없는 메서드 () blank
    public static void Method1() {
        System.out.println("여기는 기본 메서드입니다.");
        
    }

    // 2. void 메서드 : 리턴값이 없는 메서드 void
    //                 매개변수 있는 메서드 (매개변수)
    public static void Method2(String name) {
        System.out.println("리턴값이 없는 메서드, 매개변수 있는 메서드  "+name);
    }

    // 3. void 메서드 : 리턴값이 없는 메서드 void
    //                 매개변수가 여러개 있는 메서드 (매개변수1,매개변수2,...)
    public static void Method3(int a, int b) {
        System.out.println( a+" + "+b+" = "+ (a+b));
    }

    // 4. 정수형 리턴값이 있는 메서드
    //    매개변수가 여러개 있는 메서드 (매개변수1,매개변수2,...)

    public static int Method4(int a, int b) {
        return a+b;
        
    }

    // 5. 정수형 리턴값이 있는 메서드
    //    매개변수가 여러개 있는 메서드 (매개변수1,매개변수2,...)

    public static int Method5(int x, int y, int z) {
        return x * y + z;
        
    }

    //  오버로딩
    // 6. 5번과 리턴값자료형 캍고 메서드이름 같은 메서드(매개변수 자료형이 다르다)
    //    매개변수 자료형이 다르면 같은 이름의 메서드 사용 가능하다
    //    정수형 리턴값이 있는 메서드
    //    매개변수가 여러개 있는 메서드 (매개변수1,매개변수2,...)

    public static int Method5(int x, long y, int z) {
        return x * (int)y + z;
        
    }

    public static long Method5(int x, int y, long z) {
        return x * (int)y - z;
        
    }

    public static long Method5(long x, int y, long z) {
        return x * (int)y * z;
        
    }

    public static String Method5(String x, String y) {
        return x +", " + y;
        
    }
    
}
