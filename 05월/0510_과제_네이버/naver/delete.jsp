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
    <title>네이버 | 삭제 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <%
        String loginId= null;
        if(session.getAttribute("id")!=null){
            loginId=(String)session.getAttribute("id");
        }
    %>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title"><div class="img"></div></div>
                <div class="content">
                    <form id="naverForm" name="naver_form" method="post" action="./delete_action.jsp">
                        <div class="join-box">
                            <label for="id">아이디</label>
                            <input type="text" name="id" id="id" value="<%=loginId%>" required autofocus><span>@naver.com</span>
                        </div>
                        <div class="join-box">
                            <label for="pw">비밀번호</label>
                            <input type="text" name="pw" id="pw" placeholder="" required autofocus>
                        </div>
                        <button type="submit">삭제하기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>