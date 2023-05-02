/**
   J01_예외처리
    # 예외처리
    사용자가 잘못된 코딩으로 인해 프로그램 실행 중에 
    예기치 못 한 오류발생 상황.
    이러한 오류를 처리하기 위한 방법
    에러(Error)
        : 자바 가상머신에서 발생하는 오류 => 사용자가 해결 불가
        : 문법을 잘못 작성한 코드는 컴파일러에 의해 컴파일 에러로 갈라진다

    예외처리
    예외가 발생하더라도 프로그램이 갑작스럽게 종료되지 않고,
    게속 실행시킬 수 있도록 에외를 처리해 줄 수 있다.    

    try{
        오류 없는 영역(잠정적으로 오류가 가능성 있는 코드)
    }
    catch(예외처리클래스명 e){
        오류 발생 영역, 오류 처리
    }
    //////////////////////////////
    try{
        오류 없는 영역(잠정적으로 오류가 가능성 있는 코드)
    }
    catch(예외처리클래스명 e){
        오류 발생 영역, 오류 처리
    }
    finally{
        무조건 실행
    }

    예외처리클래스명
        : 대표적인 클래스 => Exception
        Exception : 모든 예외를 잡아주는 클래스
 */
public class J01_예외처리 {

    public static void main(String[] args) {
        double a = 5;
        String b= "abd";
        double c;

        try{
            c= a/b;
            System.out.println(c+" = 5 / 65");
        }
        catch(Exception e){
            System.out.println();
            System.out.println("계산 오류 발생!!!");
            System.out.println();
        }
        

       
    }
}