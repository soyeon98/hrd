public class J04_문자열_글자단위처리 {
    public static void main(String[] args) {

        //문자열을 글자 단위로 출력

        String str ="autumn";
        // System.out.println(str+", "+str.charAt(0));
        // System.out.println(str+", "+str.charAt(1));
        // System.out.println(str+", "+str.charAt(2));
        // System.out.println(str+", "+str.charAt(3));
        // System.out.println(str+", "+str.charAt(4));
        // System.out.println(str+", "+str.charAt(5));

        System.out.println("");
        System.out.println("문자열을 글자 단위로 출력______________");
        for(int i=0; i<str.length();i++){
            System.out.println(str.toUpperCase()+", "+str.toUpperCase().charAt(i)+"("+(i+1)+")");
            System.out.println(str+", "+str.toLowerCase().charAt(i));
        }

        // 문자 summer 문자열을 문자 배열 생성하여 지정
        // 문자배열만 출력
        String s = "summer";
        char[] summ = new char[s.length()];

        // for문
        System.out.println("for문_____________________");
        for(int i=0;i<summ.length;i++){
            summ[i] = s.charAt(i);
          
        }
       
        //while문
        System.out.println("");
        System.out.println("while문___________________");
        int i=-1;
        while(i<summ.length-1){
            i++;
            System.out.print(summ[i]);
        }

    }
    
}
