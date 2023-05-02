package user;
import java.sql.*;

public class UserDAO {


    private Connection conn;
    private PreparedStatement ps;

    public UserDAO(){
        try{
            String dbURL ="jdbc:mysql://localhost:3306/user";
            String dbID = "root";
            String dbPW = "1234";
            Class.forName("com.mysql.jdbc.Driver"); // 드라이버 연결
            conn = DriverManager.getConnection(dbURL, dbID, dbPW); // 컨넥션 연결
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // 데이터 입력 메서드 만들기
    public int insert(UserDTO userDTO){
        String SQL="INSERT INTO user_table VALUES(?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, userDTO.getUser_id());
            ps.setString(2, userDTO.getUser_pw());
            ps.setString(3, userDTO.getUser_name());
            ps.setString(4, userDTO.getUser_hp());
            ps.setString(5, userDTO.getUser_email());
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }


}
