package kurly;

import java.sql.*;
import java.util.*;
import kurly.UserDTO; 

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
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
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
                    return 1; 
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
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
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
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
        }
        return -1;
    }
    // 4. 회원탈퇴(정보삭제) delete 삭제되면 return 값 1(쿼리문 수행된 만큼) 안되면 0 그 외의 문제 -1
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
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
        }
        return -1;
    }

    // 개인정보 수정하기위해서  업데이트폼에 데이터 내보내기 
    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();
        String SQL ="select * from kurly_table where user_id=?";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,user_id);     

            rs = ps.executeQuery();

            if(rs.next()){ //데이터베이스 자료를 가져와서 DTO 세터에 저장
                userDTO.setUser_id(user_id);
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr(rs.getString("user_addr"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
            }

        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
        }
        return  userDTO;
    }

    // 회원 리스트
    public List<UserDTO> getJoinList(){
        UserDTO userDTO=null;
        List<UserDTO> list = new ArrayList<>();
        String SQL ="select * from kurly_table";
        try{
            ps = conn.prepareStatement(SQL);
            rs= ps.executeQuery(); 

            while(rs.next()){
                userDTO = new UserDTO();
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_hp(rs.getString("user_hp"));
                userDTO.setUser_addr(rs.getString("user_addr"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setGaib_date(rs.getString("gaib_date"));

                list.add(userDTO);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{
            try{
                if(rs!=null){rs.close();}
                if(ps!=null){ps.close();}
                if(conn!=null){conn.close();}
            }
            catch(Exception e){

            }
        }
        return list;
    }


}
