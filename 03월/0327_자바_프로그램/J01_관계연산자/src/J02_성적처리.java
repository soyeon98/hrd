
/**
 * J02_성적처리
 */
public class J02_성적처리 {

    public static void main(String[] args) {

        int kor,eng,mat;
        kor = 86;
        eng = 76;
        mat = 85;
        int tot = kor+eng+mat;
        double avg = (double)tot/3;
        System.out.println("국어 점수 "+kor);
        System.out.println("영어 점수 "+eng);
        System.out.println("수학 점수 "+mat);
        System.out.println(" 총  점  "+tot);
        System.out.println(" 평  균  "+avg);
    }
    
}

