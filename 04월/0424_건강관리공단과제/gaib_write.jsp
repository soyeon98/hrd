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
    String num = request.getParameter("num");    
    String sign1 = request.getParameter("sign1");    
    String sign2 = request.getParameter("sign2");    
    String id = request.getParameter("id");    
    String pw = request.getParameter("pw");    
    String chk_que = request.getParameter("chk_que");    
    String chk_ans = request.getParameter("chk_ans");    
    String hp = request.getParameter("hp");    
    String name = request.getParameter("name");    
    String email = request.getParameter("email");    
    String recieve = request.getParameter("recieve");    
%>

<%

    Class.forName("com.mysql.jdbc.Driver");


    Connection conn = DriverManager.getConnection(
        "jdbc:mysql://localhost:3306/soyeon","root","1234"
    );
 
    Statement st = conn.createStatement();

 
    String sql="INSERT INTO gaib1(num,sign1,sign2,id,pw,chk_que,chk_ans,hp,name,email,recieve) VALUES(?,?,?,?,?,?,?,?,?,?,?)";

    PreparedStatement ps = conn.prepareStatement(sql);

    ps.setString(1,num);
    ps.setString(2,sign1);
    ps.setString(3,sign2);
    ps.setString(4,id);
    ps.setString(5,pw);
    ps.setString(6,chk_que);
    ps.setString(7,chk_ans);
    ps.setString(8,hp);
    ps.setString(9,name);
    ps.setString(10,email);
    ps.setString(11,recieve);


    ps.executeUpdate();


    ps.close();
    conn.close();

%>

<script>
    location.href="./gaib_view.jsp";
</script>