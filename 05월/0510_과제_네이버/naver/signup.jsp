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
    <title>네이버 | 회원가입 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title"><div class="img"></div></div>
                <div class="content">
                    <form id="naverForm" name="naver_form" method="post" action="./signup_action.jsp">
                        <div class="join-box">
                            <label for="id">아이디</label>
                            <input type="text" name="id" id="id" placeholder="" required autofocus><span>@naver.com</span>
                        </div>
                        <div class="join-box">
                            <label for="pw">비밀번호</label>
                            <input type="text" name="pw" id="pw" placeholder="" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="pwOk">비밀번호 재확인</label>
                            <input type="text" name="pw_ok" id="pwOk" placeholder="" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="name">이름</label>
                            <input type="text" name="name" id="name" placeholder="" required autofocus>
                        </div>
                        <div class="join-box birth">
                            <label for="birth">생년월일</label>
                            <input type="text" name="year" id="year" placeholder="년(4자리)" required autofocus>
                            <select type="text" name="month" id="month" placeholder="" >
                                <option value="월" selected>월</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>   
                            <input type="text" name="date" id="date" placeholder="일" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="gender">성별</label>
                            <select type="text" name="gender" id="gender" class="gender">
                                <option value="성별" selected>성별</option>
                                <option value="여자">여자</option>
                                <option value="남자">남자</option>
                                <option value="선택 안함">선택 안함</option>
                            </select>
                        </div>
                        <div class="join-box">
                            <label for="email">본인 확인 이메일 <span>(선택)</span> </label>
                            <input type="text" name="email" id="email" placeholder="선택입력" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="hp">휴대전화</label>
                            <input type="text" name="hp" id="hp" placeholder="전화번호 입력" required autofocus>
                        </div>
                        <button type="submit">가입하기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>