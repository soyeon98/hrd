<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<jsp:useBean id="healthBeans" class="health.Health_usebean" scope="page"/>

<jsp:setProperty property="num" name="healthBeans"/>
<jsp:setProperty property="sign1" name="healthBeans"/>
<jsp:setProperty property="sign2" name="healthBeans"/>
<jsp:setProperty property="id" name="healthBeans"/>
<jsp:setProperty property="pw" name="healthBeans"/>
<jsp:setProperty property="chk_que" name="healthBeans"/>
<jsp:setProperty property="chk_ans" name="healthBeans"/>
<jsp:setProperty property="hp" name="healthBeans"/>
<jsp:setProperty property="name" name="healthBeans"/>
<jsp:setProperty property="email" name="healthBeans"/>
<jsp:setProperty property="recieve" name="healthBeans"/>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
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

                    <th>사업장관리번호</th>
                    <th>사업장기호</th>
                    <th>단위사업장기호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호 분실 시 확인 질문</th>
                    <th>비밀번호 분실 시 확인 답변</th>
                    <th>전화번호</th>
                    <th>업무담당자명</th>
                    <th>이메일</th>
                    <th>소식지 수신여부</th>

                </tr>
            </thead>
            <tbody>

                    <tr>
        
                        <td><%=healthBeans.getNum()%></td>
                        <td><%=healthBeans.getSign1()%></td>
                        <td><%=healthBeans.getSign2()%></td>
                        <td><%=healthBeans.getId()%></td>
                        <td><%=healthBeans.getPw()%></td>
                        <td><%=healthBeans.getChk_que()%></td>
                        <td><%=healthBeans.getChk_ans()%></td>
                        <td><%=healthBeans.getHp()%></td>
                        <td><%=healthBeans.getName()%></td>
                        <td><%=healthBeans.getEmail()%></td>
                        <td><%=healthBeans.getRecieve()%></td>
              
                    </tr>

            </tbody>
        </table>    
        
    </div>
</body>
</html>