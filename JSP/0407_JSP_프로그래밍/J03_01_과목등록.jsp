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
    <title>과목등록</title>

    <style>
        *{margin: 0;padding: 0;box-sizing: border-box;vertical-align: middle;}
        #wrap{
            width: 100%;
            max-width: 500px;
            margin: 100px auto;
        }
        #wrap .title{text-align: center; padding: 0 0 10px 0;}
        form{width: 100%;}
        form div {width: 100%;margin: 20px 0;}
        form div.year {display: flex;}
        form div label{width: 100%;}
        form div label input[type=text]{width: 100%;padding: 15px 15px;font-size: 14px;border-radius: 3px;border: 1px solid #ccc;}
        form div label input[type=radio]{display: inline-flex;align-items: center;justify-content: space-between; margin: 0 15px 0 25px;text-align: center;border-radius: 3px;border: 1px solid #ccc;}
        form div label select{width: 100%;padding: 15px 15px;border-radius: 3px;border: 1px solid #ccc;font-size: 14px;}
        form input[type=submit]{width: 100%;background: #fff;border: 1px solid #000;padding: 15px 15px;cursor: pointer;font-size: 14px; font-weight: 600; border-radius: 3px;}

    </style>

</head>
<body>
    
    <div id="wrap">
        <div class="title">
            <h1>수강신청 폼</h1>
        </div>
        <form name="member_form" id="memberForm" method="post" action="./J03_02_응답폼_응답.jsp">
            <div>
                <label for="userHak"><input type="text" name="user_hak" id="userHak" placeholder="학번을 입력하세요" required autofocus></label>
            </div>
            <div>
                <label for="userName"><input type="text" name="user_name" id="userName" placeholder="이름을 입력하세요" required autofocus></label>
            </div>
            <div class="year">
                <label for="user1Year"><input type="radio" name="user_year" id="user1Year" value="1학년" checked="true">1학년</label>
                <label for="user2Year"><input type="radio" name="user_year" id="user2Year" value="2학년">2학년</label>
                <label for="user3Year"><input type="radio" name="user_year" id="user3Year" value="3학년">3학년</label>
                <label for="user4Year"><input type="radio" name="user_year" id="user4Year" value="4학년">4학년</label>
            </div>
            <div>
                <label for="userSubject">
                    <select name="user_subject" id="userSubject" required autofocus>
                        <option value="" selected>과목을 선택하세요</option>
                        <option value="경제">경제</option>
                        <option value="증권">증권</option>
                        <option value="세무">세무</option>
                        <option value="회계">회계</option>
                        <option value="데이터분석">데이터분석</option>
                        <option value="재무">재무</option>
    
                    </select>
                </label>
            </div>
            <input type="submit" value="입력완료">
        </form>
    </div>

</body>
</html>