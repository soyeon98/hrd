public class J05_난수 {
    public static void main(String[] args) {
        double i=Math.random();
        System.out.println(i);
        
        // 정해진 자리수의 난수 나오게 하기
        System.out.println("1자리수"+(int)(i*9+1));
        System.out.println("2자리수"+(int)(i*90+10));
        System.out.println("3자리수"+(int)(i*900+100));
        System.out.println("4자리수"+(int)(i*9000+1000));

    }
}
