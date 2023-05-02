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
    <title>회원가입 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <form name="gaib_form" id="gaibForm" method="post" action="./gaib_insert_action.jsp">
            <div class="title">
                <h1>회원가입</h1>
            </div>
            <ul>
                <li><input type="text" name="user_id" id="userId" maxlength="16" placeholder="아이디를 입력하세요."></li>
                <li><input type="text" name="user_pw" id="userPw" maxlength="16" placeholder="비밀번호를 입력하세요."></li>
                <li><input type="text" name="user_name" id="userName" maxlength="30" placeholder="이름을 입력하세요."></li>
                <li><input type="text" name="user_hp" id="userHp" maxlength="13" placeholder="전화번호를 입력하세요."></li>
                <li><input type="text" name="user_email" id="userEamil" maxlength="250" placeholder="이메일을 입력하세요."></li>
            </ul>
            <div class="button-box">
                <button type="submit">가입</button>
            </div>
        </form>
    </div>
    
</body>
</html>