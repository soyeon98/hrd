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

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JDBC 데이터베이스 연동하기</title>
</head>
<body>
       
    <%
        Class.forName("com.mysql.jdbc.Driver");
        Connection conn = DriverManager.getConnection(
            "jdbc:mysql://localhost:3306/user","root","1234"
        );
        Statement stmt = conn.createStatement();
    %>

    <table>
        <tr>
            <th>아이디</th>
            <th>비밀번호</th>
         </tr> 
    <%
        // signin 테이블 데이터 가져오기
        ResultSet rs = stmt.executeQuery("select * from signin"); 

        while(rs.next()){
    %>
         <tr>
            <td>
                <%=rs.getString("user_id")%>
            </td>
            <td>
                <%=rs.getString("user_pw")%>
            </td>
         </tr>   
    
    <%        
        }
    %>
    </table>
    <style>
        table{margin: 0 auto; border-collapse: collapse;}
        td,th {border: 1px solid #ccc; height: 40px; padding: 0 30px;text-align: center;}
    </style>


</body>
</html>