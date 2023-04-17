/**
 * J01_입력화면_조건문_switch
 * 제한적
 * 범위 조건에는 부족 그래서 if문 많이 씀
 * 압력값을 받아서 선택된메뉴에 따라 조건이 결정
 */
import java.util.Scanner;

public class J01_입력화면_조건문_if {

    public static void main(String[] args) {
        
        Scanner sc = new Scanner(System.in);

        // 주문 시 수량 입력 안하면 기본 1인분
        // 아래의 지시 사항대로 배열하시오

        int soo = 1;
        int menu =1; 
        int price = 8000;
        int pan=soo*price; //초기값
        String menuStr ="떡볶이";

        // input
        // 1-1. 입력화면 설계 - 메뉴 : 1. 떡복이 2. 핫도그 3. 붕어빵
        // 1-2. 입력화면 설계 - 수량입력 : 1 -초기값
        System.out.println("1. 떡복이 2. 핫도그 3. 붕어빵 중 원하는 메뉴의 번호를 선택해주세요");
        menu=sc.nextInt();
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
        if(menu==1){
            price=8000;
            pan=soo*price;
            menuStr ="떡볶이";
        }
        else if(menu==2){
            price=2800;
            pan=soo*price;
            menuStr ="핫도그";
        }
        else if(menu==3){
            price=2000;
            pan=soo*price;
            menuStr ="붕어빵";
        }
        else{
            menuStr = "주문한 메뉴는 없습니다";
            price=2000;
            soo=0;
            pan=soo*price;
        }

         
        // output
        // 3-1. 출력 설계 : ~를 선택했습니다. 잠시만 기다려 주세요.
        // 3-2. 출력표시형식 : 메뉴, 수량, 정가, 판매가격
        System.out.println();
        System.out.printf("선택한 메뉴는 %d번 %s 입니다",menu,menuStr);
        System.out.println();
        System.out.printf(" %s를 %d개 주문하셔서 총 %d원입니다",menuStr,soo,pan);
        System.out.println();
      
        sc.close();

    }
}