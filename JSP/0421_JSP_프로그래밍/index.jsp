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
    <title>가입 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./sign_in_view.jsp">회원 목록</a>
        </div>

        <form name="sign_form" id="signForm" method="post" action="./sign_in_write.jsp">
            <table>
                <caption>회원가입 폼</caption>
                <tr>
                    <td>아이디</td>
                    <td><input type="text" name="id" id="id"></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="text" name="pw" id="pw"></td>
                </tr>
                <tr>
                    <td>성별</td>
                    <td>
                        <label for="userMale"><input type="radio" name="user_gender" id="userMale" value="남">남</label>
                        <label for="userFemale"><input type="radio" name="user_gender" id="userFemale" value="여">여</label>
                    </td>
                </tr>
                <tr>
                    <td>가입경로</td>
                    <td>
                        <label for="gaibPath">
                            <select name="gaib_path" id="gaibPath">
                                <option value="웹검색">웹검색</option>
                                <option value="지인추천">지인추천</option>
                                <option value="광고">광고</option>
                            </select>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>주소지</td>
                    <td>
                        <label for="addr">
                            <select name="addr" id="addr">
                                <option value="서울">서울</option>
                                <option value="경기">경기</option>
                                <option value="인천">인천</option>
                                <option value="기타">기타</option>
                            </select>
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>메모</td>
                    <td><input type="text" name="memo" id="memo" class="memo"></td>
                </tr>
            </table>
            <button type="submit">가입</button>
        </form>
    </div>
</body>
</html>