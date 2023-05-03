package member;
import java.sql.*;

public class MemberDAO {
    private Connection conn=null;
    private PreparedStatement ps=null;

    public MemberDAO(){
        String DBURL="jdbc:mysql://localhost:3306/soyeon";
        String DBID="root";
        String DBPW="1234";


        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);

        } 
        catch(Exception e){
            e.printStackTrace();
        }
    }
    public int insert(MemberDTO memberDTO){
        try{
            String SQL = "INSERT INTO member() VALUES(?,?,?,?,?,?,?,?,?,?,?)";
            ps = conn.prepareStatement(SQL);
            ps.setString(1, memberDTO.getNum());
            ps.setString(2, memberDTO.getSign1());
            ps.setString(3, memberDTO.getSign2());
            ps.setString(4, memberDTO.getId());
            ps.setString(5, memberDTO.getPw());
            ps.setString(6, memberDTO.getChk_que());
            ps.setString(7, memberDTO.getChk_ans());
            ps.setString(8, memberDTO.getHp());
            ps.setString(9, memberDTO.getName());
            ps.setString(10, memberDTO.getEmail());
            ps.setString(11, memberDTO.getReceive());
            
            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }

    public int update(MemberDTO memberDTO){
        try{
            String SQL ="update member set pw=? where num=?";
            ps = conn.prepareStatement(SQL);
            ps.setString(1, memberDTO.getPw());
            ps.setString(2, memberDTO.getNum());

            return ps.executeUpdate();
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return -1;
    }


}
