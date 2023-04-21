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
    String user_gender = request.getParameter("user_gender");    
    String gaib_path = request.getParameter("gaib_path");    
    String addr = request.getParameter("addr");    
    String memo = request.getParameter("memo");    
%>

<%
    // 1. JDBC 드라이버 로딩
    Class.forName("com.mysql.jdbc.Driver");

    // 2. DB 인증(Authentication)과 연결(Connection)
    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/soyeon","root","1234"
    );
    // 3.  SQL
    Statement st = conn.createStatement();

    // 4-1 SQL  ? 들어갈 변수 개수
    String sql="INSERT INTO sign_in(id,pw,gender,path,addr,memo) VALUES(?,?,?,?,?,?)";
    // 4-2 SQL
    PreparedStatement ps = conn.prepareStatement(sql);

    ps.setString(1,id);
    ps.setString(2,pw);
    ps.setString(3,user_gender);
    ps.setString(4,gaib_path);
    ps.setString(5,addr);
    ps.setString(6,memo);

    // 5. SQL 실행
    ps.executeUpdate();

    // 6. 닫기
    ps.close();
    conn.close();

%>

<script>
    location.href="./sign_in_view.jsp";
</script>