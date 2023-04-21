public class AccessEx {
    public static void main(String[] args) {
        Sample aClass = new Sample();
        aClass.a=10; // public 모든 패키지 모든 클래스 접근가능
        // aClass.b=10; private 으로 접근 안됨 오류 뜸 같은 클래스 내에서만 사용 가능
        aClass.c=10; // default 같은 패키지 내에서는 모든 클래스에서 접근 가능
    }
}


class Sample{
    public int a;
    private int b;
    int c;
}