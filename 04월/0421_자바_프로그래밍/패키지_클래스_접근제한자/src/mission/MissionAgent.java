package mission;

public class MissionAgent {

    String name; //default
    public int codeNum; //public : 중요한 비밀번호가 저장된다.

    public String getName(){ // getter 함수
        return name;
    }

    public void setName(String name){ // setter 함수
        this.name = name;
    }

    // 진짜 코드는 은닉화
    private int getCodeNum(){ // getter 함수
        return codeNum+2023;
    }

    public void showData(){
        System.out.println("이름 : "+getName());
        // private 멤버를 같은 클래스에서 접근하여 사용한다.
        System.out.println("코드번호 : "+getCodeNum());
    }


}




