import java.util.Scanner;

public class J05_반복문_While_입력화면 {
    public static void main(String[] args) {
        // 문제
        // 화면에서 문자입력 받는다
        // 입력문자는 문자형 변수 ch 사용
        // 증감변수 cnt
        // a||b||c를 입력하면 1 증가
        // x||y||z를 입력하면 1 감소
        // e는 프로그램 종료
        // 프로그램 종료시 연산 결과 출력
        int cnt=0;
        Scanner sc = new Scanner(System.in);
        while(true){       
            System.out.println("알파벳 1자를 입력하세요-a,b,c는 1 증가, x,y,z는 1 감소, e는 프로그램 종료");
            char ch = sc.next().charAt(0);
            if(ch=='a'|| ch=='b'||ch=='c'){
                cnt++;
            }
            else if(ch=='x'|| ch=='y'||ch=='z'){
                cnt--;
            }
            else if(ch=='e'){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }
        System.out.println();
        System.out.println("연산 결과 : "+ cnt);
        System.out.println();


    }
}
