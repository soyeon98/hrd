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
    Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/soyeon","root","1234");
    Statement st = conn.createStatement();
    ResultSet rs = st.executeQuery("SELECT * FROM todo");
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO DO LIST 목록</title>
    <style>
        *{margin: 0;padding: 0;vertical-align: middle; box-sizing: border-box;}
        #wrap{width: 100%;}
        #wrap table{width: 100%; max-width: 1000px; border-collapse: collapse; margin: 0 auto;}
        #wrap table caption{padding: 20px 0 50px 0;font-size: 40px; font-weight: 600; color: #000;}
        #wrap table th,td{ border-bottom: 1px solid #ddd;}
        #wrap table th{height: 60px;background: #f0f0f0; font-size: 17px; font-weight: 600; color: #000;border-top: 1px solid #aaa;}
        #wrap table td{height: 50px;color: #555;font-size: 15px;text-align: center;padding: 0 20px;}
        #wrap table td:nth-child(2){text-align: left;}
        #wrap .top{ width: 100%; max-width: 1000px; text-align: right;margin: 0 auto;padding: 50px 10px 20px 0;} 
        #wrap .top a{color: #aaa; font-size: 16px; font-weight: 600;text-decoration: none;transition: all 0.3s;} 
        #wrap .top a:hover{color: #333;}
    </style>
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./">할 일 쓰기</a>
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
                        <td><%=rs.getString("list")%></td>
                        <td><%=rs.getDate("date")%></td>
                    </tr>            
                <%
                    }
                %>
            </tbody>
        </table>
    </div>
</body>
</html>