import java.util.Scanner;

public class J01_화폐단위구하기2 {
    public static void main(String[] args) {
        // 금액 187000
        // 5만원권
        // 1만원권
        // 5천원권
        // 1천원권
        // 문제) 위 금액을 각 지폐단위로 매수를 구하시오

        // 1.입력설계
        long price = 187000;
        long a =0;
        long b =0;
        long c =0;
        long d =0;

        Scanner sc = new Scanner(System.in);
        System.out.println("금액을 입력하세요");
        price = sc.nextLong();
        
        // 3.처리설계
        a = price / 50000;
        b = (price-(a*50000))/10000;
        c = (price-(a*50000)-(b*10000))/5000;
        d = (price-(a*50000)-(b*10000)-(c*5000))/1000;
        
        // 2.출력설계
        System.out.printf("%d원은 5만원권 %d매 1만원권 %d매 5천원권 %d매 1천원권 %d매 입니다",price,a,b,c,d);





        sc.close();
    }
    
}
