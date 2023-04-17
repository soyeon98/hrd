
import java.util.Scanner;
public class J05_입력화면_조건문_할인율 {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        
        // 문제)
        // 정가를 입력받아서 할인율 정하기
        // 조건표
        // 정가 500,000원 이상 할인율 20%
        // 정가 100,000원 이상 할인율 10%
        // 정가 50,000원 이상 할인율 5%
        // 정가 10,000원 이상 할인율 1%
        // 정가에 할인율 적용해서 판매가를 구하시오

        // 1.input
        System.out.println("구매하신 물품의 정가를 입력해주세요");
        long price1 = sc.nextLong();
        double rate =0.0;

        // 3.process
        if(price1>=500000){
    
           rate= 0.2;
        }
        else if(price1>=100000){
         
            rate= 0.1;
        }
        else if(price1>=50000){
           
            rate= 0.05;
        }
        else if(price1>=10000){
          
            rate= 0.1;
        }
        else{
            rate= 1;
        }


        // 2.output
        System.out.printf("할인율 %f가 적용된 물품의 판매가는 %d 원 입니다",rate,(price1*rate));



    }
}