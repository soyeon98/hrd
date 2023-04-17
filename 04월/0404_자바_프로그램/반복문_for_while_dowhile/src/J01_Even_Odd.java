/**
 * J01_Even_Odd
 */

public class J01_Even_Odd {

    public static void main(String[] args) {
        //문제1
        // 1~100 짝수와 홀수의 합계 출력
        // 반복문은 for(){} 사용
        
        
        // 1. 입력 : 변수 자료형 지정
        int i = 1; // 1~100 변수
        int eSum = 0; //  누적합의 변수는 반드시 초기값을 지정해야한다.` 
        int oSum = 0; //  누적합의 변수는 반드시 초기값을 지정해야한다.`

        // 3. 처리 : 홀짝 

        for(i=1; i<=100; i++){
            if(i%2==0){
                eSum += i; // eSum = eSum + i
            }
            else{
                oSum += i;
            }
        }

        // 2. 출력 : 구문

        System.out.printf("1부터 100까지의 숫자 중 짝수들의 합은 %d이고 홀수들의 합은 %d입니다.",eSum,oSum);
    }
}