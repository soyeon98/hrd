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
            String user_name = request.getParameter("user_name"); // 폼의 name 속성에서 가져온다
            // 나이 데이터 정수형으로 변환하기 Integer.parseInt()
            int user_age = Integer.parseInt(request.getParameter("user_age")); // 폼의 name 속성에서 가져온다
        %>

        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><%=user_name%></td>
                    <td>
                        <%=user_age%>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                       <%
                            if(user_age>=20){
                                out.println("회원가입 <i>가능한</i> 나이입니다.");
                            }
                            else{                                
                                out.println("<em>미성년자로</em> 회원가입 <i>불가능한</i> 나이입니다.");
                            }
                        %>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                       <%
                            if(user_age>=20){
                        %>        
                                가입되었습니다.
                        <%        
                            }
                            else{ 
                        %>                                      
                               가입불가합니다.
                        <%        
                            }
                        %>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</body>
</html>