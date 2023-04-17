import java.util.Scanner;

public class J04_반복문_While_break {
    public static void main(String[] args) {
        // 무한반복문 while 문
        // 화면에서 정수 입력 받아서 
        // 입력받은 숫자만큼 8 반복 출력
        // 프로그램 종료는 0(Zero)를 입력 받으면 프로그램 종료
        // 무한반복문은 값이 true이면 계속 진행
        // 중간에 break 문 사용으로 종료시킴

        while(true){
            Scanner sc = new Scanner(System.in);
            System.out.println("숫자를 입력하세요");
            int num = sc.nextInt();
            for(int i=1; i<=num; i++){
                System.out.print("*");
            }
            System.out.println("");
            // 프로그램 종료 0을 입력받으면
            // break 문 사용 - 강제종료
            if(num==0){
                System.out.println("프로그램을 종료합니다.");
                break;
            }
        }



    }
}
