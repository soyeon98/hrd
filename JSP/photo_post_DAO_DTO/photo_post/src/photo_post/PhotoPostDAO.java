package photo_post;
import java.sql.*;
import java.util.*;

public class PhotoPostDAO {
    private Connection conn;
    private PreparedStatement ps;
    private Statement stmt;
    private ResultSet rs;

    public PhotoPostDAO(){
        try{
            String DBURL="jdbc:mysql://localhost:3306/Todays_House";
            String DBID="root";
            String DBPW="1234";
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(DBURL, DBID, DBPW);
        }
        catch(Exception e){
            e.printStackTrace();
        }
    }
 
    // 1. post
    public int post(PhotoPostDTO photoPostDTO){
        String SQL ="insert into photo_post(pyeong,type,style,file,place,memo) values(?,?,?,?,?,?)";
        try{
            ps = conn.prepareStatement(SQL);
            ps.setString(1, photoPostDTO.getPyeong());
            ps.setString(2, photoPostDTO.getType());
            ps.setString(3, photoPostDTO.getStyle());
            ps.setString(4, photoPostDTO.getFile());
            ps.setString(5, photoPostDTO.getPlace());
            ps.setString(6, photoPostDTO.getMemo());

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

    public ArrayList<PhotoPostDTO> select(){
        ArrayList<PhotoPostDTO> photolist = new ArrayList<>();
        PhotoPostDTO photoPostDTO = null;
        String SQL ="select * from photo_post";
        try{
            // stmt  = conn.createStatement();
            stmt = conn.createStatement();
            rs = stmt.executeQuery(SQL);
            if(rs.next()){

                photoPostDTO = new PhotoPostDTO();
                photoPostDTO.setPyeong(rs.getString("pyeong"));
                photoPostDTO.setType(rs.getString("type"));
                photoPostDTO.setStyle(rs.getString("style"));
                photoPostDTO.setFile(rs.getString("file"));
                photoPostDTO.setPlace(rs.getString("place"));
                photoPostDTO.setMemo(rs.getString("memo"));
                photoPostDTO.setWrite_date(rs.getString("write_date"));
                
                photolist.add(photoPostDTO);
            }

           return photolist;
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
        return photolist;
    }



    
}
