<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="naver.NaverDAO"%>
<%@ page import="naver.NaverDTO"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>네이버 | 회원수정 폼</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <%
        String loginId= null;
        if(session.getAttribute("id")!=null){
            loginId=(String)session.getAttribute("id");
        }
    %>
    <%
        NaverDAO naverDAO = new NaverDAO();
        NaverDTO naverDTO =  naverDAO.getJoin(loginId);
    %>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title"><div class="img"></div></div>
                <div class="content">
                    <form id="naverForm" name="naver_form" method="post" action="./update_action.jsp">
                        <div class="join-box hide">
                            <label for="id">아이디</label>
                            <input type="text" name="id" id="id" value="<%=loginId%>" required autofocus><span>@naver.com</span>
                        </div>
                        <div class="join-box">
                            <label for="id">아이디</label>
                            <input type="text" name="id" id="id" value="<%=loginId%>" disabled="disabled" required autofocus><span>@naver.com</span>
                        </div>
                        <div class="join-box">
                            <label for="pw">비밀번호</label>
                            <input type="text" name="pw" id="pw" value="<%=naverDTO.getPw()%>" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="name">이름</label>
                            <input type="text" name="name" id="name"value="<%=naverDTO.getName()%>" required autofocus>
                        </div>
                        <div class="join-box birth">
                            <label for="birth">생년월일</label>
                            <input type="text" name="year" id="year" placeholder="년(4자리)" value="<%=naverDTO.getYear()%>" required autofocus>
                            <select type="text" name="month" id="month"  >
                                <option value="월" <% if(naverDTO.getMonth().equals("월")){%>selected <%}%>>월</option>
                                <option value="1"  <% if(naverDTO.getMonth().equals("1")){%>selected <%}%>>1</option>
                                <option value="2"  <% if(naverDTO.getMonth().equals("2")){%>selected <%}%>>2</option>
                                <option value="3"  <% if(naverDTO.getMonth().equals("3")){%>selected <%}%>>3</option>
                                <option value="4"  <% if(naverDTO.getMonth().equals("4")){%>selected <%}%>>4</option>
                                <option value="5"  <% if(naverDTO.getMonth().equals("5")){%>selected <%}%>>5</option>
                                <option value="6"  <% if(naverDTO.getMonth().equals("6")){%>selected <%}%>>6</option>
                                <option value="7"  <% if(naverDTO.getMonth().equals("7")){%>selected <%}%>>7</option>
                                <option value="8"  <% if(naverDTO.getMonth().equals("8")){%>selected <%}%>>8</option>
                                <option value="9"  <% if(naverDTO.getMonth().equals("9")){%>selected <%}%>>9</option>
                                <option value="10" <% if(naverDTO.getMonth().equals("10")){%>selected <%}%>>10</option>
                                <option value="11" <% if(naverDTO.getMonth().equals("11")){%>selected <%}%>>11</option>
                                <option value="12" <% if(naverDTO.getMonth().equals("12")){%>selected <%}%>>12</option>
                            </select>   
                            <input type="text" name="date" id="date" placeholder="일" value="<%=naverDTO.getDate()%>" required autofocus>
                        </div>
                        <div class="join-box">
                            <label for="gender">성별</label>
                            <select type="text" name="gender" id="gender" class="gender">
                                <option value="성별"  <% if(naverDTO.getGender().equals("성별")){%>selected <%}%>>성별</option>
                                <option value="여자"  <% if(naverDTO.getGender().equals("여자")){%> selected <%}%>>여자</option>
                                <option value="남자"  <% if(naverDTO.getGender().equals("남자")){%> selected <%}%>>남자</option>
                                <option value="선택 안함"  <% if(naverDTO.getGender().equals("선택 안함")){%> selected <%}%>>선택 안함</option>
                            </select>
                        </div>
                        <div class="join-box">
                            <label for="email">본인 확인 이메일 <span>(선택)</span> </label>
                            <input type="text" name="email" id="email" placeholder="선택입력" required autofocus value="<%=naverDTO.getEmail()%>">
                        </div>
                        <div class="join-box">
                            <label for="hp">휴대전화</label>
                            <input type="text" name="hp" id="hp" placeholder="전화번호 입력" required autofocus value="<%=naverDTO.getHp()%>">
                        </div>
                        <button type="submit">수정하기</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>