public class J01_2차원배열 {

    public static void main(String[] args) {
        // 1. 1차원배열 3개 생성
        int[] numbers1 = {5,10,15,20,25};
        int[] numbers2 = {10,20,30,40,50};
        int[] numbers3 = {15,30,45,60,75};


        // 2. 2차원 배열 생성
        int[][] arr1 = {
            {5,10,15,20,25},
            {10,20,30,40,50},
            {15,30,45,60,75}

        };

        // 배열의 길이(행개수)
        System.out.println();
        System.out.println("arr1의 행의 개수" + arr1.length);
        System.out.println();


        // 배열의 길이(열개수)
        System.out.println();
        System.out.println(" arr1[0] 열의 개수" + arr1[0].length);
        System.out.println(" arr1[1] 열의 개수" + arr1[1].length);
        System.out.println(" arr1[2] 열의 개수" + arr1[2].length);
        System.out.println();
          


        
        // 2차원배열 출력
        for(int i=0; i<arr1.length; i++){
            System.out.print(i+ "   ");
            for(int j=0; j<arr1[i].length; j++){
                System.out.print(j+"  ");
            }
            System.out.println("");
        }



        // 3. 1차원배열 2차원배열로 병합하기
        
        int[][] arr2 = {numbers1,numbers2,numbers3};
              // 배열의 길이(열개수)
              System.out.println();
              System.out.println(" arr2[0] 열의 개수 " + arr2[0].length);
              System.out.println(" arr2[1] 열의 개수 " + arr2[1].length);
              System.out.println(" arr2[2] 열의 개수 " + arr2[2].length);
              System.out.println();


        // 2차원배열 출력
        for(int i=0; i<arr1.length; i++){
            for(int j=0; j<arr2[i].length; j++){
                System.out.print(arr2[i][j]+ "\t");
            }
            System.out.println("");
        }
                

    }
}