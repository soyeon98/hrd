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
    <title>관심있는 언어 과목 체크박스 응답페이지</title>
    <style>
        table{width: 800px; margin: 0 auto;border-collapse: collapse;}
        table caption{width: 100%; font-size: 28px; font-weight: 600;padding: 100px 0 40px 0 ;}
        th,td{border: 1px solid #ccc; padding: 15px 10px; }
        th{background: #f0f0f0; }
        td{text-align: center;}
    </style>
</head>
<body>
    <%
        // 출력은 배열을 이용해 출력 - 반복문
        // 체크박스는 여러개 선택하므로 배열에 저장
        String name = request.getParameter("name");
        String[] lang = request.getParameterValues("lang");
    %>

    <%
        out.println("<table>");
        out.println("<caption>관심 언어 과목</caption>");
        out.println("<tr>");
            out.println("<th>"+ name  +"</th>");
        for(int i=0; i < lang.length; i++){
            out.println("<td>"+ lang[i]+"</td>");
        }    
        out.println("</tr>");
        out.println("</table>");
    %>
 


 
</body>
</html>