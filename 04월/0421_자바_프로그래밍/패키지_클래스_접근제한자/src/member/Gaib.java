package member;

/**
 * Kurly
 */
public class Gaib {
    public static void main(String[] args) {
        SignUp newSignUp = new SignUp();
        newSignUp.setId("212qkrthdus");
        newSignUp.setPw("qkrthdus212");
        newSignUp.setPwOk("qkrthdus212");
        newSignUp.setName("박소연");
        newSignUp.setEmail("212psy@naver.com");
        newSignUp.setHp("010-2701-8808");
        newSignUp.setAddr("파주");
        System.out.println("아이디 : "+newSignUp.getId());
        System.out.println("비밀번호 : "+newSignUp.getPw());
        System.out.println("비밀번호 확인 : "+newSignUp.getPwOk());
        System.out.println("이름 : "+newSignUp.getName());
        System.out.println("이메일 : "+newSignUp.getEmail());
        System.out.println("전화번호 : "+newSignUp.getHp());
        System.out.println("주소 : "+newSignUp.getAddr());
    }
    
}
class SignUp{
    private String id;
    private String pw;
    private String pwOk;
    private String name;
    private String email;
    private String hp;
    private String addr;

    public String getId() {
        return this.id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return this.pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getPwOk() {
        return this.pwOk;
    }

    public void setPwOk(String pwOk) {
        this.pwOk = pwOk;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getHp() {
        return this.hp;
    }

    public void setHp(String hp) {
        this.hp = hp;
    }

    public String getAddr() {
        return this.addr;
    }

    public void setAddr(String addr) {
        this.addr = addr;
    }

}