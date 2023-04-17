public class C01_Data {

    public static void main(String[] args) {
        // 자료형 => 데이터 타입(Data Type)
        // int => 정수형
        // string => 문자형
        // 100% 타입설정
        // 자바 기본타입 : int, long, float, double, char, string, boolean, byte, short 

        // 1. 정수 자료형
        // 예) 타입 설정 변수이름 =(대입연산자) 0(변수 값)
        // 타입늬 정의는 변수에 들어오는(대입하는) 변수값의 타입을 설정하는 것
        // 예) int cnt = 0; cnt  변수에 정수형값을 대입한다
        // 예) long cnt2 = 0; cnt  변수에 정수형값을 대입한다

        // 2. 실수 자료형
        // 예) float num = 33.333; num  변수에 실수형값을 대입한다
        // 예) double num2 = 33.465443742; num  변수에 실수형값을 대입한다

        // 3.문자자료형
        // '' 싱글 쿼트 (따옴표)사용 
        // 예) char grade='A';

        // 4.문자열 자료형
        // "" 더블 쿼트 (따옴표) 사용 
        // 예) string str='I love you';

        // 5.논리 자료형
        // 참 거짓 데이터를 저장하는 자료형
        // 예) boolean isGender1=false;
        // 예) boolean isGender2=true;

        // 1.정수 자료형
        int numInt =30;
        long numLong = 30000000;

        System.out.println("int형 "+ numInt);
        System.out.println("long형 "+ numLong);

        //2.실수 자료형
        double numDouble = 1.41359244;
        float numFloat = 3.14f; //  float형은 반드시 숫자 뒤에 f를 붙여서 표기한다. float형은 double형보다 작은 실수 표현

        System.out.println("double형 "+ numDouble);
        System.out.println("float형 "+ numFloat);

        // 3.문자자료형
        char a = 'A';
        char b = '대';
        char c = 65; // ASKI CODE 값 : A=65, B=66,...
        char d = 97; // ASKI CODE 값 : a=97, b=98,...
        char e = 98; 

        System.out.println("chara "+a);
        System.out.println("charb "+b);
        System.out.println("charc "+c);
        System.out.println("chard "+d);
        System.out.println("chare "+e);

        
        
    }
}
