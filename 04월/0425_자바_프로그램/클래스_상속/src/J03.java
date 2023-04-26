public class J03 {
    public static void main(String[] args) {
        Nature newNature = new Nature();
        newNature.show();
       
    }

}
class Number{
    int a;
    int b;
    int c;
    Number(){

    }
    void show(){
        System.out.println("부모클래스입니다.");
    }
}

class Nature extends Number{
    int d;

    void show_method(){
        System.out.printf("%2d %2d %2d %2d",a,b,c,d);
    }
    void show(){
        System.out.println("자식클래스입니다.");
    }

}