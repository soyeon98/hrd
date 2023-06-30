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
    <title>회원가입</title>
    <style>
        *{ box-sizing: border-box; margin: 0; padding: 0;}
        #wrap{width: 100%;}
        #wrap form{width: 100%;max-width: 800px; margin: 100px auto; background: #f5f5f5; padding: 50px 40px;}
        #wrap form h1{text-align: center; font-size: 35px; font-weight: 600;}
        #wrap form ul{width: 100%; list-style: none; padding: 30px 0;}
        #wrap form ul li{width: 100%;margin: 15px 0;}
        #wrap form ul li input{width: 100%; height: 50px; border: 1px solid #ddd; background: #fff; padding: 0 15px; outline: 0; font-size: 15px; border-radius: 3px;}
        #wrap form button{width: 100%; height: 50px; color: #fff; font-size: 17px; background: rgb(243, 196, 96); border: 0; font-weight: 600; border-radius: 3px;}
    </style>
</head>
<body>
    <div id="wrap">
        <form name="sign_in_form" id="signInForm" method="post" action="./user_sign_in_insert.jsp">
            <h1>회원가입</h1>
            <ul>
                <li><input type="text" name="user_id" id="userId" placeholder="아이디를 입력하세요."></li>
                <li><input type="text" name="user_pw" id="userPw" placeholder="비밀번호를 입력하세요."></li>
                <li><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요."></li>
                <li><input type="text" name="user_hp" id="userHp" placeholder="휴대폰 번호를 입력하세요."></li>
                <li><input type="text" name="user_email" id="userEmail" placeholder="이메일을 입력하세요."></li>
            </ul>
            <button type="submit" id="submitBtn">등록</button>
        </form>
    </div>
</body>
</html>