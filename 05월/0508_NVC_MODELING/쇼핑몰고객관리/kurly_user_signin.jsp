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
    <div id="wrap">
        <section id="signup">
            <div class="container">
                <div class="title">
                    <h2>로그인 페이지</h2>
                </div>
                <div class="content">
                    <form action="./kurly_user_signin_action.jsp" name="sign_up" id="signUp" method="post">
                        <ul>
                            <li><input type="text" autofocus required maxlength="16" name="user_id" id="userId" placeholder="아이디를 입력하세요"></li>
                            <li><input type="password" autofocus required maxlength="16" name="user_pw" id="userPw" placeholder="비밀번호를 입력하세요"></li>
                        </ul>
                        <div class="submit">
                            <button type="submit">로그인</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</body>
</html>