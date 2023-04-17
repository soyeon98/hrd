import java.util.Scanner;
public class J02_반복문_for_팩토리얼구하기_누승 {
    public static void main(String[] args) {

        // 5팩토리얼 구하기 5! = 5*4*3*2*1 = 120
        // 1. input
        int num=5;
        int fac = 1;

        // 화면 입력받아서 팩토리얼 구하기
        Scanner sc = new Scanner(System.in);
        System.out.println("팩토리얼값 구할 정수 입력");
        num= sc.nextInt();
        // 3. process
        for(int i=num;i>0;i--){
            System.out.print(i);
            if(i!=1){
                System.out.print(" * ");
            }
            fac*=i;
        }


        // 2. output
        System.out.println("");
        System.out.printf("%d!의 값은 %d입니다",num,fac);
        System.out.println("");

        sc.close();
    }
}
