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
    ResultSet rs = st.executeQuery("SELECT * FROM naver1");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 목록</title>
    <link rel="stylesheet" href="./css/view.css">
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./">회원 가입</a>
        </div>
        <table>
            <caption>회원가입 정보</caption>           
            <thead>
                <tr>
                    <th>회원 번호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>본인확인이메일</th>
                    <th>휴대전화</th>
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
                        <td><%=rs.getString("name")%></td>
                        <td><%=rs.getString("year")%>-<%=rs.getString("month")%>-<%=rs.getString("date")%></td>
                        <td><%=rs.getString("gender")%></td>
                        <td><%=rs.getString("email")%></td>
                        <td><%=rs.getString("hp")%></td>
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