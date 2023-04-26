/**
     J01_Extends
    부모클래스 == 상위클래스== 수퍼클래스
    자식클래스 == 하위클래스 == 서브클래스
  
 */
public class J01_Extends {

    public static void main(String[] args) {
        IcecreanWaffle IceWaffle = new IcecreanWaffle();
        System.out.println("=======================");
        System.out.println();
      
        IceWaffle.msgShow();

        IceWaffle.setData("바닐라와플",5000);
        IceWaffle.getDataChild();
        IceWaffle.setData("아이스크림와플",7000,"초코시럽");
        IceWaffle.getDataChild();
        System.out.println();
        System.out.println("=======================");
    }
}

//부모클래스와 자식 클래스를 만들어서 성속의 기본 개념을 이해하자
// 부모클래스
class Waffle{
    String name;
    int price;

    Waffle(){
        System.out.println("부모클래스의 기본 생성자입니다.");
    }

    void setData(String name,int price){
        this.name=name;
        this.price=price;
    }

    // 출력

    void getData(){
        System.out.println("부모클래스 와플 이름 : "+this.name);
        System.out.println("부모클래스 와플 가격 : "+this.price);
    }

}
// 자식클래스
class IcecreanWaffle extends Waffle{
    String source;

    void msgShow(){
        System.out.println("자식클래스입니다.");
    }

    void setData(String name,int price, String source){
        setData(name, price); //부모클래스의 멤버변수 값 변경
        this.source=source;
    }

    void getDataChild(){
        getData(); // 부모클래스 name, price 가져와서 보여준다.
        System.out.println("자식 클래스 와플 소스 : "+this.source);
    }

}