<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@
    page
    import="java.sql.*"
%>
<% 
    request.setCharacterEncoding("UTF-8");    
    String id = request.getParameter("id");    
    String pw = request.getParameter("pw");    
    String name = request.getParameter("name");      
    String year = request.getParameter("year");    
    String month = request.getParameter("month");    
    String date = request.getParameter("date");    
    String gender = request.getParameter("gender");    
    String email = request.getParameter("email");    
    String hp = request.getParameter("hp");    
%>

<%

    Class.forName("com.mysql.jdbc.Driver");


    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/soyeon","root","1234"
    );
 
    Statement st = conn.createStatement();

 
    String sql="INSERT INTO naver1(id,pw,name,year,month,date,gender,email,hp) VALUES(?,?,?,?,?,?,?,?,?)";

    PreparedStatement ps = conn.prepareStatement(sql);

    ps.setString(1,id);
    ps.setString(2,pw);
    ps.setString(3,name);
    ps.setString(4,year);
    ps.setString(5,month);
    ps.setString(6,date);
    ps.setString(7,gender);
    ps.setString(8,email);
    ps.setString(9,hp);


    ps.executeUpdate();


    ps.close();
    conn.close();

%>

<script>
    location.href="./naver_view.jsp";
</script>