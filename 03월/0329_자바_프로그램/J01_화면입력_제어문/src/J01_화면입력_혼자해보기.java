
import java.util.Scanner;

public class J01_화면입력_혼자해보기 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        // 1.문자열
        System.out.println("문자열 입력 : ");
        String str = sc.nextLine();
        System.out.println("입력된 문자열 : "+str);

        // 2.단어
        System.out.println("단어를 입력 : ");
        String word =sc.next();
        System.out.println("입력된 단어 : "+ word);
        // 3.정수
        System.out.println("정수를 입력 : ");
        int num = sc.nextInt();
        System.out.println("입력된 정수 : "+num);
        // 4.실수
        System.out.println("실수를 입력 : ");
        double num2 = sc.nextDouble();
        System.out.println("입력된 실수 : "+num2);
        // 5.1글자
        System.out.println("문자를 입력 : ");   
        char ch0 = sc.next().charAt(0); 
        System.out.println("입력된 첫번째 글자는 = " + ch0);


        sc.close();
    }
}
