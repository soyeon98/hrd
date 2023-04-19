/**
 * J01_클래스_멤버변수_멤버함수
 */
public class J01_클래스_멤버변수_멤버함수 {

    public static void main(String[] args) {
        
        // 외부 클래스 생성자를 생성한다.
        Person newPerson = new Person();

        // 생성자에 필드(속성) = 값을 저장
        newPerson.이름="박소연";
        newPerson.나이=26;
        newPerson.시력=1.0;
        newPerson.취미="놀기";
        newPerson.주소="파주";

        //멤버함수 호출 실행
        newPerson.show_method();

        // 외부 클래스 생성자를 생성한다.
        Person newPerson2 = new Person();

        // 생성자에 필드(속성) = 값을 저장
        newPerson2.이름="이아현";
        newPerson2.나이=26;
        newPerson2.시력=1.0;
        newPerson2.취미="박소연이랑 놀기";
        newPerson2.주소="일산";

        //멤버함수 호출 실행
        newPerson2.show_method();
    }
}