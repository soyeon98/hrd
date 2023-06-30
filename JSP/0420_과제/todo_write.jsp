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
    String todo = request.getParameter("todo");
%>

<%
    Class.forName("com.mysql.jdbc.Driver");

    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/soyeon","root","1234");

    Statement st = conn.createStatement();

    String sql="INSERT INTO todo(list) VALUES(?)";

    PreparedStatement ps = conn.prepareStatement(sql);
    ps.setString(1,todo);

    ps.executeUpdate();

    ps.close();
    conn.close();
%>

<script>
    location.href="./todo_view.jsp";
</script>