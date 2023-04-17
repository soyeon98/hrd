
import java.util.Scanner;

public class J04_조건문_점수입력_합격여부 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        // 국어 영어 수학
        // 3과목 점수 입력 받아서
        // 총점 연산
        // 평균 연산
        // 평균이 80점 이상이면 합격 아니면 불합겹
        System.out.println("국어 영어 수학 점수를 입력하세요");
        int kor = sc.nextInt();
        System.out.println("국어점수 : "+ kor);
        int eng = sc.nextInt();
        System.out.println("영어점수 : "+ eng);
        int mat = sc.nextInt();
        System.out.println("수학점수 : "+ mat);

        int tot = kor+eng+mat;
        double avg = (double)(kor+eng+mat)/3;
        System.out.println("총점 : "+tot);
        System.out.println("평균 : "+ avg);

        if(avg >= 80){
            System.out.println("합격");
        }
        else{
            System.out.println("불합격");
        }
            



    }
}
