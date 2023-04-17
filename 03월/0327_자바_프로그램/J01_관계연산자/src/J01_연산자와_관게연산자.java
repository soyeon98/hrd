/**
 * 연산자와_관게연산자
 */
public class J01_연산자와_관게연산자 {

    public static void main(String[] args) {
        // 문제1) 성적연산처리
        // 국어, 영어, 수학, 총점, 평균, 자료형에 맞게 변수 지정
        // 총점과 평균을 출력하시오

        // 국어 영어 수학 총점 -> 정수(int) 평균 -> 실수(float)
         int Korean = 86;
         int Math = 98;
         int English = 78;
         int sum = (Korean+Math+English);
         float average = (float)sum/3;
         System.out.println("");
         System.out.println("국어 점수 "+Korean);
         System.out.println("수학 점수 "+Math);
         System.out.println("영어 점수 "+English);
         System.out.println("총 점 "+sum);
         System.out.println("평균 "+average);

         System.out.println("////////////////////////////////////");

         int kor,mat, eng, tot;
         float avg;

         // 리터럴값
         kor = 77;
         eng = 80;
         mat = 85;
         //총점 연산 합계
         tot = kor + eng + mat;
        //평균 연산 합계
        avg = (float)tot / 3;

        //출력
        System.out.println("");
        System.out.println("국어 점수 "+kor);
        System.out.println("수학 점수 "+mat);
        System.out.println("영어 점수 "+eng);
        System.out.println("총 점 "+tot);
        System.out.println("평균 "+avg);


    }
}
