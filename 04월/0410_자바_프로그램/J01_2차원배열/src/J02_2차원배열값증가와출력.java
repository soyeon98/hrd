public class J02_2차원배열값증가와출력 {
    public static void main(String[] args) {
        // 2차원 배열 생성과 값 증가 출력
        // 문제1)
        // 1. 2차원 5행 5열 배열 생성
        // 2. 2차원 배열에 행열에 1씩 증가 값을 넣어 출력하시오
        // 3. 증가변수는 정수형 cnt

        // 1.입력설계         
         int[][] arr =new int[5][5];
         int cnt = 0;


        // 3.처리설계 -오름차순
        for(int i=0;i<arr.length;i++){
            for(int j=0;j<arr[i].length;j++){
                arr[i][j]=++cnt; // 값을 증가시키고 배열에 값을 대입(전위연산)
                System.out.printf("%2d ",arr[i][j]);
            }
            System.out.println("");

        }
        System.out.println("");
   

        // 내림차순 설계
        for(int i=arr.length-1;i>=0;i--){
            for(int j=arr[i].length-1;j>=0;j--){
                System.out.printf("%2d ",arr[i][j]);
            }
            System.out.println("");

        }


        // 2.출력설계 cnt 숫자 우측 정렬
        // System.out.printf("%2d ",arr[i][j]);




    }
    
}
