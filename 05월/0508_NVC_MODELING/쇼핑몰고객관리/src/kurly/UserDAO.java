package kurly;

import java.sql.*;

public class UserDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public UserDAO(){

        // 데이터베이스 드라이버(JDBC)
        // 데이터베이스 컨넥션 인증&인가
        try{
            String DBURL="jdbc:mysql://localhost:3306/user";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    // 1. 회원가입 signup
    public int signup(UserDTO userDTO){
        String SQL ="insert into kurly_table(user_id,user_pw,user_name,user_email,user_hp,user_addr,user_gender,user_birth) values(?,?,?,?,?,?,?,?)";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,userDTO.getUser_id());
            ps.setString(2,userDTO.getUser_pw());
            ps.setString(3,userDTO.getUser_name());
            ps.setString(4,userDTO.getUser_email());
            ps.setString(5,userDTO.getUser_hp());
            ps.setString(6,userDTO.getUser_addr());
            ps.setString(7,userDTO.getUser_gender());
            ps.setString(8,userDTO.getUser_birth());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }
    
    // 2. 로그인 signin
    public int signin(UserDTO userDTO){

        String SQL ="select user_pw from kurly_table where user_id=?";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,userDTO.getUser_id());

            rs = ps.executeQuery();

            if(rs.next()){
                if(rs.getString(1).equals(userDTO.getUser_pw())){
                    return 1; //로그인 성공
                }
                else{
                    return 0;
                }
            }
            else{
                return-1;
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -2;
    }
    // 3. 정보수정 update   
    public int update(UserDTO userDTO){
        String SQL ="update kurly_table set  user_pw=?, user_name=?,user_email=?,user_hp=?,user_addr=?,user_gender=?,user_birth=? where user_id=? ";
        try{
            ps= conn.prepareStatement(SQL);
           
            ps.setString(1,userDTO.getUser_pw());
            ps.setString(2,userDTO.getUser_name());
            ps.setString(3,userDTO.getUser_email());
            ps.setString(4,userDTO.getUser_hp());
            ps.setString(5,userDTO.getUser_addr());
            ps.setString(6,userDTO.getUser_gender());
            ps.setString(7,userDTO.getUser_birth());
            ps.setString(8,userDTO.getUser_id());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }
    // 4. 회원탈퇴(정보삭제) delete
    public int delete(UserDTO userDTO){
        String SQL ="delete from kurly_table where user_id=? and user_pw=?";
        try{
            ps= conn.prepareStatement(SQL);
           
            ps.setString(1,userDTO.getUser_id());
            ps.setString(2,userDTO.getUser_pw());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }


}
