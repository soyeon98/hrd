import java.util.Scanner;

/**
 * J03_약수구하기
 */
public class J03_약수구하기 {

  

    public static void method1(int num) {
        for(int i=1;i<=num;i++){
            if(num%i==0){
                System.out.printf("%3d ",i);
            }

        }
    }

    
    public static void main(String[] args) {
        // 화면 입력받아서 약수를 구하시오
        // 단 메서드호출 실행
        // return문 없는 메서드
        Scanner sc = new Scanner(System.in);
        int num;
        System.out.println("정수를 입력하세요");
        num = sc.nextInt();
        System.out.println();
        method1(num);







        sc.close();
    }
}