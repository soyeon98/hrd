public class J03_반복문_WHILE {
    public static void main(String[] args) {
        // 1 ~ 10 까지 출력하는  반복문
        // 1 ~ 10 까지 수의 누적합 출력하는  반복문
        // while(){} 사용 구현

        // 1.입력
        int i=0;
        int sum=0;

        // 3. 처리
        while(i<10){
            i++;
            sum+=i;
            System.out.println("1부터 10까지 카운트 "+i);
        }


        // 2.출력
        System.err.println("");
        System.out.printf("1부터 10까지의 합은 %d입니다.",sum);
    }
    
}
