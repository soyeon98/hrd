/**
 * J02_출력하기
 */
public class J02_출력하기 {

    public static void main(String[] args) {

        System.out.println("");
        System.out.println("자바 출력문 입니다. 라인피드 줄바꿈");
        System.out.println("자바" + "JDK 프로그래밍"); //문자열 + 문자열 연결연산자

        System.out.println(30); //정수 출력
        System.out.println(255.5); //실수 출력

        System.out.println(150+130); //더하기
        System.out.println(12.98+52.62); //실수 더하기

        //사칙연산
        System.out.println(" 250 + 130 = "+ (250+130));
        System.out.println(" 250 * 130 = "+ (250*130));
        System.out.println(" 460 / 130 = "+ (460 / 130));
        System.out.println(" 250 - 130 = "+ (250-130));

        //줄바꿈 없는 프린트 출력 Escape New Line 사용
        System.out.print("문자열 안에 \n");
        System.out.print("줄바꿈 넣기 \n");
        System.out.print("새로운 줄 \n 에서 줄 바꿈");

        // %d 사용 숫자 출력
        System.out.printf("\n정수 : %d",3300); 
        System.out.printf("\n\n정수 : %d",3300); 

        // 줄바꿈 메서드 사용하기
        System.out.println("\n메서드를 이용 줄바꿈" + System.lineSeparator() + "다음줄 내용");
        System.out.println("" + System.lineSeparator() + "");
        System.out.println("" + System.lineSeparator() + "");
        System.out.println("" + System.lineSeparator() + "");

    }
}