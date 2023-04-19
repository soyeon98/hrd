public class J01_객체_응용_배열 {
    public static void main(String[] args) {
        // 단일 객체 사용
        // 문제1
        // 와플(waffle) 객체 만들고 생성자 생성, 
        // 기본 생성자와 멤버변수 기본값 기본고객 0원  
        // 매개변수는 2개 멤버변수는 구분(단골고객, 일반고객, 우수고객), 가격(5000,1000,15000)
        waffle w1 = new waffle("단골고객",5000);
        w1.showMethod();
        waffle w2 = new waffle("일반고객",10000,3);
        w2.showMethod();
        waffle w3 = new waffle("우수고객",15000,1);
        w3.showMethod();

        System.out.println();

        // 객체 배열 선언 사용 그리고 호출하기
        waffle[] waf = new waffle[6];

        waf[0]=new waffle();
        waf[1]=new waffle("일반고객");
        waf[2]=new waffle("우수고객",15000,6);
        waf[3]=new waffle("단골고객",10000);
        waf[4]=new waffle("일반고객",5000);
        waf[5]=new waffle("단골고객",5000,2);

        // 멤버함수 호출 실행
        System.out.println("==========객체배열처리=============");
        for(int i=0;i<waf.length;i++){
            waf[i].showMethod();
        }
    }
}


// 클래스
class waffle{
    String 구분="기본고객";
    int 가격=0;
    int 개수=0;
    waffle(){

    }
    waffle(String 구분){
        this.구분=구분;
    }
    waffle(String client, int price){
        this.구분=client;
        this.가격=price;
        this.개수=1;
    }
    waffle(String client, int price,int cnt){
        this.구분=client;
        this.가격=price;
        this.개수=cnt;
    }
    void showMethod(){
        System.out.println();
        System.out.println(구분+"님 주문하신 와플 "+가격+"원 입니다. "+this.개수+"개");
      
    }
}