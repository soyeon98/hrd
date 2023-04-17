public class J03_문자열_1차원배열 {
    public static void main(String[] args) {

        // 문제)
        // 문자열 배열 선언하고 생성하기
        // 배열의 길이는 10개
        // 데이터는 인기스타 || 연예인 이름 넣기
        String[] star = new String[10];
        star[0]="아이브";
        star[1]="엔믹스";
        star[2]="뉴진스";
        star[3]="지민";
        star[4]="주주시크릿";
        star[5]="스테이씨";
        star[6]="윤하";
        star[7]="르세라핌";
        star[8]="버스커버스커";
        star[9]="부석순";

        //for문
        System.out.println("for문______________");
        for(int i=0;i<star.length;i++){
            if(star[i].length()<=2){
                System.out.println("2글자 이하 연예인 : "+star[i]);
            }
           
        }

        //while문

        System.out.println("");
        System.out.println("while문______________");
        int i=-1;
        while(i<star.length-1){
            i++;
            System.out.println(star[i]+" "+star[i].length()+"글자");
        }

        //문자열을 글자 단위로 출력
        System.out.println("");
        System.out.println("문자열을 글자 단위로 출력______________");
        String str ="autumn";
        System.out.print(str.charAt(i));

        for(i=0; i<str.length();i++){
            System.out.print(str.charAt(i));
        }


    }
    
}
