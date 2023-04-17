public class J02_2차원배열 {
    public static void main(String[] args) {
        // 1차원 배열 : 행(줄 row) a[]
        // 2차원 배열 : 행(줄 row), 열(칸 column) a[행][열]

        // 1차원 배열을 여러개
        String[] arr1 = {"1","2","3","4","5"}; // 글번호
        String[] arr2 = {"글제목1","글제목2","글제목3","글제목4","글제목5"}; //글제목
        String[] arr3 = {"2023-01-01","2023-01-02","2023-01-03","2023-01-04","2023-01-05"}; //작성날짜
        String[] arr4 = {"11","22","33","43","52"}; // 조회수

        // 2차원 배열 
        String[][] arr = {
            {"1","2","3","4","5"}, // 1행 1열 [0][0] [0][1] [0][2] [0][4] [0][4]
            {"글제목1","글제목2","글제목3","글제목4","글제목5"},
            {"2023-01-01","2023-01-02","2023-01-03","2023-01-04","2023-01-05"},
            {"11","22","33","43","52"}

            //[0][0] [0][1] [0][2] [0][4] [0][4]
            //[1][0] [1][1] [1][2] [1][4] [1][4]
            //[2][0] [2][1] [2][2] [2][4] [2][4]
            //[3][0] [3][1] [3][2] [3][4] [3][4]          

        };
        System.out.println("2차원배열 1행 출력/////////////");
        System.out.println("arr[0][0] "+arr[0][0]);
        System.out.println("arr[0][1] "+arr[0][1]);
        System.out.println("arr[0][2] "+arr[0][2]);
        System.out.println("arr[0][3] "+arr[0][3]);
        System.out.println("arr[0][4] "+arr[0][4]);

        System.out.println();
        System.out.println("2차원배열 2행 출력/////////////");
        System.out.println("arr[1][0] "+arr[1][0]);
        System.out.println("arr[1][1] "+arr[1][1]);
        System.out.println("arr[1][2] "+arr[1][2]);
        System.out.println("arr[1][3] "+arr[1][3]);
        System.out.println("arr[1][4] "+arr[1][4]);

        System.out.println();
        System.out.println("2차원배열 3행 출력/////////////");
        System.out.println("arr[2][0] "+arr[2][0]);
        System.out.println("arr[2][1] "+arr[2][1]);
        System.out.println("arr[2][2] "+arr[2][2]);
        System.out.println("arr[2][3] "+arr[2][3]);
        System.out.println("arr[2][4] "+arr[2][4]);

        System.out.println();
        System.out.println("2차원배열 4행 출력/////////////");
        System.out.println("arr[3][0] "+arr[3][0]);
        System.out.println("arr[3][1] "+arr[3][1]);
        System.out.println("arr[3][2] "+arr[3][2]);
        System.out.println("arr[3][3] "+arr[3][3]);
        System.out.println("arr[3][4] "+arr[3][4]);

        // 배열 행,열 길이 알아내기
        System.out.println("행 길이(개수) : "+arr.length);
        System.out.println("1행 열 길이(개수) : "+arr[0].length);
        System.out.println("2행 열 길이(개수) : "+arr[1].length);
        System.out.println("3행 열 길이(개수) : "+arr[2].length);
        System.out.println("4행 열 길이(개수) : "+arr[3].length);

        // 2차원 배열 전체(행열) 출력하기
        for(int i=0;i<arr.length;i++){ // 4행

            for(int j=0; j<arr[i].length;j++){ // 5열
                System.out.print("arr["+i+"]["+j+"] : "+ arr[i][j]+"   ");
            }
        }

        System.out.println();
        System.out.println("배열 출력");
        System.out.println(arr[0][0] +"  "+arr[1][0]+"  "+arr[2][0]+"  "+arr[3][0]);
        System.out.println(arr[0][1] +"  "+arr[1][1]+"  "+arr[2][1]+"  "+arr[3][1]);
        System.out.println(arr[0][2] +"  "+arr[1][2]+"  "+arr[2][2]+"  "+arr[3][2]);
        System.out.println(arr[0][3] +"  "+arr[1][3]+"  "+arr[2][3]+"  "+arr[3][3]);
        System.out.println(arr[0][4] +"  "+arr[1][4]+"  "+arr[2][4]+"  "+arr[3][4]);

        System.out.println();
        System.out.println("//for문으로 2차원 배열 출력");
        System.out.println();
        for(int i=0;i<arr[0].length;i++){
            for(int j=0;j<4;j++){
                System.out.print(arr[j][i] +"  ");
            }
            System.out.println();
        }

        // 2차원 배열 
        // 게시판 2차원 배열
        // 5행 4열(1열 글번호 / 2열 글제목 / 3열 닐짜 / 4열 조회수)
        String[][] board = {
            {"1","글제목1","2023-01-01","11"},
            {"2","글제목2","2023-01-02","22"},
            {"3","글제목3","2023-01-03","33"},
            {"4","글제목4","2023-01-04","43"},
            {"5","글제목5","2023-01-05","52"}        
        };
        
        //2차원 배열 출력
        System.out.println();
        System.out.println("//for문으로 2차원 게시판 출력");
        System.out.println();
        for(int i=0;i<board.length;i++){
            for(int j=0; j<board[1].length;j++){
                System.out.print(board[i][j] + "  ");
            }
            System.out.println();
        }




    }
}
