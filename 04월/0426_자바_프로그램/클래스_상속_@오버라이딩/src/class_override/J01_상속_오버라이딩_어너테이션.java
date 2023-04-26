package class_override;
/*
    Binary(이진파일) 
    J01_상속_@오버라이딩_어너테이션
    # 오버라이딩(Overriding)
    @어너테이션 : 메서드 바로 윗줄에 어너테이션 표기 @사인(기호) 사용
    부모클래스에서 상속받은 같은 이름의 메소드를 변경(재정의)하는 것
    메서드 덮어쓰기(오버라이트 Overwrite 수정상태)

    부모클래스의 메서드와 이름, 매개변수, 리턴타입이 같아야한다.
    부모클래스의 메서드보다 접근제어자의 범위가 좁아질수 없다.

    # 오버로딩 & 오버라이딩
        오버로딩(Overloading): 이름은 같고 매개변수가 다른 새로운 메서드를 정의한다.
        오버라이딩(Overriding): 상속받은 같은 이름의 메서드를 변경(재정의)한다.
 */
public class J01_상속_오버라이딩_어너테이션 {

    public static void main(String[] args) {
        Musician mus = new Musician();
        mus.showJob();
        mus.work();

        Pianist pia = new Pianist();
        pia.showJob(); // 오버라이딩한 메서드 호출
        pia.showJob("유명한 곡"); // 오버로딩한 메서드 호출

        // => 부모클래스의 덮어쓰기된 super.메서드 호출
        pia.showJob_super();

        Singer sing = new Singer();
        sing.showJob(); 
        sing.work();
        sing.showJob("심야영화");



    }
}

// 부모클래스
class Musician{
    public void showJob(){
        System.out.println();
        System.out.println("부모클래스위치 직업은 뮤지션입니다.");
        System.out.println();
    }

    void work(){ // 기본접근제한자 default
        System.out.println();
        System.out.println("부모클래스위치 무대에서 공연합니다.");
        System.out.println();
    }
}
// 자식클래스
class Pianist extends Musician{
    public void showJob(){
        System.out.println();
        System.out.println("자식클래스위치 나의 직업은 피아니스트입니다.");
        System.out.println();
    }
    public void showJob(String music){
        System.out.println();
        System.out.println("자식클래스위치 저는 "+ music +"을 연주하는 피아니스트입니다.");
        System.out.println();
    }
    // 부모클래스의 같은 이름의 메서드 호출 실행
    public void showJob_super(){
        super.showJob(); // 덮어쓰기된 부모메서드 사용
    }

    // 부모클래스의 메서드 중 work() 메서드를 재정의 하시오
    // 같은 패키지 내에서(protected) 사용하도록 재정의하시오
    // private void work(){} 오류발생 - 오버라이딩한 메서드의 접근제한자는 부모클래스의 메서드보다 좁아질 수 없다 

     void work(){
        System.out.println();
        System.out.println("자식클래스위치 무대에서 공연합니다.");
        System.out.println();
    }
}

class Singer extends Musician{

    // 상속받은 멤버 중 메서드가 같은 이름을 만들어서 실행한다
    @Override
    public void showJob(){
        // 부모클래스의 메서드를 호출하여 그대로 실행
        super.showJob();
    }
    // 오버로딩
    public void showJob(String song){
        System.out.println("저는 "+song+"를 부른 적이 있습니다.");
        
    }
    // 부모클래스에 있는 메서드이므로 상위메서드와 같은 이름 같은 매개변수이다 -오버라이딩
    @Override
    void work(){
        super.work(); // 부모클래스의 메서드 실행하고 아래 내용 함께 출력
        System.out.println("오버라이딩한 메서드 내용 호출, 실행해보았습니다.");
    }
}