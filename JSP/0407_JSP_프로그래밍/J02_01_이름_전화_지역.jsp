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
    <title>이름 전화번호 지역 전송하는 폼</title>
</head>
<body>
    
    <div id="wrap">
        <form name="member_form" id="memberForm" method="post" action="./J02_02_응답폼_응답.jsp">
            <label for="userName"><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요" required autofocus></label>
            <label for="userHp"><input type="text" name="user_hp"  id="userHp" placeholder="전화번호를 입력하세요" required autofocus></label>
            <label for="userArea">
                <select name="user_area" id="userArea" required autofocus>
                    <option value="" selected>거주 지역을 입력하세요</option>
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="인천">인천</option>
                    <option value="강원">강원</option>
                    <option value="춘천">춘천</option>
                    <option value="전라">전라</option>
                    <option value="광주">광주</option>
                    <option value="경상">경상</option>
                    <option value="제주">제주</option>
                    <option value="울릉">울릉</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="울산">울산</option>
                </select>
            </label>
            <input type="submit" value="입력완료">
        </form>
    </div>

</body>
</html>