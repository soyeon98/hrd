/**
 * J01_화면입출력_반복문
 */

 import java.util.Scanner;

public class J01_화면입출력_반복문 {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        int s=0;
        int e=0;
        int sum=0;

        //1 input
        System.out.println("시작값 입력 :");
        s =sc.nextInt();
        System.out.println("종료값 입력 :");
        e=sc.nextInt();

        //3. process
        for(int i=s; i<=e; i++){
            // sum = sum +1;
            sum += i;
        }



        //2.output
        // System.out.printf("시작값 : %d 종료값 : %d 누적값 : %d 입니다.",s,e,sum);
        System.out.println(String.format("시작값 : %d 종료값 : %d 누적값 : %d 입니다.",s,e,sum));

        //4의 배수의 합
        sum =0; // 누적변수는 초기화 해줘야함
        for(int i=s; i<=e; i++){ 
            if(i%4==0){
                sum += i;
            }
           
        }

        System.out.printf("시작값 : %d 종료값 : %d 4의 배수의 누적값 : %d 입니다.",s,e,sum);





        sc.close();

    }
}