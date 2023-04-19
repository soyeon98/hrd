import java.util.Scanner;

public class J01__선택_사칙연산_메서드 {

    public static int addMethod(int num1, int num2) {
        return num1+num2;
    }
    public static int subMethod(int num1, int num2) {
        return num1-num2;
    }
    public static long mulMethod(int num1, int num2) {
        return num1*num2;
    }
    public static double divMethod(double num1, double num2) {
        return num1/num2;
    }
    public static void main(String[] args) {
        // 프로젝트 :4칙연산 메서드 구현 => 1.덧셈, 2.뺄셈, 3.곱셈, 4.나눗셈
        // 입력화면에서 : 1번 선택하면 덧셈 메서드로 이동 연산결과를 리턴값으로 받는다.
        // 선택 조건문은 switch(){}
        // 메서드 이름 : 1. addMethod 2. subMethod 3. mulMethod 4.divMethod
        // 리턴값 있는 메서드 제작
        Scanner sc = new Scanner(System.in); 
        int num1=0;
        int num2=0;
        int method =0;
        System.out.println("연산할 첫 번째 숫자를 입력하세요");
        num1 = sc.nextInt();
        System.out.println("연산할 두 번째 숫자를 입력하세요");
        num2 = sc.nextInt();
        System.out.println("1.덧셈, 2.뺄셈, 3.곱셈, 4.나눗셈 중 원하는 연산을 숫자로 고르세요");
        method = sc.nextInt();
        switch(method){
            case 1: System.out.println(num1+" + "+num2+" = "+addMethod(num1,num2));
                break;
            case 2:System.out.println(num1+" - "+num2+" = "+subMethod(num1,num2));
                break;
            case 3:System.out.println(num1+" × "+num2+" = "+mulMethod(num1,num2));
                break;
            case 4:System.out.println(num1+" ÷ "+num2+" = "+divMethod(num1,num2));
                break;
            default: System.out.println("1(덧셈),2(뺄셈),3(곱셈),4(나눗셈) 중 숫자로 입력하세요"); 
                break;
        }


        sc.close();

    }
}
