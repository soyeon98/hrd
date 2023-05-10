<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<jsp:useBean id="naverBeans" class="naverbeans.Naver_form" scope="page"/>

<jsp:setProperty property="id" name="naverBeans"/>
<jsp:setProperty property="pw" name="naverBeans"/>
<jsp:setProperty property="name" name="naverBeans"/>
<jsp:setProperty property="year" name="naverBeans"/>
<jsp:setProperty property="month" name="naverBeans"/>
<jsp:setProperty property="date" name="naverBeans"/>
<jsp:setProperty property="gender" name="naverBeans"/>
<jsp:setProperty property="email" name="naverBeans"/>
<jsp:setProperty property="hp" name="naverBeans"/>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 목록</title>
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
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>이름</th>
                    <th>생년월일</th>
                    <th>성별</th>
                    <th>본인확인이메일</th>
                    <th>휴대전화</th>
                </tr>
            </thead>
            <tbody>

                    <tr>
                        <td><%=naverBeans.getId()%></td>
                        <td><%=naverBeans.getPw()%></td>
                        <td><%=naverBeans.getName()%></td>
                        <td><%=naverBeans.getYear()%>-<%=naverBeans.getMonth()%>-<%=naverBeans.getDate()%></td>
                        <td><%=naverBeans.getGender()%></td>
                        <td><%=naverBeans.getEmail()%></td>
                        <td><%=naverBeans.getHp()%></td>
                    </tr>

            </tbody>
        </table>    
        
    </div>
</body>
</html>