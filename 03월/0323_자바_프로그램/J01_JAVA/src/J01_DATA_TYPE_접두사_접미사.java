/**
 * J01_DATA_TYPE_접두사_접미사
 */
public class J01_DATA_TYPE_접두사_접미사 {

    public static void main(String[] args) {

        // 변수의 타입(기본,참조)

        // 기본형 타입(Primitive Type) :실제 값 지정(스레드)
        //  Byte별로 구분 1Byte,2Byte,4Byte,8Byte
        //  논리형, 문자형, 정수형, 실수형(double=> 부동소숫점 표현식 : 수치의 정밀도가 높다)
        
        // 참조형 타입(Reference Type): 기본형을 제외한 나머지
        //  객체의 주소를 지정
        //  String, System, 객체, 배열, 나열형


        // 부호의 유무의 분류 => 자료표현 범위가 달라진다.
        // -2^(n-1) ~ 2^(n-1)-1 
        // n-1 => 부호비트로 1비트를 제외한 것
        // 부호가 있는 자료형 : byte, short, int, long, float, double   
        // int(Signed) => 4Byte => 32bit => -2^(32-1) ~ 2^(32-1)-1 => -2,147,483,648 ~ 2,147,483,647 (부호(1bit)와 절대값(31bit))   
        // 양수만 사용(Unsigned) int => 4Byte => 32bit => 2^(32)-1 =>  4,294,967,295(최대값)  0 ~ 4,294,967,295(범위)   

        // 2^(n)-1 
        // -1 => 모든 수는 기본 0부터 시작하기 때문 - 10진수(10-1)는 0~9로 최대수 9 
        // 부호가 없는 자료형 : boolean, char
        // boolean => 1Byte => 8bit => 2^(8)-1 => 256-1 => 255(최대수) 0~255(256가지)
        // char => 2Byte => 16bit => 2^(16)-1 => 65536 -1 => 65535(최대수) 0~65535(65536가지) 

        // 자료형 변수 이름 = 변수값(리터럴) <= 자료형에 맞는 리터럴값 지정
        // int cnt = 0;
        // 변수 이름 = 명명규칙 => 네이밍규칙
        // 클래스 => 첫 글자-대문자,영문  중간 연결문자-대문자 (파스칼케이스)
        // 변수, 메서드 => 첫글자-소문자 중간 연결문자-대문자 (카멜케이스)
        // _와 $특수문자 사용가능

        // 상수I => 모두 대문자로 사용 단어와 단어사이 연결되는 단어는 언더바 사용 (팟홀케이스)
        // final double PI =3.14; ROOT_2= 1.414213

        // 리터럴 => 변수에 대입되는 값
        int cnt = 0;
        char ch1 = 'A'; //반드시 싱글 쿼트 사용
        // char ch1 = 'AB'; // 2글자는 오류
        char ch2 =65; // ASKICODE 값 65(A)~
        char ch3 ='\u0041'; // UNICODE 값 \u0041(A)~
        char ch4 ='\t'; // tab 일정한 사이 간격을 띄운다
        short sh1 = 17536;
        int bi = 0b10101; //2진수 zero b => bibary
        int oct = 0101001; //octal 8진수
        int hex = 0x01001; // hexa 16진수
        long lon = 65565635879L; //  숫자 맨뒤에 영문 L 표기(대소문자 상관 x) l표기 필수
        float flo = 1.46455f; // 숫자 맨 뒤에 f 표기 (대소문자 상관 x) f표기 필수
        double dou = 3.14d; // 숫자 맨 뒤에 d 표기 (대소문자 상관 x) d는 생략 가능

        System.out.println("cnt "+cnt);
        System.out.println("ch1 "+ch1);
        System.out.println("ch2 "+ch2);
        System.out.println("ch3 "+ch3);
        System.out.println("ch4 "+ch4);
        System.out.println("sh1 "+sh1);
        System.out.println("bi "+bi);
        System.out.println("oct "+oct);
        System.out.println("hex "+hex);
        System.out.println("lon "+lon);
        System.out.println("flo "+flo);
        System.out.println("dou "+dou);
 
    }   
}