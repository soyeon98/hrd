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
%>

<%
    Class.forName("com.mysql.jdbc.Driver");
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/user","root","1234");
    Statement st = conn.createStatement();
    ResultSet rs = st.executeQuery("SELECT * FROM todo_list");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO DO LIST 목록보기</title>
    <link rel="stylesheet" href="./css/view.css">
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./">TO DO WRITE</a>
        </div>
        <table>
            <caption>TO DO LIST</caption>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>할일 목록</th>
                    <th>작성날짜</th>
                </tr>
            </thead>
            <tbody>

                <%
                    while(rs.next()){
                %>
                    <tr>
                        <td><%=rs.getInt("idx")%></td>
                        <td><%=rs.getString("todo_list")%></td>
                        <td><%=rs.getDate("create_date")%></td>
                    </tr>
                <%
                    }
                %>
            </tbody>
        </table>

    </div>
</body>
</html>