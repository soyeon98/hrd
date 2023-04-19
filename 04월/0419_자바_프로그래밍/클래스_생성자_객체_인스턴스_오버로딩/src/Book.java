/*
 * 1.생성자 이름은 반드시 클래스 이름과 같아야한다.
 * 2.생성자는 리턴값이 없다.
 * 3.생성자는 void값이 없다.
 * 4.생성자는 몇가지만 제외하면 method와 다르지 않다.
 * 5.생성자는 method처럼 클래스내에 선언되고 오버로딩이 가능하다.
 * 6.하나의 클래스에 여려개의 생성자가 존재할수있다.
 * 7.기본생성자가 자동으로 생성될 수 있다. 
 * 8.클래스에 생성자가 하나도 정의되어있지 않다면 컴파일러가 자동으로 기본 생성자를 생성시켜서 컴파일해준다.
 * 
 * //생성자 오버로딩
 * 클래스 이름 (){}
 * 클래스 이름 (매개변수1){}
 * 클래스 이름 (매개변수1,매개변수2){}
 * 클래스 이름 (매개변수1,매개변수2,매개변수3){}
 */
public class Book {
    //멤버 변수 (필드 =속성 = 프로퍼티)
    String title;
    String author;
    
    //멤버변수
    //자료형 없다 (리턴없음)
    //void 없음 

    public Book(String t){ //생성자
        title = t;
        author = "작자미상";
        
    }   
    //public Book ("어린왕자","생택쥐페리"){//생성자
    public Book(String t , String a){
        title=t;
        author=a;

    }

    public static void main(String[] args) {
        Book littlePrince = new Book("어린왕자","생택쥐페리");
        Book loveStory = new Book("춘향전");

        System.out.println(littlePrince.title + "  "+ littlePrince.author);
        System.out.println(loveStory.title+ "  " + loveStory.author);

        System.out.println();
        System.out.println("======= 와플 =======");

        //생성자 생성한다
        waffle2 w2 = new waffle2("딸기생크림와플",3500);
        w2.showW2();
        // 생성자 w2를 이용해서 
        // waffle2() 내부에서 호출 실핼할 메서드 만들어준다
        waffle3 w3 = new waffle3("초코바나나와플",3800);
        w3.showW3();
    }
    
}

 //와플2 => this

 class waffle2{ // 루트영역 this
    String name; // 클래스내부에서 접근할 때 사용 가능 this.name
    int price;
    // 매개변수 두개의 생성자를 선언했으므로 기본 생성자는 만들어지지않는다.
    waffle2(String irum, int money){
        // 생성자의 매개변수 값으로 멤버변수를 초기화
        //  this를 객체의 멤버변수에 접근할 수 있다.

        name = irum;
        this.price = money;

        // this 객체 도입
    }

    // 출력메서드 
    void showW2(){
        System.out.println("이름 : "+name+", 가격 = "+price);
    }


 }
 
 class waffle3{
    String name; 
    int price;

    // 기본 생성자 : 클래스이름 그대로
    waffle3(){ }

    //생성자 오버로딩
    waffle3(String name){ 
        this.name=name; // 멤버변수 name의 값을 매개변수 값으로 변경가능하다
                        // 접근방식은 this 사용
    }

    waffle3(String n, int p){ 

        // 지역변수는 클래스의 멤버변수가 우선이다
        String name;
        name=n; // this 생략가능
        this.price=p;             
    }

       // 출력메서드 
    void showW3(){
        System.out.println("이름 : "+name+", 가격 = "+price);
    }

 }
