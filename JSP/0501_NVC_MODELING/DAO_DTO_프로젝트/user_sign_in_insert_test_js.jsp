<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="java.io.PrintWriter" %>

<%
    request.setCharacterEncoding("UTF-8");
%>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DTO</title>
</head>
<body>
    <%
        PrintWriter script = response.getWriter();
        script.println("<script>");
        script.println("alert('입력값이 비워있는 항목이 있습니다.\\n 다시 입력 후 등록 하세요');");
        script.println("history.go(-1);");
        script.println("</script>");
    
    %>
</body>
</html>