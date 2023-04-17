
import java.util.Scanner; 

public class J01_화면입력 {
    public static void main(String[] args) {
              
        // 입력을 받을 때 외부클래스인 Scanner를 임포트해서
        // 생성자를 생성하여 사용한다.
        Scanner sc = new Scanner(System.in);

        // 1.문자열 입력
        // 문자열은 문단을 입력받는다. 엔터누르기 전까지 - nextLine
            System.out.println("문자열을 입력하세요.");
            String str = sc.nextLine();
            System.out.println("입력된 문자 = "+ str);

        // 2. 단어 입력
        // 단어(word)는 공백전까지 입력받는다. - next
            System.out.println("단어를 입력 : ");
            String word =sc.next();
            System.out.println("입력된 단어 : "+ word);

        // 3. 정수 입력    
            System.out.println("정수를 입력 : ");
            int num = sc.nextInt();
            System.out.println("입력된 정수 : "+num);

        // 4. 실수 입력    
            System.out.println("실수를 입력 : ");
            double num2 = sc.nextDouble();
            System.out.println("입력된 실수 : "+num2);

        // 5. 문자(1글자) 입력 : 
        // next().charAt(index Number); 첫번째 글자 0, 두번째 글자 1...
        System.out.println("문자를 입력 : ");   
        char ch0 = sc.next().charAt(0); //첫번째
        // char ch1 = sc.next().charAt(1); //두번째
        // char ch2 = sc.next().charAt(2); //세번째
        System.out.println("입력된 글자는(첫번째) = " + ch0);
        // System.out.println("입력된 글자는(두번째) = " + ch1);
        // System.out.println("입력된 글자는(세번째) = " + ch2);





        sc.close();

    }
}
