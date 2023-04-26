/*
    클래스(한 페이지)내에 생성
    super
    : 자식 클래스를 만들면 자동으로 부모 클래스에 생성자도 호출되어 사용된다.
    자식클래스에서 부모생성자 호출하기
    자식클래스(매개변수...){
        super(매개값...)
    }
    ※ super는 매개변수 값의 개수와 타입이 일치하는 [부모 생성자]를 호출한다. !!!생성자를 호출!!!
    클래스는 다중 상속을 지원하지 않는다.
    다중상속은 차후에 공부하는 인터페이스에서 사용가능하다.
 */


public class J02_Super {
    public static void main(String[] args) {
      
        System.out.println();
        System.out.println("==========================");
        System.out.println();
        Actor newActor2 = new Actor("아바타");
        newActor2.showData();
        System.out.println();
        System.out.println("==========================");
        Actor newActor3 = new Actor("dd",34,"ss");
        newActor3.showData();

    }
    
}

// 사람을 주제로 설정하고 상속하고 super() 호출한다.
class Human{
    String name;
    int age;

    Human(){
        System.out.println("부모클래스 위치의 일반인입니다.");
    }
    public Human(String name,int age){
        this.name=name;
        this.age=age;
        System.out.println("부모클래스 위치의 일반인 이름 : "+this.name);
        System.out.println("부모클래스 위치의 일반인 나이 : "+this.age);
    }
}
class Actor extends Human{
    private String movie;

    public Actor(){
        super(); // - 부모의 기본 생성자를 호출하는 코드 - 첫 줄에서만 사용 가능 - 생략되어도 자동적으로 포함하고 있다(기본생성자는)
        System.out.println("나는 영화배우입니다.");
    }

    public Actor(String movie){
        this.movie=movie;
    }

    public Actor(String name,int age,String movie){
        super(name,age); // 부모 생성자(매개변수사용) 호출 super()
        this.movie=movie;
        System.out.println();
    }

    public void showData(){
        System.out.println("부모클래스 멤버변수 2개 자식 클래스 멤버변수 1개 출력");
        System.out.println("부모클래스 이름 : "+this.name);
        System.out.println("부모클래스 나이 : "+this.age);
        System.out.println("자식클래스 영화출연작 : "+this.movie);
    }
}
