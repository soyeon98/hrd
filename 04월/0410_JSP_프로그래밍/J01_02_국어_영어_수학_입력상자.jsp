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
    <title>점수 응답 폼</title>
    <style>
        table{width: 800px; margin: 0 auto;border-collapse: collapse;}
        table caption{width: 100%; font-size: 28px; font-weight: 600;padding: 100px 0 40px 0 ;}
        th,td{border: 1px solid #ccc; height: 50px; }
        th{background: #f0f0f0; }
        td{text-align: center;}
    </style>
</head>
<body>
    <div id="wrap">
        <%
            String user_name = request.getParameter("user_name");
            int korean_score =Integer.parseInt(request.getParameter("korean_score"));
            int english_score = Integer.parseInt(request.getParameter("english_score"));
            int math_score = Integer.parseInt(request.getParameter("math_score"));
            int sum = korean_score+english_score+math_score;
            double sub = Math.round((double)(korean_score+english_score+math_score)/3);
        %>
        <!-- <table>
            <caption>중간 성적</caption>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>국어</th>
                    <th>영어</th>
                    <th>수학</th>
                    <th>총점</th>
                    <th>평균</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%=user_name%></td>
                    <td><%=korean_score%></td>
                    <td><%=english_score%></td>
                    <td><%=math_score%></td>
                    <td><%=sum%></td>
                    <td><%=sub%></td>
                </tr>
            </tbody>
        </table> -->

        <%
            out.println("<table>");
            out.println("<caption>중간 성적</caption>");
            out.println("<tr>");
            out.println("<td>"+ String.format("국어 %3d",korean_score)  +"</td>");
            out.println("<td>"+ String.format("영어 %3d",english_score)  +"</td>");
            out.println("<td>"+ String.format("수학 %3d",math_score)  +"</td>");
            out.println("</tr>");
            out.println("</table>");
        
        
        %>
    </div>
</body>
</html>