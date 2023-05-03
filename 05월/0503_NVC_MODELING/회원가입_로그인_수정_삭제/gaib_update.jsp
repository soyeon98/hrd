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
    <title>회원 정보 수정 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <section id="signup">
            <div class="container">
                <div class="title">
                    <h2>회원 정보 수정 폼</h2>
                </div>
                <div class="content">
                    <form name="update_form" id="updateForm" method="post" action="./gaib_update_action.jsp">
                        <ul>
                            <li><input type="text" maxlength="16" name="user_id" id="userId" placeholder="등록된 아이디를 입력하세요."></li>
                            <li><input type="text" maxlength="16" name="user_pw" id="userPw" placeholder="수정할 비밀번호를 입력하세요."></li>
                            <li><input type="text" maxlength="30" name="user_name" id="userName" placeholder="수정할 이름을 입력하세요."></li>
                            <li><input type="text" maxlength="13" name="user_hp" id="userHp" placeholder="수정할 휴대폰 번호를 입력하세요."></li>
                            <li><input type="text" maxlength="250" name="user_email" id="userEmail" placeholder="수정할 이메일을 입력하세요."></li>
                            <li><input type="text" maxlength="250" name="user_adr" id="userAdr" placeholder="수정할 주소를 입력하세요."></li>
                        </ul>
                        <div class="submit-btn-box">
                            <button type="submit">수 정</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>

</body>
</html>