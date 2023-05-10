package naver;
import java.sql.*;
import java.util.*;
import naver.NaverDTO;

public class NaverDAO {

    private Connection conn;
    private PreparedStatement ps;
    private ResultSet rs;

    public NaverDAO(){

        try{
            String DBURL="jdbc:mysql://localhost:3306/soyeon";
            String  DBID="root";
            String  DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }

    // 1. signup
    public int signup(NaverDTO naverDTO){

        String SQL = "insert into naver1(id,pw,name,year,month,date,gender,email,hp) values(?,?,?,?,?,?,?,?,?)";
        try{
            ps=conn.prepareStatement(SQL);
            ps.setString(1, naverDTO.getId());
            ps.setString(2, naverDTO.getPw());
            ps.setString(3, naverDTO.getName());
            ps.setString(4, naverDTO.getYear());
            ps.setString(5, naverDTO.getMonth());
            ps.setString(6, naverDTO.getDate());
            ps.setString(7, naverDTO.getGender());
            ps.setString(8, naverDTO.getEmail());
            ps.setString(9, naverDTO.getHp());

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
    // 2. signin
    public int signin(NaverDTO naverDTO){
        String SQL ="select pw from naver1 where id=?";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, naverDTO.getId());

            rs= ps.executeQuery();

            if(rs.next()){
                if(rs.getString(1).equals(naverDTO.getPw())){
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

    // 3. update
    public int update(NaverDTO naverDTO){
        String SQL = "update naver1 set pw=?,name=?,year=?,month=?,date=?,gender=?,email=?,hp=? where id=?";
        try{
            ps=conn.prepareStatement(SQL);
           
            ps.setString(1, naverDTO.getPw());
            ps.setString(2, naverDTO.getName());
            ps.setString(3, naverDTO.getYear());
            ps.setString(4, naverDTO.getMonth());
            ps.setString(5, naverDTO.getDate());
            ps.setString(6, naverDTO.getGender());
            ps.setString(7, naverDTO.getEmail());
            ps.setString(8, naverDTO.getHp());
            ps.setString(9, naverDTO.getId());

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

    // 4. delete
    public int delete(NaverDTO naverDTO){
        String SQL = "delete from naver1 where id=? and pw=?";
        try{
            ps=conn.prepareStatement(SQL);
            ps.setString(1, naverDTO.getId());
            ps.setString(2, naverDTO.getPw());


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

    // 5. getJoin
    public NaverDTO getJoin(String id){
        NaverDTO naverDTO = new NaverDTO();
        String SQL = "select * from naver1 where id=?";

        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, id);

            rs=ps.executeQuery();
            if(rs.next()){
                naverDTO.setId(id);
                naverDTO.setPw(rs.getString("pw"));
                naverDTO.setName(rs.getString("name"));
                naverDTO.setYear(rs.getString("year"));
                naverDTO.setMonth(rs.getString("month"));
                naverDTO.setDate(rs.getString("date"));
                naverDTO.setGender(rs.getString("gender"));
                naverDTO.setEmail(rs.getString("email"));
                naverDTO.setHp(rs.getString("hp"));
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
        return naverDTO;
    }

    // 6. getJoinList
    public List<NaverDTO> getJoinList(){
        NaverDTO naverDTO=null;
        List<NaverDTO> list = new ArrayList<>();

        String SQL = "select * from naver1";
        try{
            ps = conn.prepareStatement(SQL);    
            rs = ps.executeQuery();
            while(rs.next()){
                naverDTO = new NaverDTO();
                naverDTO.setId(rs.getString("id"));
                naverDTO.setPw(rs.getString("pw"));
                naverDTO.setName(rs.getString("name"));
                naverDTO.setYear(rs.getString("year"));
                naverDTO.setMonth(rs.getString("month"));
                naverDTO.setDate(rs.getString("date"));
                naverDTO.setGender(rs.getString("gender"));
                naverDTO.setEmail(rs.getString("email"));
                naverDTO.setHp(rs.getString("hp"));

                list.add(naverDTO);
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
