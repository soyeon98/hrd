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
    Class.forName("com.mysql.jdbc.Driver");

    Connection conn= DriverManager.getConnection("jdbc:mysql://localhost:3306/soyeon","root","1234");

    PreparedStatement ps = conn.prepareStatement("insert into todo(list) values(?)"); 
    ps.setString(1,"집에 가고싶다...");
    ps.executeUpdate();
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>