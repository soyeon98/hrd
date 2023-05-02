import java.util.InputMismatchException;
import java.util.Scanner;

public class J03_예외처리두번째 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        // 예외처리
        try{
            int[] num = new int[2];
            System.out.println("정수1 입력 : ");
            num[0] = sc.nextInt(); // 배열 첫번째 값 입력

            System.out.println("정수2 입력 : ");
            num[1] = sc.nextInt(); // 배열 두번째 값 입력

            System.out.println("num[0]/num[1] = "+num[0]/num[1]);
        }
        catch(ArithmeticException e){ // 정수를 0으로 나눌 수 없다는 에러메시지
            System.err.println("ArithmeticException 정수를 0으로 나눌 수 없습니다.");
            e.printStackTrace(); // 에러발생 위치를 출력
            e.toString(); // 간단한 문장 출력 에러메시지 출력 안될 때도 많음
        }
        catch(InputMismatchException e){
            System.err.println("InputMismatchException : nextInt()로 정수가 아닌 타입(자료형)을 입력받을 수 없습니다.");
            e.printStackTrace(); // 에러발생 위치를 출력
            
        }
        catch(ArrayIndexOutOfBoundsException e){
            System.err.println("ArrayIndexOutOfBoundsException : 배열의 범위를 벗어난 접근입니다.");
            e.printStackTrace();
        }
        catch(NullPointerException e){
            System.err.println("NullPointerException : 객체가 참조하고자 하는 값이 없습니다.");
            e.printStackTrace();
        }
        finally{
            System.out.println("finally 여기는 예외와 관게없이 무조건 출력되는 내용입니다.");
            System.out.println("finally 여기는 예외와 관게없이 실행하고자 하는 것을 실행 합니다.");
        }


        try{
            int[] num = new int[2];
            System.out.println("정수1 입력 : ");
            num[0] = sc.nextInt(); // 배열 첫번째 값 입력

            System.out.println("정수2 입력 : ");
            num[1] = sc.nextInt(); // 배열 두번째 값 입력

            System.out.println("num[0]/num[1] = "+num[0]/num[1]);
        }
        catch(Exception e){ // 모든 오류
            System.err.println("오류발생");
            e.printStackTrace();
        }
    }
    
}
