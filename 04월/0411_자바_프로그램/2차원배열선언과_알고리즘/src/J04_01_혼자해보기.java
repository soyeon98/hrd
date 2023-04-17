import java.util.Scanner;

public class J04_01_혼자해보기 {
    public static void main(String[] args) {
        Scanner sc =new Scanner(System.in);
        int row=0;
        int col=0;
        int[][] arr;


        System.out.println();
        System.out.println("행의 개수를 입력하세요 : 범위 1 ~ 15");
        while(true){
            row = sc.nextInt();
            if(row<1 || row>15){
                System.out.println("1부터 15사이의 정수를 입력하세요");
            }
            else{
                System.out.println("열의 개수를 입력하세요 : 범위 5~ 20");
                while(true){
                    col = sc. nextInt();
                    if(col<5 || col >20){
                        System.out.println("5부터 20사이의 정수를 입력하세요");
                    }
                    else{
                        arr = new int[row][col];
                        for(int i=0; i<arr.length;i++){
                            for(int j=0; j<arr[i].length;j++){
                                arr[i][j]=(int)(Math.random()*10+1);
                                System.out.printf(" %3d",arr[i][j]);
                            }
                            System.out.println();

                        }
                        break;
                    }
                   
                }
                break;
            }
         
        }












        sc.close();
    }
    
}
