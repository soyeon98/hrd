/**
 * J01_빌딩_호텔_상속
 */
public class J01_빌딩_호텔_상속 {

    public static void main(String[] args) {
        Hotel ht = new Hotel();
        ht.setData("신라호텔", 120000);
        ht.showHotel(100);
        Apart ap = new Apart();
        ap.setData("자이", 400000);
        ap.showApart(40);
    }
}

// 슈퍼클래스(부모클래스) 
class Building{
    String name;
    int price;
    public void setData(String name,int price){

    }

    public void showData(){
        System.out.println("이름 : "+name);
        System.out.println("가격 : "+price+"원");
    }
}

// 서브클래스(자식클래스1)
class Hotel extends Building{
    int room_num;
    // 메서드1: 오버라이딩
    @Override
    public void setData(String name,int price){
        this.name=name;
        this.price=price;
    }
     // 메서드2: 출력
     public void showHotel(int room_num){
        super.showData();
        System.out.println("VIP 룸 수 : "+room_num+"개");
        System.out.println();
     }
}
// 서브클래스(자식클래스2)
class Apart extends Building{
    int floor_num;
    // 메서드1: 오버라이딩
    @Override
    public void setData(String name,int price){
        this.name=name;
        this.price=price;
    }
     // 메서드2: 출력
     public void showApart(int floor_num){
        super.showData();
        System.out.println("아파트 층 수 : "+floor_num+"층");
        System.out.println();
     }
    
}