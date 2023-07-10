<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./public/css/style.css">
</head>
<body>
    <%
        String loginId = null;
        if(session.getAttribute("user_id")!=null){
            loginId=(String)session.getAttribute("user_id");
        }
    %>
    <div id="wrap">
        <section id="signup">
            <div class="container">
                <div class="title">
                    <h2>회원 탈퇴</h2>
                </div>
                <div class="content">
                    <form action="./kurly_user_delete_action.jsp" name="delete" id="delete" method="post">
                        <ul>
                            <li><input type="text" autofocus required maxlength="16" name="user_id" id="userId" placeholder="삭제할 아이디를 입력하세요" value=<%=loginId%>></li>
                            <li><input type="text" autofocus required maxlength="16" name="user_pw" id="userPw" placeholder="삭제할 비밀번호를 입력하세요"></li>
                        </ul>
                        <div class="submit">
                            <button type="submit">탈퇴하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</body>
</html>