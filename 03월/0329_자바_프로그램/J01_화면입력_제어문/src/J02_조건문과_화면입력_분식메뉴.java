
import java.util.Scanner;

public class J02_조건문과_화면입력_분식메뉴 {
    public static void main(String[] args) {
        // 1.화면입력 Scanner 클래스 가져오기
        // 2. 생성자 sc 생성
        // 3. 간식 메뉴를 만든다 1. 메뉴1 2. 메뉴2 3. 메뉴3
        // 4. 조건문 구분을 만든다.
        // 5. 간식 메뉴 번호(정수형)를 입력받아 선택한다.
        // 6. 해당하는 조건문 수현

        Scanner sc = new Scanner(System.in);

        //메뉴 선택
        System.out.println("간식 메뉴 번호 선택 : ");
        System.out.println("1.떡볶이 2.핫도그 3.타코야키");
        // 화면입력
        int menu = sc.nextInt();

        //조건문 : if(){} esle{}
        if(menu == 1){
            System.out.println("떡볶이");
        }
       else if(menu == 2){
            System.out.println("핫도그");
        }
       else if(menu == 3){
            System.out.println("타코야키");
        }
        else{
            System.out.println("메뉴에 없는 번호입니다. 다시 확인해 주세요.");
        }
        
    }
}
