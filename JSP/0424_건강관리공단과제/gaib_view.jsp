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
    ResultSet rs = st.executeQuery("SELECT * FROM gaib1");
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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
                    <th>회원번호</th>
                    <th>사업장관리번호</th>
                    <th>사업장기호</th>
                    <th>단위사업장기호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호 분실 시 확인 질문</th>
                    <th>비밀번호 분실 시 확인 답변</th>
                    <th>전화번호</th>
                    <th>업무담당자명</th>
                    <th>이메일</th>
                    <th>소식지 수신여부</th>
                    <th>가입날짜</th>
                </tr>
            </thead>
            <tbody>
                <%
                    while(rs.next()){            
                %>
                    <tr>
                        <td><%=rs.getInt("idx")%></td>
                        <td><%=rs.getString("num")%></td>
                        <td><%=rs.getString("sign1")%></td>
                        <td><%=rs.getString("sign2")%></td>
                        <td><%=rs.getString("id")%></td>
                        <td><%=rs.getString("pw")%></td>
                        <td><%=rs.getString("chk_que")%></td>
                        <td><%=rs.getString("chk_ans")%></td>
                        <td><%=rs.getString("hp")%></td>
                        <td><%=rs.getString("name")%></td>
                        <td><%=rs.getString("email")%></td>
                        <td><%=rs.getString("recieve")%></td>
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