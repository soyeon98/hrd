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
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>폼 전송 응답 페이지</title>

    <style>
        table{width: 800px; margin: 0 auto;border-collapse: collapse;}
        table caption{width: 100%; font-size: 28px; font-weight: 600;padding: 100px 0 40px 0 ;}
        th,td{border: 1px solid #ccc; height: 50px;   }
        td{text-align: center;}
        td i,em{color: #c33; font-style: normal;}
    </style>

</head>
<body>
    
    <div id="wrap">


        <%
            String user_hak = request.getParameter("user_hak");
            String user_name = request.getParameter("user_name");
            String user_year = request.getParameter("user_year");
            String user_subject= request.getParameter("user_subject");
        %>
        <table>
            <caption>수강신청 폼</caption>
            <thead>
                <tr>
                    <th>학번</th>
                    <th>이름</th>
                    <th>학년</th>
                    <th>과목</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%=user_hak%></td>
                    <td><%=user_name%></td>
                    <td><%=user_year%></td>
                    <td><%=user_subject%></td>
                </tr>
            </tbody>
        </table>


    </div>

</body>
</html>