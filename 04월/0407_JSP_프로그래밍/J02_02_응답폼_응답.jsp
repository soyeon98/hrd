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
        table{width: 50%; margin: 0 auto;border-collapse: collapse;}
        th,td{border: 1px solid #ccc; height: 50px;   }
        td{text-align: center;}
        td i,em{color: #c33; font-style: normal;}
    </style>

</head>
<body>
    
    <div id="wrap">


        <%
            // 폼전송 시 요청한 정보 데이터 이름, 나이를 받는다 
            // request.getParameter()
            String user_name = request.getParameter("user_name");
            String user_hp = request.getParameter("user_hp");
            String user_area = request.getParameter("user_area");
 
        %>

        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>휴대폰 번호</th>
                    <th>거주지역</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%=user_name%> 님</td>
                    <td><%=user_hp%></td>
                    <td><%=user_area%></td>
                </tr>

            </tbody>
        </table>
    </div>

</body>
</html>