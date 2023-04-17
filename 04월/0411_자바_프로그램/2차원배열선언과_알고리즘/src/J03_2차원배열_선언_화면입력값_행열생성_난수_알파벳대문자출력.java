import java.util.Scanner;

public class J03_2차원배열_선언_화면입력값_행열생성_난수_알파벳대문자출력 {
    public static void main(String[] args) {
        // 정방형 2차원 배열 화면 입력 행개수 열개수 입력받기
        // 행열 값은 난수 *65~91 을 이용 영문 대문자 출력
        // 아스키 코드 26 *난수 + 65 (65~91) 영문 대문자
        // 배열값은 난수 *26 + 65 

        Scanner sc = new Scanner(System.in);
        int row =0;
        int col =0;
        
        System.out.println("행의 개수를 입력하세요");
        row = sc.nextInt();
        System.out.println("열의 개수를 입력하세요");
        col = sc.nextInt();
        char[][] arr = new char[row][col];

        // 처리
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                arr[i][j] = (char)(Math.random()*26+65);
           
            }
        }

        // 출력
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                System.out.printf("%3s ",arr[i][j]);
            }
        System.out.println();
        }




        sc.close();
    }
    
}
