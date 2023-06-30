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
    <title>네이버 | 로그인 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title"><div class="img"></div></div>
                <div class="content">
                    <form id="naverForm" name="naver_form" method="post" action="./signin_action.jsp">
                        <div class="join-box">
                            <label for="id">아이디</label>
                            <input type="text" name="id" id="id" placeholder="" required autofocus><span>@naver.com</span>
                        </div>
                        <div class="join-box">
                            <label for="pw">비밀번호</label>
                            <input type="text" name="pw" id="pw" placeholder="" required autofocus>
                        </div>
                        <button type="submit">로그인</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>