import java.util.Scanner;

public class J01_2차원배열선언_난수_열누적합 {
    public static void main(String[] args) {

        // 10 ~ 100미만의 정수인 난수를 생성
        //  배열 (열)값으로 저장 그리고 누적합 구하기
        //  난수 출력 행가 열
        int[][] arr; // 선언
        // 입력값을 행 수와 열 수
        int row=4; //화면입력받기 
        int col=4; //화면입력받기
        int cnt=0;
        arr = new int[row][col]; // 생성
 
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                cnt++;
                arr[i][j]=cnt; // 배열값 저징
            }
         

        }
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
        }

        // 배열이 arr[4][4] 정방형 배열     가로의 열의 개수가 일정한 배열
        // 배열이 arr[4][4] 비정방형 배열   가로의 열의 개수가 다른 배열 예) 1행에는 4열 2행에는 3열 5행에는 6열...

        Scanner sc = new Scanner(System.in);

        System.out.println("행의 개수를 입력하세요");
        row = sc.nextInt();
        System.out.println("열의 개수를 입력하세요");
        col = sc.nextInt();
        cnt=0;
        arr = new int[row][col]; // 생성
        // 열의 개수가 모두 같다 : 정방형 2차원 배열
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                cnt++;
                arr[i][j]=cnt; // 배열값 저징
            }
        }

        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                System.out.printf("%4d", arr[i][j]);
            }
            System.out.println();
        }




        sc.close();
    }
    
}
