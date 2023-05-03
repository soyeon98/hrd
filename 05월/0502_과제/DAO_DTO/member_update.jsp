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
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="up">
                    <a href="./">회원 가입 정보 목록</a>
                </div>
                <div class="title">
                    <h1>정보 수정</h1>
                </div>
                <div class="content">
                    <p><img src="./img/ico-compulsory.png" alt="">표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을 반드시 눌러주세요.</p>
                    <form action="./member_update_action.jsp" method="post" name="gaib_form" id="gaibForm" >
                        <table>
                            <tr>
                                <th>사업장관리번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="num" id="num" ></td>
                            </tr>
                            <tr>
                                <th>수정 할 비밀번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="pw" id="pw" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" ></td>
                            </tr>
                        </table>
                        <div class="btn-box">
                            <button type="submit">확인</button>
                            <button>취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>