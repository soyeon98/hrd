public class J02_2차원배열_비정방형 {
    public static void main(String[] args) {
        
        // 정방형 2차원 배열   : 행마다의 열의 개수가 모두 같은 배열
        // 비정방형 2차원 배열 : 행마다의 열의 개수가 다른 배열

        // 비정방형 선언과 생성
        int[][] arr = {
            {21,3,5,9},
            {46,85,21,65,52},
            {1, 5, 67},
            {8, 12, 68, 42, 500, 760, 2}
        };

        for(int i=0; i<arr.length;i++){ // Row 행 줄
            for(int j=0; j<arr[i].length;j++){ // Column 열 칸
                System.out.printf("%4d",arr[i][j]);
            }
            System.out.println();
        }

        System.out.println();
     
        // 2차원 배열 선언과 생성방식
        int[][] arr1 = new int[4][]; // 줄번호만 생성
        // 각 행마다 열(칸)을 생성한다.
        arr1[0] = new int[4]; // 1행에 4열 생성 (열만 생성)
        arr1[1] = new int[5]; // 1행에 4열 생성 (열만 생성)
        arr1[2] = new int[3]; // 1행에 4열 생성 (열만 생성)
        arr1[3] = new int[7]; // 1행에 4열 생성 (열만 생성)

        int cnt=0;
        for(int i=0;i<arr1.length;i++){
            for(int j=0;j<arr1[i].length;j++){
                cnt++;
                arr1[i][j]= cnt;
                System.out.printf("%3d",arr1[i][j]);
            }
            System.out.println();
        }

        System.out.println();

        int[][] arr2 ={
            {1,4,5},
            {12,6,35,98},
            {52,65,34,85,2,5,4,95,2},
            {45,15,2,4},
            {93,54},
        };


        System.out.println(" 열누적합 구하기");

        int[] sum = new int[arr2.length];
        sum[0]=0;
 
        for(int i=0; i<arr2.length; i++){
            System.out.printf("%1d  ",i);
            sum[i]=0;
            for(int j=0; j<arr2[i].length; j++){     
                sum[i]+=arr2[i][j];   
                System.out.printf("%3d ", arr2[i][j]);
            }
            System.out.printf("[%d] ", sum[i]);
            System.out.println();
        }





        System.out.println();

        int[][] arr3 = new int[5][];

        arr3[0] = new int[3];
        arr3[1] = new int[4];
        arr3[2] = new int[6];
        arr3[3] = new int[4];
        arr3[4] = new int[2];

        
        
        for(int i=0; i<arr3.length; i++){
            for(int j=0; j<arr3[i].length; j++){
                arr3[i][j]= (int)(Math.random()*10+1);
                System.out.printf("%3d", arr3[i][j]);
            }
            System.out.println();
        }






    }
}
