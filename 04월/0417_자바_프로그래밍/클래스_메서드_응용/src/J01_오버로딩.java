public class J01_오버로딩 {


    // 오버로딩1 메서드 선언
    // void없는 메서드는 리턴값 있는 메서드
    public void Overloading() {
        System.out.println("static 없는 메서드");
    }

    public static void Overloading(String n) {
        System.out.println("리턴값없는 메서드 "+n);
    }
    public static String Overloading(String name,String jikcheck){
        return name +", "+ jikcheck;
    }
    // 오버로딩2 메서드 선언
    public static int Overloading(int a, int b){
        return a+b;
    }
    // 오버로딩3 메서드 선언
    public static String Overloading(String a, int b){
        return a +", "+b;
    }
    // 오버로딩4 메서드 선언
    public static Float Overloading(Float a, int b){
        return a + b;
    }
    // 오버로딩5 메서드 선언
    // 파라미터 개수와 아규먼트 개수가 달라도 되는데 파라미터개수보다 아규먼트개수가 작으면 오류
    public static Float Overloading(Float a, Float b){
        return a +b;
    }
    public static int method1(int a, int b){
        return a+b;
    }
    public static void main(String[] args) {

        //static 없는 메서드
        // 클래스 생성하고 실행
        J01_오버로딩 newJ01_오버로딩=new J01_오버로딩();
        newJ01_오버로딩.Overloading();
        Overloading("박소연");

        String overload1 =Overloading("이순신","전라좌수영");
        int overload2 =Overloading(10,30);
        String overload3 =Overloading("김유신",50);
        Float overload4 =Overloading(5.0f,5);
        Float overload5 =Overloading(6.3f,5.3f);

        System.out.println();
        System.out.println("오버로딩1 결과 = "+overload1);
        System.out.println("오버로딩2 결과 = "+overload2);
        System.out.println("오버로딩3 결과 = "+overload3);
        System.out.println("오버로딩4 결과 = "+overload4);
        System.out.println("오버로딩5 결과 = "+overload5);
        System.out.println();
        System.out.println(method1(5,6));


    }
    
}
