public class J03_메서드_응용 {

    //1. 리턴 X 매개변수X 메서드
    // 예제) "안녕하세요" 문자열을 5번 출력하는 메서드를 만들고 실행하시오
    //static이 없는 메서드는 실행할 수 없다.
    //생성자.Hello();
    public void Hello(){
        for(int i=0;i<5;i++){
            System.out.println((i+1)+" 안녕하세요~");
        }
    }

    //2. 리턴 X 매개변수2개인 메서드
    //  매개값 문자열과 숫자를 입력받고 받은 숫자의 수만큼 문자열 반복 출력하는 메서드 만들고 실행
    static void repeatStr(String str,int num){
        for( int i=0; i<num;i++){
            System.out.println(str);
        }
    }
    //3. 리턴 O 매개변수O 메서드
    // 3개의 숫자를 입력받고 평균값을 리턴하는 메서드 작성 매개변수 정수형
    static double average(int a,int b,int c){
        return (a+b+c)/3.0;
    }

    //4. 리턴 X 매개변수O 메서드
    // 매개변수가 1차원 배열
    // 매개변수받아서 배열을 반복문 사용 출력하는 메서드 작성하고, 실행
    // 메서드 이름 arrMethod1 정수형 arr 변수 사용
    static void arrMethod1(int arr[]){ 
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
            }
            System.out.println();
        }
        
   
        
    

    //5. 리턴 X 매개변수O 메서드
    // 매개변수가 2차원 배열
    // 매개변수받아서 배열을 반복문 사용 출력하는 메서드 작성하고, 실행
    // 메서드 이름 arrMethod2 정수형 arr 변수 사용
    void arrMethod2(int arr[][]){
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
            System.out.printf("%2d ",arr[i][j]);
            }
            System.out.println();
        }
   
    }


    public static void main(String[] args) {
        // 1. 리턴 X 매개변수X 메서드호출
        System.out.println();
        J03_메서드_응용 newJ03_메서드_응용 = new J03_메서드_응용(); // 클래스 생성자
        // Hello(); static 없는 경우 오류
        newJ03_메서드_응용.Hello();
        System.out.println();
        repeatStr("안녕",5);
        System.out.println();
        repeatStr("HELLO",3);
        System.out.println();
        System.out.println("평균 값 : "+average(3,6,8));

        // 4.1차원 배열
        // 배열 전달과 생성
        int[] arr1={1,2,3,4,5}; 
        int[][] arr2={
            {1,2,3,4,5},
            {1,2,3,4,5},
            {1,2,3,4,5},
            {1,2,3,4,5},
            {1,2,3,4,5}
        };
        System.out.println();
        arrMethod1(arr1);
        System.out.println();
        newJ03_메서드_응용.arrMethod2(arr2);
        
    }
    
}
