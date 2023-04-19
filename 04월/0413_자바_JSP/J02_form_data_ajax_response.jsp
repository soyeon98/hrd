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
    <title>응답페이지</title>
</head>
<body>
    <%
        String name = request.getParameter("name");
        String hp = request.getParameter("hp");
    %>

    <%
        String result = "";
        result += "<p>이름 : " + name + "</p>";
        result += "<p>휴대폰 번호 : " + hp + "</p>";
        out.println(result);
    %>

</body>
</html>