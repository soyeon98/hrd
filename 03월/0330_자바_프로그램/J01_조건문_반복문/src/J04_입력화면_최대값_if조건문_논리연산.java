
import java.util.Scanner;
public class J04_입력화면_최대값_if조건문_논리연산 {
    public static void main(String[] args) {

        // 자연수 3개를 입력받아서
        // 최대값(Max)을 구하시오
        // 최소값(Min)을 구하시오
        // 입력값과 출력값을 출력하세요 -printf,println 사용

        //1.input
        Scanner sc = new Scanner(System.in);

        int max = 0;
        int min = 0;

        System.out.println("세 개의 자연수를 입력하세요");
        System.out.println("첫번째 자연수 입력");
        int n1 = sc.nextInt();
        System.out.println("두번째 자연수 입력");
        int n2 = sc.nextInt();
        System.out.println("세번째 자연수 입력");
        int n3 = sc.nextInt();    

        // 2.process
         // 2-1최대값

        if(n1>n2&&n1>n3){
            max=n1;
        }
        else if(n2>n3){
            max=n2;
        }
        else{
            max=n3;
        }


        // 2-2 최소값

        if(n1<n2&&n1<n3){
            min=n1;
        }
        else if(n2<n3){
            min=n2;
        }
        else{
            min=n3;
        }


        //3.output
        System.out.printf("자연수1 : %d, 자연수2 : %d, 자연수3 : %d => 최대값 : %d",n1,n2,n3,max);
        System.out.println("");
        System.out.printf("자연수1 : %d, 자연수2 : %d, 자연수3 : %d => 최소값 : %d",n1,n2,n3,min);






            sc.close();
    }
}
