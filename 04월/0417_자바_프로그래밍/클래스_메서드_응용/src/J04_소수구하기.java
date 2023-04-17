import java.util.Scanner;

/**
 * J04_소수구하기
 */
public class J04_소수구하기 {

    public static Boolean prime(int n) {
        boolean a= true;
        if(n==1){
            a=false;
        }
        for(int i=2;i<n;i++){
            if(n%i==0){
                a=false;
            }
       
        }
        return a;
    }
    public static void main(String[] args) {
        // 2 3 5 7 11 13 17
        //리턴 값이 있는 메서드
        // 리턴값은 Boolean
        Scanner sc = new Scanner(System.in);
        System.out.println("정수를 입력하세요");
        int n = 0;
        n= sc.nextInt();
        for(int i=1;i<=n;i++){
            if(prime(i)==true){
                System.out.print(i+" ");
            }
        }
    
        sc.close();
    }
}