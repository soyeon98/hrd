import java.util.Scanner;

/**
 * J01_구구단_단_시작번호_화면입력_while문_2차원배열_출력
 */
public class J01_구구단_단_시작번호_화면입력_while문_2차원배열_출력1 {

    public static void main(String[] args) {

        int sdan = 0;
        int edan = 0;
        int cnt=0;

        int[][] arr = new int[9][]; 
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
                        for(int i=0; i<arr.length;i++){
                            ++cnt;
                            for(int j=0; j<=(edan-sdan);j++){
                                sdan++;
                                arr[i][j]= cnt*sdan;
                                
                                System.out.println(arr[i][j]);
                            }
                            
                        }
                      break;
                    }
                }

                break;
            }

        }


       

    }
}