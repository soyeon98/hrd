
import java.util.Scanner;
public class J02_입력화면_조건문_자연수합 {
    public static void main(String[] args) {

        //문제 2
        // 자연수 2개의 입력값 받아서
        // 합과 
        // 두 수의 차를 구하시오

        Scanner sc = new Scanner(System.in);
        System.out.println("두 자연수를 입력하세요");
        System.out.println("첫번째 자연수 입력");
        int num1 = sc.nextInt();
        System.out.println("두번째 자연수 입력");
        int num2 = sc.nextInt();
        int sum = num1+num2;
        int sub = num1-num2;
        System.out.printf("두 수의 합은 %d + %d = %d입니다.\n",num1,num2,sum);
        if(sub>=0){
            System.out.printf("두 수의 차는 %d - %d = %d입니다.\n",num1,num2,sub);
        }
        else{
            System.out.printf("두 수의 차는 %d - %d = %d입니다.\n",num2,num1,(sub*-1));
        }


        sc.close();

    }
}
