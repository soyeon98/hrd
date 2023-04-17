import java.util.Scanner;

public class J02_클래스_메서드_응용 {

    Scanner sc = new Scanner(System.in);
    //1. 메서드 제작
    public void Repeat() {
        int a;
        System.out.println("정수를 입력하세요");
        a=sc.nextInt();
        for(int i=0; i<a;i++){
            System.out.println("5월은 날씨가 좋게 해주세요");
        }
    }



    public static void main(String[] args) {
        // 1.출력할 횟수를 화면에서 입력
        // 메소드 static이 없고 return 값이 없는 메서드 호출 실행하시오
        J02_클래스_메서드_응용 newJ02_클래스_메서드_응용 = new J02_클래스_메서드_응용();
        newJ02_클래스_메서드_응용.Repeat();
   
    }
    
}
