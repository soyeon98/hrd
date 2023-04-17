/**
 * J01_입력화면_조건문
 */

 import java.util.Scanner;

public class J01_입력화면_조건문_홀짝 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        //문제 1번
        // 자연수 입력받아서
        // 짝수인지 홀수인지 판단 조건문
        // % mod 나머지
        // 1. 입력 : 자연수
        // 2. 조건  : 짝수, 홀수 판단
        // 3. 출력 : 짝수입니다 || 홀수입니다.

        // 1. 입력메시지 & 입력화면
        System.out.println("자연수를 입력하세요");
        int a = sc.nextInt();

        // 2. 조건 
        if((a>=0)&&(a%2==0)){
            System.out.printf("입력값 : [%d]은(는) 짝수입니다.",a);
        }
        else if((a>=0)&&(a%2==1)){
            System.out.printf("입력값 : [%d]은(는) 홀수입니다.",a);
        }
        
        else{
            System.out.println("자연수를 입력해주세요.");
        }
        sc.close();
    }
}