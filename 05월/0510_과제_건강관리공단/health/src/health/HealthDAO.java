package health;
import java.sql.*;
import java.util.*;
import health.HealthDTO;

public class HealthDAO {
    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public HealthDAO(){
        
        try{
            String DBURL ="jdbc:mysql://localhost:3306/soyeon";
            String DBID ="root";
            String DBPW ="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);

        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
    // 1. signup
    public int signup(HealthDTO healthDTO){
        String SQL ="insert into gaib1(num,sign1,sign2,id,pw,chk_que,chk_ans,hp,name,email,recieve) values(?,?,?,?,?,?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, healthDTO.getNum());
            ps.setString(2, healthDTO.getSign1());
            ps.setString(3, healthDTO.getSign2());
            ps.setString(4, healthDTO.getId());
            ps.setString(5, healthDTO.getPw());
            ps.setString(6, healthDTO.getChk_que());
            ps.setString(7, healthDTO.getChk_ans());
            ps.setString(8, healthDTO.getHp());
            ps.setString(9, healthDTO.getName());
            ps.setString(10, healthDTO.getEmail());
            ps.setString(11, healthDTO.getRecieve());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ 
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 
        return -1;
    }
    // 2. signin
    public int signin(HealthDTO healthDTO){ //사업장 관리번호 비번으로 로그인
        String SQL ="select pw from gaib1 where num=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, healthDTO.getNum());

            rs= ps.executeQuery();

            if(rs.next()){
                if(rs.getString(1).equals(healthDTO.getPw())){
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
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 
        return -2;
    }
    // 3. update
    public int update(HealthDTO healthDTO){ //사업장 관리번호, 아이디 같게
        String SQL ="update gaib1 set sign1=?,sign2=?,pw=?,chk_que=?,chk_ans=?,hp=?,name=?,email=?,recieve=? where num=? and id =?";
        try{
            ps = conn.prepareStatement(SQL);
           
            ps.setString(1, healthDTO.getSign1());
            ps.setString(2, healthDTO.getSign2());         
            ps.setString(3, healthDTO.getPw());
            ps.setString(4, healthDTO.getChk_que());
            ps.setString(5, healthDTO.getChk_ans());
            ps.setString(6, healthDTO.getHp());
            ps.setString(7, healthDTO.getName());
            ps.setString(8, healthDTO.getEmail());
            ps.setString(9, healthDTO.getRecieve());
            ps.setString(10, healthDTO.getNum());
            ps.setString(11, healthDTO.getId());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ 
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 
        return -1;
    }
    // 4. delete
    public int delete(HealthDTO healthDTO){ // 사업장 관리번호 비번 같아야 탈퇴
        String SQL ="delete from gaib1 where num=? and pw=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, healthDTO.getNum());
            ps.setString(2, healthDTO.getPw());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ 
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 
        return -1;
    }
    // 5. getJoin
    public HealthDTO getJoin(String num){
        HealthDTO healthDTO = new HealthDTO();
        String SQL ="select * from gaib1 where num=?";
        try{
            ps = conn.prepareStatement(SQL);

            ps.setString(1, num);
         

            rs = ps.executeQuery();
            if(rs.next()){
                healthDTO.setNum(num);
                healthDTO.setId(rs.getString("id"));
                healthDTO.setSign1(rs.getString("sign1"));
                healthDTO.setSign2(rs.getString("sign2"));
                healthDTO.setPw(rs.getString("pw"));
                healthDTO.setChk_que(rs.getString("chk_que"));
                healthDTO.setChk_ans(rs.getString("chk_ans"));
                healthDTO.setHp(rs.getString("hp"));
                healthDTO.setName(rs.getString("name"));
                healthDTO.setEmail(rs.getString("email"));
                healthDTO.setRecieve(rs.getString("recieve"));


            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ 
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 
        return healthDTO;
    } 
    // 6. getJoinList
    public List<HealthDTO> getJoinList(){
        HealthDTO healthDTO = null;
        List<HealthDTO> list = new ArrayList<>();
        String SQL = "select * from gaib1";

        try{
            ps=conn.prepareStatement(SQL);
            rs= ps.executeQuery();
            while(rs.next()){
                healthDTO = new HealthDTO();
                healthDTO.setNum(rs.getString("num"));
                healthDTO.setId(rs.getString("id"));
                healthDTO.setSign1(rs.getString("sign1"));
                healthDTO.setSign2(rs.getString("sign2"));
                healthDTO.setPw(rs.getString("pw"));
                healthDTO.setChk_que(rs.getString("chk_que"));
                healthDTO.setChk_ans(rs.getString("chk_ans"));
                healthDTO.setHp(rs.getString("hp"));
                healthDTO.setName(rs.getString("name"));
                healthDTO.setEmail(rs.getString("email"));
                healthDTO.setRecieve(rs.getString("recieve"));
                list.add(healthDTO);
            }
        }
        catch(Exception e){
            e.printStackTrace();
        }
        finally{ 
            try{
                if(rs != null){rs.close();}
                if(ps != null){ps.close();}
                if(conn != null){conn.close();}
            }
            catch(Exception e){ }
        } 

        return list;
    }

}
