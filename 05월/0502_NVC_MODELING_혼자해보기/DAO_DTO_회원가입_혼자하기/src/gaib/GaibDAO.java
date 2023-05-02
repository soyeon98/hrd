package gaib;
import java.sql.*;

public class GaibDAO {

        private Connection conn;
        private PreparedStatement ps;

    public GaibDAO(){      
        try{
            String DBURL="jdbc:mysql://localhost:3306/soyeon";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // 입력 메서드
    public int insert(GaibDTO gaibDTO){
        String SQL ="insert into gaib_table values(?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1,gaibDTO.getUser_id());
            ps.setString(2,gaibDTO.getUser_pw());
            ps.setString(3,gaibDTO.getUser_name());
            ps.setString(4,gaibDTO.getUser_hp());
            ps.setString(5,gaibDTO.getUser_email());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

    // 수정 메서드
    public int update(GaibDTO gaibDTO){
        String SQL ="update gaib_table set user_pw=?,user_name=?,user_hp=?,user_email=? where user_id=? ";
        try{
            ps=conn.prepareStatement(SQL);
            ps.setString(1,gaibDTO.getUser_pw());
            ps.setString(2,gaibDTO.getUser_name());
            ps.setString(3,gaibDTO.getUser_hp());
            ps.setString(4,gaibDTO.getUser_email());
            ps.setString(5,gaibDTO.getUser_id());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

}
