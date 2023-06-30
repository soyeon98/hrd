<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%> 
<jsp:useBean id="newBeans" class="use_bean.Beans" scope="page"/>

<jsp:setProperty property="userId" name="newBeans"/>
<jsp:setProperty property="userPw" name="newBeans"/>
<jsp:setProperty property="userName" name="newBeans"/>
<jsp:setProperty property="userHp" name="newBeans"/>
<jsp:setProperty property="userAddr" name="newBeans"/>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            *{text-align: center;}
            div{background: url(../../0425_dto_혼자해보기/beansdto/img/다운로드1.jpg) no-repeat; width: 517px; height: 510px; margin: 0 auto;}
        </style>
    </head>
    <body>
        
        <h2><%=newBeans.getUserId()%></h2>
        <h2><%=newBeans.getUserPw()%></h2>
        <h2><%=newBeans.getUserName()%></h2>
        <h2><%=newBeans.getUserHp()%></h2>
        <h2><%=newBeans.getUserAddr()%></h2>
        <div></div>

    </body>
</html>