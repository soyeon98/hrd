<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>이름과 나이 전송하는 폼전송</title>
</head>
<body>
    
    <div id="wrap">
        <form name="age_form" id="ageForm" method="post" action="./J01_02_응답폼_응답.jsp">
            <label for="userName"><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요" required autofocus></label>
            <label for="userAge"><input type="text" name="user_age"  id="userAge" placeholder="나이를 입력하세요" required autofocus></label>
            <input type="submit" value="입력완료">
        </form>
    </div>

</body>
</html>