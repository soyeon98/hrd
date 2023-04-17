public class J02_문자형_배열처리 {
    public static void main(String[] args) {
        //문자타입 5개의 배열 생성하기
        char[] ch = new char[6];
        ch[0]='L';
        ch[1]='O';
        ch[2]='V';
        ch[3]='E';
        ch[4]='I';
        ch[5]='S';

        System.out.println();
        System.out.println("------for문------");
        for(int i=0;i<ch.length;i++){
            System.out.print(ch[i]);
            if(i==3){
                System.out.print(" ");
            }          
        }
        System.out.println();
        System.out.println();
        System.out.println("------while문------");
        int i=-1;
        while(i<ch.length-1){
            i++;           
            if(i==4){
                System.out.print(" ");
            }  
            System.out.print(ch[i]);
        }

        



    }
    
}
