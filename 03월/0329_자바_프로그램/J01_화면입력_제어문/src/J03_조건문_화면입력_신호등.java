
import java.util.Scanner;
public class J03_조건문_화면입력_신호등 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        // 신호등 색상을 입력하여 조검눔 구현
        System.out.println("신호등 색상을 입력하세요 대소문자 구별 없음.(R, G, Y)");
        char sign = sc.next().charAt(0);
        // 주의 소문자로(Lower Case), 대문자(Upper Case) 구별없이 입력
        if(sign=='R'|| sign =='r'){
            System.out.println("빨간불");
        }
        else if(sign=='G'|| sign =='g'){
            System.out.println("초록불");
        }
        else if(sign=='Y'|| sign =='y'){
            System.out.println("노란불");
        }
        else {
            System.out.println("잘못입력하셨습니다.");
        }

    }
}
