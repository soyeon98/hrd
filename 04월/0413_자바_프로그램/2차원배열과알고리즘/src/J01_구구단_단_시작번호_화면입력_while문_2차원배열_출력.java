import java.util.Scanner;

/**
 * J01_구구단_단_시작번호_화면입력_while문_2차원배열_출력
 */
public class J01_구구단_단_시작번호_화면입력_while문_2차원배열_출력 {

    public static void main(String[] args) {

        int sdan = 0;
        int edan = 0;
        int[][] arr; 

        Scanner sc = new Scanner(System.in);

        System.out.println("구구단에서 실행할 시작단을 입력하세요");
        while(true){
            sdan=sc.nextInt();
            if(sdan<2 || sdan>9){
                System.out.println("2와 9사이의 숫자를 입력하세요");
            }
            else{
                System.out.println("구구단에서 실행할 끝단을 입력하세요");
                while(true){
                    edan=sc.nextInt();
                    if(edan<2 || edan>9){
                        System.out.println("2와 9사이의 숫자를 입력하세요");
                    }
                    else if(edan<sdan){
                        System.out.println("시작단의 값보다 크거나 같은 숫자를 입력하세요");
                    }
                    else{
                        arr=new int[9][edan-sdan+1];
                        int row=-1;
                        for(int i=1; i<=arr.length;i++){
                          int col=-1;                
                          row++;
                            for(int j=sdan; j<=edan;j++){
                                col++;
                                arr[row][col]=j*i;
                                // System.out.printf("%d * %d = %2d   ",j,i,(j*i));
                                // System.out.print(j+"×"+i+"= "+arr[i-1][col]+"\t");
                               
                            }
                            System.out.println();
                        }

                        //배열에 저장된 내용 출력
                        for(int i=0;i<arr.length;i++){
                            for(int j=0;j<arr[i].length;j++){
                                System.out.printf(" %2d  ",arr[i][j]);
                            }
                            System.out.println();
                        }
                      break;
                    }
                }

                break;
            }

        }





       

    }
}