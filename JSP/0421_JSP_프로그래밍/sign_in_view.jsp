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
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/soyeon","root","1234");
    Statement st = conn.createStatement();
    ResultSet rs = st.executeQuery("SELECT * FROM sign_in");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원 목록</title>
    <link rel="stylesheet" href="./css/view.css">
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./">회원 가입</a>
        </div>
        <table>
            <caption>회원목록</caption>
            <thead>
                <tr>
                    <th>회원번호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>성별</th>
                    <th>가입경로</th>
                    <th>주소</th>
                    <th>메모</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <%
                    while(rs.next()){
                %>
                    <tr>
                        <td><%=rs.getInt("idx")%></td>
                        <td><%=rs.getString("id")%></td>
                        <td><%=rs.getString("pw")%></td>
                        <td><%=rs.getString("gender")%></td>
                        <td><%=rs.getString("path")%></td>
                        <td><%=rs.getString("addr")%></td>
                        <td><%=rs.getString("memo")%></td>
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