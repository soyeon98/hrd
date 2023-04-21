/**
 * J01_클래스_객체_배열처리
 */
public class J01_클래스_객체_배열처리 {

    public static void main(String[] args) {

        // name  | telecom | service
        // 폰기종   통신사  서비스시간 
        // 객체 배열[]

        // 클래스(객체) 생성자 배열[3] 반복처리
        // 반복문 출력
        // 결과를 출력하시오
        // 매개변수 3개를 생성하고 처리하시오
        // 아이폰    LG     120
        // 갤럭시    KT     80
        // 모토로라  SKT    100
        Phone[] newphone = new  Phone[5];

        newphone[0] =new Phone();
        newphone[1] =new Phone("아이폰");
        newphone[2] =new Phone("갤럭시","LG");
        newphone[3] =new Phone("아이폰","SKT",100);
        newphone[4] =new Phone("모토로라","KT",80);
        for(int i=0;i<newphone.length;i++){
        
            newphone[i].showTelecom();
        }
        //////////////////////////////////////////////
        Phone[] newphone2 = new  Phone[3];

        newphone2[0] =new Phone("갤럭시","LG",120);
        newphone2[1] =new Phone("아이폰","SKT",100);
        newphone2[2] =new Phone("모토로라","KT",80);
        for(int i=0;i<newphone2.length;i++){
            newphone2[i].showTelecom();
        }
        ///////////////////////////////////
        Phone newphone3 = new Phone("아이폰","LG",200);
        newphone3.showTelecom();

    }
}

// 문제1
// 클래스(객체) 이름 : Phone
// 필드 : phone 클래스 내부 필드 :name telecom service
// 자료형 타입은 적절하게 설정하시오
// 기본생성자
// 생성자 (매개변수 1개 2개, 3개)
// void 메서드 이용 출력 : showTelecom(){} 

class Phone{
    // 필드
    String name ="알뜰폰";
    String telecom ="국민통신";
    int service=50;
    // 생성자
    Phone(){}
    public Phone(String name){
        this.name =name;
    }
    public Phone(String name, String telecom){
        this.name =name;
        this.telecom = telecom;
    }
    public Phone(String name, String telecom, int service){
        this.name =name;
        this.telecom = telecom;        
        this.service = service;
    }
    // 메서드
    public void showTelecom(){
        System.out.println();
        System.out.println(this.name+" | "+this.telecom+" | "+this.service+"시간");
    }
}