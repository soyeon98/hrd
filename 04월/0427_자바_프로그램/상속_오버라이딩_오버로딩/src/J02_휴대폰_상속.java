/*
    부모클래스 : Phone
    필드: 이름, 통신사, 가격
    자식클래스 : Phone1
    필드: 서비스시간
    자식클래스 : Phone2
    필드: 서비스시간
 */
public class J02_휴대폰_상속 {
    public static void main(String[] args) {
        Phone1 p1 = new Phone1();
        p1.setData("아이폰","SKT", 1000000, 120);
        p1.showPhone1();
        Phone2 p2 = new Phone2();
        p2.setData("안드로이드폰","KT", 800000, 100);
        p2.showPhone2();
    }
}

class Phone{
    String name;
    String telecom;
    int price;
    public void setData(String name,String telecom,int price){
        this.name=name;
        this.telecom=telecom;
        this.price=price;
    }
    public void showData(){
        System.out.println("이름 : "+name);
        System.out.println("통신사 : "+telecom);
        System.out.println("가격 : "+price);
    }
}

class Phone1 extends Phone{
    int serviceTime;
    public void setData(String name,String telecom,int price,int serviceTime){
        super.setData(name,telecom,price);
        this.serviceTime=serviceTime;
    }
    public void showPhone1(){
        super.showData();
        System.out.println("서비스 시간 : "+serviceTime);
        System.out.println();
    }
}
class Phone2 extends Phone{
    int serviceTime;
    public void setData(String name,String telecom,int price,int serviceTime){
        super.setData(name,telecom,price);
        this.serviceTime=serviceTime;
    }
    public void showPhone2(){
        super.showData();
        System.out.println("서비스 시간 : "+serviceTime);
        System.out.println();
    }
}