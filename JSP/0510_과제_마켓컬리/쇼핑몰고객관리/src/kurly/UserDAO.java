package kurly;
import java.sql.*;
import java.util.*;

public class UserDAO {
  private Connection conn;
  private PreparedStatement ps;
  private ResultSet rs; 

  public UserDAO(){
    try{
      String URL = "jdbc:mysql://localhost:3306/soyeon";
      String ID = "root";
      String PW = "1234";   
      Class.forName("com.mysql.jdbc.Driver");   
      conn = DriverManager.getConnection(URL, ID, PW);
    }   
    catch(Exception e){
      e.printStackTrace();
    }
  } 

  //1. 회원가입 signup
  public int signup(UserDTO userDTO){ 
    try{
      String SQL = "INSERT INTO kurly_table(user_id,user_pw,user_name,user_email,user_hp,user_addr,user_gender,user_birth,user_chooga,user_service_all,user_service_1,user_service_2,user_service_3,user_service_4,user_service_5,user_service_6,user_service_7) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getUser_id());
      ps.setString(2, userDTO.getUser_pw());  
      ps.setString(3, userDTO.getUser_name()); 
      ps.setString(4, userDTO.getUser_email());
      ps.setString(5, userDTO.getUser_hp());
      ps.setString(6, userDTO.getUser_addr());
      ps.setString(7, userDTO.getUser_gender());
      ps.setString(8, userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date());
      ps.setString(9, userDTO.getUser_chooga());
      ps.setString(10, userDTO.getUser_service_all());
      ps.setString(11, userDTO.getUser_service_1());
      ps.setString(12, userDTO.getUser_service_2());
      ps.setString(13, userDTO.getUser_service_3());
      ps.setString(14, userDTO.getUser_service_4());
      ps.setString(15, userDTO.getUser_service_5());
      ps.setString(16, userDTO.getUser_service_6());
      ps.setString(17, userDTO.getUser_service_7());
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
      catch(Exception e){ }
    }
    return -1;
  }

  //2. 회원로그인 signin
  public int signin(String user_id, String user_pw){
    try{
      String SQL = "SELECT user_pw FROM kurly_table WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, user_id);
      rs = ps.executeQuery();
      
      if(rs.next()){
        if(rs.getString(1).equals(user_pw)){
          return 1;
        }
        else{
          return 0;
        }
      }
      else{
        return -1;
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
      catch(Exception e){ }
    }
    return -2;
  }

  //3. 회원정보수정 update
  public int update(UserDTO userDTO){
    try{
      String SQL = "UPDATE kurly_table SET user_pw=?,user_name=?,user_email=?,user_hp=?,user_addr=?,user_gender=?,user_birth=? WHERE user_id=?";
      ps = conn.prepareStatement(SQL);
      ps.setString(1, userDTO.getUser_pw());
      ps.setString(2, userDTO.getUser_name());
      ps.setString(3, userDTO.getUser_email());
      ps.setString(4, userDTO.getUser_hp());
      ps.setString(5, userDTO.getUser_addr());
      ps.setString(6, userDTO.getUser_gender());
      ps.setString(7, userDTO.getUser_birth_year()+userDTO.getUser_birth_month()+userDTO.getUser_birth_date());
      ps.setString(8, userDTO.getUser_id());
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
      catch(Exception e){ }
    }
    return -1;
  }

  //4. 회원탈퇴처리(회원정보삭제) delete
  public int delete(UserDTO userDTO){
      try{
        String SQL = "DELETE FROM kurly_table WHERE user_id=? AND user_pw=?";
        ps = conn.prepareStatement(SQL);
        ps.setString(1, userDTO.getUser_id());
        ps.setString(2, userDTO.getUser_pw());
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
        catch(Exception e){ }
      }
    return -1;
  }

  public UserDTO getJoin(String user_id){
    UserDTO userDTO = new UserDTO();
    String SQL = "SELECT * FROM kurly_table WHERE user_id=?";
    try{
      ps = conn.prepareStatement(SQL);
      ps.setString(1, user_id);
      rs = ps.executeQuery();

      if(rs.next()){
        userDTO.setUser_id(rs.getString("user_id"));
        userDTO.setUser_pw(rs.getString("user_pw"));
        userDTO.setUser_name(rs.getString("user_name"));
        userDTO.setUser_email(rs.getString("user_email"));
        userDTO.setUser_hp(rs.getString("user_hp"));
        userDTO.setUser_addr(rs.getString("user_addr"));
        userDTO.setUser_gender(rs.getString("user_gender"));
        userDTO.setUser_birth_year(rs.getString("user_birth").substring(0,4));
        userDTO.setUser_birth_month(rs.getString("user_birth").substring(4,6));
        userDTO.setUser_birth_date(rs.getString("user_birth").substring(6,8));
        userDTO.setUser_chooga(rs.getString("user_chooga"));
        userDTO.setUser_service_all(rs.getString("user_service_all"));
        userDTO.setUser_service_1(rs.getString("user_service_1"));
        userDTO.setUser_service_2(rs.getString("user_service_2"));
        userDTO.setUser_service_3(rs.getString("user_service_3"));
        userDTO.setUser_service_4(rs.getString("user_service_4"));
        userDTO.setUser_service_5(rs.getString("user_service_5"));
        userDTO.setUser_service_6(rs.getString("user_service_6"));
        userDTO.setUser_service_7(rs.getString("user_service_7"));
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
      catch(Exception e){ }
    }

    return userDTO;
  }

  public List<UserDTO> getJoinList(){
    UserDTO userDTO = null;
    List<UserDTO> list = new ArrayList<>();

    String SQL="select * from kurly_table";
    try{
      ps=conn.prepareStatement(SQL);
      rs = ps.executeQuery();
      while(rs.next()){
        userDTO = new UserDTO();
        userDTO.setUser_id(rs.getString("user_id"));
        userDTO.setUser_pw(rs.getString("user_pw"));
        userDTO.setUser_name(rs.getString("user_name"));
        userDTO.setUser_email(rs.getString("user_email"));
        userDTO.setUser_hp(rs.getString("user_hp"));
        userDTO.setUser_addr(rs.getString("user_addr"));
        userDTO.setUser_gender(rs.getString("user_gender"));
        userDTO.setUser_birth_year(rs.getString("user_birth").substring(0,4));
        userDTO.setUser_birth_month(rs.getString("user_birth").substring(4,6));
        userDTO.setUser_birth_date(rs.getString("user_birth").substring(6,8));
        userDTO.setUser_chooga(rs.getString("user_chooga"));
        userDTO.setUser_service_all(rs.getString("user_service_all"));
        userDTO.setUser_service_1(rs.getString("user_service_1"));
        userDTO.setUser_service_2(rs.getString("user_service_2"));
        userDTO.setUser_service_3(rs.getString("user_service_3"));
        userDTO.setUser_service_4(rs.getString("user_service_4"));
        userDTO.setUser_service_5(rs.getString("user_service_5"));
        userDTO.setUser_service_6(rs.getString("user_service_6"));
        userDTO.setUser_service_7(rs.getString("user_service_7"));

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
      catch(Exception e){ }
    }

    return list;
  }

}
