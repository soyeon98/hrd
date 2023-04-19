public class J02_클래스_오버로딩 {
    public static void main(String[] args) {
        
        // 클래스와 오버로딩
        /*
            오버로딩 조건
             1. 메서드 이름이 같아야한다
             2. 매개변수의 개수 혹은 타입이 적어도 하나 이상 달라야한다
        */
        // 클래스 생성자를 생성하여 하나의 클래스 내에 같은 이름의 메서드를 오버로딩 구현한다.

        // 선택한 와플에 따른 주문내역 나타낸다
        Waffle newWaffle = new Waffle();
        System.out.println();
        // 소스가 없는 와플 주문 : 매개변수 X
        String 주문내역 = newWaffle.name();
        System.out.println(주문내역+" 주문되셨습니다");
        System.out.println();
        // 소스가 있는 와플 주문 : 매개변수 0
        String 주문내역2 = newWaffle.name("사과잼");
        System.out.println(주문내역2+" 주문되셨습니다");
        System.out.println();
        // 소스가 2개 있는 와플 주문 : 매개변수 0
        String 주문내역3 = newWaffle.name("딸기","생크림");
        System.out.println(주문내역3+" 주문되셨습니다");
        System.out.println();
        // 소스가 2개 있는 와플 주문 : 매개변수 0
        String 주문내역4 = newWaffle.name("초코","바나나",2);
        System.out.println(주문내역4+" 주문되셨습니다");


    } //메인 메서드 영역


}// 메인클래스


