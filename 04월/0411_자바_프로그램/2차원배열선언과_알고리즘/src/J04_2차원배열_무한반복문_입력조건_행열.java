import java.util.Scanner;

public class J04_2차원배열_무한반복문_입력조건_행열 {
    public static void main(String[] args) {
        // 1. 2차원 배열 선언하기
        // 2. 행수(1~10) 열수(1~10) 입력받아서 2차원배열 생성하기
        // 3. 행수와 열수 제한조건 맞으면 다음으로 넘어가서 실행
        // 4. 아니면 계속 행수 입력 요구 열수 입력 요구

        // 알고리즘 : 무한반복문(while(true)), 조건문(if(줄수 < 1||줄수 > 10){})
        // 조건 모두 만족하면 배열 생성 
        // 배열에 난수*26+65 영문 대문자 입력
        // 문자(char)로 배열 출력 완료

        // 1.입력설계
        int[][] arr;

        int row=0;
        int col=0;
        Scanner sc = new Scanner(System.in);

        System.out.println("1에서 10까지의 수 중에서 행의 개수를 입력하세요");
        while(true){
            row = sc.nextInt();
            if(row<1 || row>10){
                System.out.println("1에서 10까지의 수를 입력하세요");

            }
            else{
                //열입력 조건
                System.out.println("1에서 10까지의 수 중에서 열의 개수를 입력하세요");
                while(true){                
                    col = sc.nextInt();
                    if(col<1 || col>10){
                        System.out.println("1에서 10까지의 수를 입력하세요");
                    }
                    else{
                        arr = new int[row][col];
                        for(int i=0; i<arr.length;i++){
                            for(int j=0; j<arr[i].length;j++){
                                arr[i][j] = (int)(Math.random()*26+65);
                                System.out.printf("%3s",(char)arr[i][j]);
                            }
                            System.out.println();
    
                        }
                        break; // 열입력조건 만족 시 소멸
                    }
                }
                break; // 행입력조건 만족 시 소멸 열입력으로 넘어감             
            }
        }

        //2. 출력설계


    }
    
}
