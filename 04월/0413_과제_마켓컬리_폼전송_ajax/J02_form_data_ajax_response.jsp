<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<% 
    // 폼 전송 받은 힌글깨짐현상 셋팅 인코딩
    request.setCharacterEncoding("UTF-8");    
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>마켓컬리 회원가입 응답폼</title>
    <style>
        *{margin: 0;padding: 0;box-sizing: border-box;vertical-align: middle;}
        ul{list-style: none;}
        table{width: 1400px; margin: 0 auto;border-collapse: collapse;}
        table caption{width: 100%; font-size: 28px; font-weight: 600;padding: 100px 0 40px 0 ;}
        th,td{border: 1px solid #ccc; height: 50px; }
        th{background: #f0f0f0; }
        td{text-align: center;}
    </style>
</head>
<body>
    <%
        String userid = request.getParameter("userid");
        String userpw = request.getParameter("pw");
        String userpw2 = request.getParameter("pw2");
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String hp = request.getParameter("hp");
        String addr = request.getParameter("addr");
        String addr2 = request.getParameter("addr2");
        String user_gender = request.getParameter("usergender");
        String user_birth_year = request.getParameter("user_birth_year");
        String user_birth_month = request.getParameter("user_birth_month");
        String user_birth_date = request.getParameter("user_birth_date");
     

    
    %>

    <%
        String res="";
        res+="<table>";
            res+="<caption>회원가입 응답 폼</caption>";
            res+="<tr>";
            res+="<th>아이디</th>";
            res+="<th>비밀번호</th>"; 
            res+="<th>비밀번호 확인</th>";
            res+="<th>이름</th>";
            res+="<th>이메일</th>";
            res+="<th>휴대폰</th>";
            res+="<th>주소</th>";
            res+="<th>상세주소</th>";
            res+="<th>성별</th>";
            res+="<th>생년월일</th>";
            res+="<th>이용약관</th>";
            res+="</tr>";
            res+="<tr>";
            res+="<td>"+userid+"</td>";
            res+="<td>"+userpw+"</td>";
            res+="<td>"+userpw2+"</td>";
            res+="<td>"+name+"</td>";
            res+="<td>"+email+"</td>";
            res+="<td>"+hp+"</td>";
            res+="<td>"+addr+"</td>";
            res+="<td>"+addr2+"</td>";
            res+="<td>"+user_gender+"</td>";
            res+="<td>"+user_birth_year+user_birth_month+user_birth_date+"</td>";
            
                
                res+="</tr>";
        res+="</table>";
        out.println(res);
    %>
</body>
</html>