/**
 * J01_입력화면_조건문_switch
 * 제한적
 * 범위 조건에는 부족 그래서 if문 많이 씀
 * 압력값을 받아서 선택된메뉴에 따라 조건이 결정
 */
import java.util.Scanner;
import java.text.DecimalFormat;

public class J01_입력화면_조건문_switch_연습1 {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // 주문 시 수량 입력 안하면 기본 1인분
        // 아래의 지시 사항대로 배열하시오

        String a = "떡볶이";
        int soo = 1;
        String menu ="1"; 
        int price = 8000;
        int pan=soo*price; //초기값

        // input
        // 1-1. 입력화면 설계 - 메뉴 : 1. 떡복이 2. 핫도그 3. 붕어빵
        // 1-2. 입력화면 설계 - 수량입력 : 1 -초기값
        System.out.println("1. 떡볶이 2. 핫도그 3. 붕어빵 중 원하는 메뉴를 선택해주세요");
        menu=sc.nextLine();
        System.out.println("");
        System.out.println("선택하신 메뉴의 수량을 입력해주세요");
        soo = sc.nextInt();
        
        // process
        // 2-1. 가격 조건표
        //  떡볶이 : 8,000원
        //  핫도그 : 2,800원
        //  붕어빵 : 2,000원
        
        // 2-1. 조건문 스위치 케이스 if(){} esle if(){} else{}
        // 2-2. 정가 * 수량 = 판매가
        if(menu=="1" || menu=="떡볶이"){
            price=8000;
            a = "떡볶이";
            pan=soo*price;
        }
        else if(menu=="2"|| menu=="핫도그"){
            price=2800;
            a = "핫도그";
            pan=soo*price;
        }
        else if(menu=="3"|| menu=="붕어빵"){
            price=2000;
            a = "붕어빵";
            pan=soo*price;
        }
        else{
            price=0;
            a = "없는 메뉴";
            pan=soo*price;
        }
         
        // output
        // 3-1. 출력 설계 : ~를 선택했습니다. 잠시만 기다려 주세요.
        // 3-2. 출력표시형식 : 메뉴, 수량, 정가, 판매가격
        DecimalFormat df = new DecimalFormat("#,##0");
        System.out.printf("%s을(를) %d개 선택하셔서 총 가격은 %s원 입니다.",a,soo,df.format(pan));

        sc.close();


    }
}