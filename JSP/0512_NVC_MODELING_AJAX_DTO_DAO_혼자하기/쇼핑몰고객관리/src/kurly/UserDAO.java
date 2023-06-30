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
            System.out.println("로드 성공");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
            System.out.println("컨넥트 성공");
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    // 1. 회원가입 signup
    public int signup(UserDTO userDTO){
        String SQL ="insert into signup_table(user_id, user_pw, user_name, user_email,user_ph, user_address, user_gender, user_birth, user_chooga, user_service) values(?,?,?,?,?,?,?,?,?,?)";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,userDTO.getUser_id());
            ps.setString(2,userDTO.getUser_pw());
            ps.setString(3,userDTO.getUser_name());
            ps.setString(4,userDTO.getUser_email());
            ps.setString(5,userDTO.getUser_ph());
            ps.setString(6,userDTO.getUser_address());
            ps.setString(7,userDTO.getUser_gender());
            ps.setString(8,userDTO.getUser_birth());
            ps.setString(9,userDTO.getUser_chooga());
            ps.setString(10,userDTO.getUser_service());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 
        return -1;
    }
    
    // 2. 로그인 signin
    public int signin(UserDTO userDTO){

        String SQL ="select user_pw from signup_table where user_id=?";
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
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 
        return -2;
    }

    // 3. 정보수정 update   
    public int update(UserDTO userDTO){
        String SQL ="update signup_table set  user_pw=?,user_name=?,user_email=?,user_ph=?,user_address=?,user_gender=?,user_birth=?,user_chooga=?,user_service=? where user_id=? ";
        try{
            ps= conn.prepareStatement(SQL);
           
            ps.setString(1,userDTO.getUser_pw());
            ps.setString(2,userDTO.getUser_name());
            ps.setString(3,userDTO.getUser_email());
            ps.setString(4,userDTO.getUser_ph());
            ps.setString(5,userDTO.getUser_address());
            ps.setString(6,userDTO.getUser_gender());
            ps.setString(7,userDTO.getUser_birth());
            ps.setString(8,userDTO.getUser_chooga());
            ps.setString(9,userDTO.getUser_service());
            ps.setString(10,userDTO.getUser_id());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 
        return -1;
    }
    // 4. 회원탈퇴(정보삭제) delete 삭제되면 return 값 1(쿼리문 수행된 만큼) 안되면 0 그 외의 문제 -1
    public int delete(UserDTO userDTO){
        String SQL ="delete from signup_table where user_id=? and user_pw=?";
        try{
            ps= conn.prepareStatement(SQL);
           
            ps.setString(1,userDTO.getUser_id());
            ps.setString(2,userDTO.getUser_pw());
        

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 
        return -1;
    }

    // 개인정보 수정하기위해서  업데이트폼에 데이터 내보내기 
    public UserDTO getJoin(String user_id){
        UserDTO userDTO = new UserDTO();
        String SQL ="select * from signup_table where user_id=?";
        try{
            ps= conn.prepareStatement(SQL);
            ps.setString(1,user_id);     

            rs = ps.executeQuery();

            if(rs.next()){ //데이터베이스 자료를 가져와서 DTO 세터에 저장
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_ph(rs.getString("user_ph"));
                userDTO.setUser_address(rs.getString("user_address"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_chooga(rs.getString("user_chooga"));
                userDTO.setUser_service(rs.getString("user_service"));
                userDTO.setGaib_date(rs.getString("gaib_date"));
            }

        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 

        return  userDTO;
    }

    // 가입 회원리스트 목록 가져오기
    public List<UserDTO> getJoinList(){
        UserDTO userDTO = null;
        List<UserDTO> list = new ArrayList<>();

        // 모든 전체 리스트 목록을 가져오는 SQL
        String SQL = "select * from signup_table";
        try{
            ps=conn.prepareStatement(SQL);
            rs = ps.executeQuery();
            while(rs.next()){
                // 현재 레코드에 모든 컬럼(field)데이터 가져오기
                userDTO = new UserDTO();
                userDTO.setUser_id(rs.getString("user_id"));
                userDTO.setUser_pw(rs.getString("user_pw"));
                userDTO.setUser_name(rs.getString("user_name"));
                userDTO.setUser_email(rs.getString("user_email"));
                userDTO.setUser_ph(rs.getString("user_ph"));
                userDTO.setUser_address(rs.getString("user_address"));
                userDTO.setUser_gender(rs.getString("user_gender"));
                userDTO.setUser_birth(rs.getString("user_birth"));
                userDTO.setUser_chooga(rs.getString("user_chooga"));
                userDTO.setUser_service(rs.getString("user_service"));
                userDTO.setGaib_date(rs.getString("gaib_date"));
                // 리스트에 저장(추가 add)하기
                // 줄(행, 레코드) 단위로 리스트(ArrayList)에 저장, 추가한다.
                list.add(userDTO);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }  
        finally{ // 무조건 실행하는 키워드
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){

            }
        } 
        return list;
    }
}
