
import mission.MissionAgent;


public class J01_AccessModifier {
    public static void main(String[] args) {
        
        // 생성자 생성
        MissionAgent newMissionAgent = new MissionAgent();  

        newMissionAgent.setName("강동원"); // public 메서드로 어디서든지 접근 가능
        newMissionAgent.codeNum=1998; // public 접근제한자로서 어디서든지 접근 가능
        newMissionAgent.showData();

        Agent newAgent = new Agent(); 

        newAgent.setName("천우희");
        newAgent.setAge(-26);

        // Agent 이름 나이 출력
        System.out.println("이름 : "+newAgent.getName());
        System.out.println("나이 : "+newAgent.getAge());

    }
}

class Agent{
    // private 멤버변수 접근지정
    // public 메서드 접근지정
    private String name;
    private int age;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return this.age;
    }

    public void setAge(int age) {

        if(age<0){
            this.age = age*-1; // 양수변환
        }
        else{
            this.age = age;
        }
        
    }

}
