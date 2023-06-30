package member;

/**
 * MemberDTO
 */
public class MemberDTO {

    private String user_id;
    private String user_pw;
    private String user_name;
    private String user_hp;
    private String user_email;

    public String getUser_id() {
        return this.user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_pw() {
        return this.user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_name() {
        return this.user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_hp() {
        return this.user_hp;
    }

    public void setUser_hp(String user_hp) {
        this.user_hp = user_hp;
    }

    public String getUser_email() {
        return this.user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

}