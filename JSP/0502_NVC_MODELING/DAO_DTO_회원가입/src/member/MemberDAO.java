package member;
import java.sql.*;

public class MemberDAO {

    // 메인 생성자
    // JDBC 드라이버
    // 컨넥션
    private Connection conn=null;
    private PreparedStatement ps=null;
    
    
    public MemberDAO(){
      
        try{         
            String DBURL ="jdbc:mysql://localhost:3306/user";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");      
            conn = DriverManager.getConnection(DBURL,DBID,DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }

    }
    // 입력(가입) 메서드(DTO 매개변수) => return 값 있는 메서드
    public int insert(MemberDTO memberDTO){
        String SQL = "INSERT INTO member_table VALUES(?,?,?,?,?)";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,memberDTO.getUser_id());
            ps.setString(2,memberDTO.getUser_pw());
            ps.setString(3,memberDTO.getUser_name());
            ps.setString(4,memberDTO.getUser_hp());
            ps.setString(5,memberDTO.getUser_email());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1; // 아이디가 중복된 상태임을 알려주는 리턴값
    }
     // 수정 메서드
    public int update(MemberDTO memberDTO){
        String SQL ="UPDATE member_table SET user_pw= ?,user_name= ?,user_hp= ?,user_email= ? WHERE user_id = ?";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1, memberDTO.getUser_pw());
            ps.setString(2, memberDTO.getUser_name());
            ps.setString(3, memberDTO.getUser_hp());
            ps.setString(4, memberDTO.getUser_email());
            ps.setString(5, memberDTO.getUser_id());
            return ps.executeUpdate();

        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

    // 로그인 메서드
    // 로그아웃 메서드
   
    // 삭제 메서드
    // 출력 메서드
}
