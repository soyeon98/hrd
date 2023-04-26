package beans_dto;

/**
 * GradeBeans
 */
public class GradeBeans {

    //멤버 변수 만들기
    //자바빈즈 DTO 규칙 get... set ...
    //멤버 변수는 반드시 private 선언
    private String name;
    private int kor;
    private int eng;
    private int math;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKor() {
        return this.kor;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public int getEng() {
        return this.eng;
    }

    public void setEng(int eng) {
        this.eng = eng;
    }

    public int getMath() {
        return this.math;
    }

    public void setMath(int math) {
        this.math = math;
    }
    

}