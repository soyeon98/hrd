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
        <%
            String loginId = null;
            if(session.getAttribute("user_id")!=null){
                loginId=(String)session.getAttribute("user_id");
            }
        %>
        <section id="signup">
            <div class="container">
                <div class="title">
                    <h2>정보수정</h2>
                </div>
                <div class="content">
                    <form action="./kurly_user_update_action.jsp" name="sign_up" id="signUp" method="post">
                        <ul>
                            <li><input type="text" autofocus required maxlength="16" name="user_id" id="userId" placeholder="등록된 아이디를 입력하세요" value="<%= loginId %>"></li>
                            <li><input type="password" autofocus required maxlength="16" name="user_pw" id="userPw" placeholder="수정할 비밀번호를 입력하세요"></li>
                            <li><input type="text" autofocus required maxlength="30" name="user_name" id="userName" placeholder="수정할 이름를 입력하세요"></li>
                            <li><input type="text" autofocus required maxlength="250" name="user_email" id="userEmail" placeholder="수정할 이메일을 입력하세요"></li>
                            <li><input type="text" autofocus required maxlength="13" name="user_hp" id="userHp" placeholder="수정할 휴대폰 번호를 입력하세요"></li>
                            <li><input type="text" autofocus required maxlength="250" name="user_addr" id="userAddr" placeholder="수정할 주소를 입력하세요"></li>
                            <li>
                                <input type="radio" name="user_gender" id="userMale" value="남성">
                                <label for="userMale">남성</label>
                                <input type="radio" name="user_gender" id="userFeMale" value="여성">
                                <label for="userFeMale">여성</label>
                                <input type="radio" name="user_gender" id="userNone" value="선택안함">
                                <label for="userNone">선택안함</label>
                            </li>
                            <li><input type="text" name="user_birth" id="userBirth" placeholder="수정할 생년월일을 입력하세요"></li>
                        </ul>
                        <div class="submit">
                            <button type="submit">수정하기</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</body>
</html>