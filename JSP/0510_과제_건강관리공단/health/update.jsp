<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import= "health.HealthDAO"%>
<%@ page import= "health.HealthDTO"%>

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
    <%
        String loginNum=null;

        if(session.getAttribute("num")!=null){
            loginNum =(String)session.getAttribute("num");
        }
    %>
    <%
        HealthDAO healthDAO = new HealthDAO();
        HealthDTO healthDTO = healthDAO.getJoin(loginNum);
    %>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title">
                    <h1>정보수정</h1>
                </div>
                <div class="content">
                    <p><img src="./img/ico-compulsory.png" alt="">표는 필수 입력 사항이며, [동일아이디검색] 및 [가입여부확인] 버튼을 반드시 눌러주세요.</p>
                    <form action="./update_action.jsp" method="post" name="gaib_form" id="gaibForm" >
                        <table>
                            <tr class="hide">
                                <th>본인사업장관리번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="num" id="num" required autofocus value="<%=loginNum%>"></td>
                            </tr>
                            <tr>
                                <th>본인사업장관리번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="num" id="num" required autofocus value="<%=loginNum%>" disabled="disabled"></td>
                            </tr>
                            <tr>
                                <th>수정 사업장기호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="sign1" id="sign1" required autofocus value="<%=healthDTO.getSign1()%>"></td>
                            </tr>
                            <tr>
                                <th>수정단위사업장기호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="sign2" id="sign2" required autofocus value="<%=healthDTO.getSign2()%>"></td>
                            </tr>
                            <tr class="hide">
                                <th>본인 아이디<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="id" id="id" placeholder="영문+숫자 6~10자 이내" required autofocus value="<%=healthDTO.getId()%>"></td>
                            </tr>
                            <tr>
                                <th>본인 아이디<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="id" id="id" placeholder="영문+숫자 6~10자 이내" required autofocus value="<%=healthDTO.getId()%>" disabled="disabled"></td>
                            </tr>
                            <tr>
                                <th>수정 비밀번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="pw" id="pw" placeholder="영문+숫자+특수문자(!@#$) 각 1자 이상 포함하여 9~12자 이내" required autofocus value="<%=healthDTO.getPw()%>"></td>
                            </tr>
                            <tr>
                                <th>비밀번호 분실 시 확인 <br> 질문<img src="./img/ico-compulsory.png" alt=""></th>
                                <td>
                                    <label for="chkQue">
                                        <select type="text" name="chk_que" id="chkQue" placeholder="">
                                            <option value="질문을 선택하세요." <% if(healthDTO.getChk_que().equals("질문을 선택하세요.")){%>selected<%}%>>질문을 선택하세요.</option>    
                                            <option value="나의 아버지 성함은?" <% if(healthDTO.getChk_que().equals("나의 아버지 성함은?")){%>selected<%}%>>나의 아버지 성함은?</option>        
                                            <option value="나의 그리운 고향은?" <% if(healthDTO.getChk_que().equals("나의 그리운 고향은?")){%>selected<%}%>>나의 그리운 고향은?</option>    
                                            <option value="나의 첫째아이 이름은?"<% if(healthDTO.getChk_que().equals("나의 첫째아이 이름은?")){%>selected<%}%> >나의 첫째아이 이름은?</option>    
                                            <option value="나의 초등학교 이름은?" <% if(healthDTO.getChk_que().equals("나의 초등학교 이름은?")){%>selected<%}%>>나의 초등학교 이름은?</option>    
                                            <option value="나의 보물 제1호는?" <% if(healthDTO.getChk_que().equals("나의 보물 제1호는?")){%>selected<%}%>>나의 보물 제1호는?</option>    
                                            <option value="기억에 남는 추억의 장소는?"<% if(healthDTO.getChk_que().equals("기억에 남는 추억의 장소는?")){%>selected<%}%> >기억에 남는 추억의 장소는?</option>    
                                            <option value="나의 인생 좌우명은?"<% if(healthDTO.getChk_que().equals("나의 인생 좌우명은?")){%>selected<%}%> >나의 인생 좌우명은?</option>    
                                            <option value="내가 좋아하는 캐릭터는?"<% if(healthDTO.getChk_que().equals("내가 좋아하는 캐릭터는?")){%>selected<%}%> >내가 좋아하는 캐릭터는?</option>    
                                            <option value="추억하고 싶은 날짜가 있다면?"<% if(healthDTO.getChk_que().equals("추억하고 싶은 날짜가 있다면?")){%>selected<%}%>>추억하고 싶은 날짜가 있다면?</option>    
                                            <option value="인상 깊게 읽은 책 이름은?" <% if(healthDTO.getChk_que().equals("인상 깊게 읽은 책 이름은?")){%>selected<%}%>>인상 깊게 읽은 책 이름은?</option>    
                                            <option value="내가 가장 존경하는 인물은?" <% if(healthDTO.getChk_que().equals("내가 가장 존경하는 인물은?")){%>selected<%}%>>내가 가장 존경하는 인물은?</option>    
                                            <option value="가장 기억에 남는 선생님 성함은?"<% if(healthDTO.getChk_que().equals("가장 기억에 남는 선생님 성함은?")){%>selected<%}%> >가장 기억에 남는 선생님 성함은?</option>    
                                            <option value="내가 받았던 선물 중 기억에 남는 선물은?"<% if(healthDTO.getChk_que().equals("내가 받았던 선물 중 기억에 남는 선물은?")){%>selected<%}%>>내가 받았던 선물 중 기억에 남는 선물은?</option>    
                                        </select>    
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <th>비밀번호 분실 시 확인 <br> 답변<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="chk_ans" id="chkAns" placeholder="조회 답변은 띄어쓰기 포함 10자 이내" required autofocus value="<%=healthDTO.getChk_ans()%>"></td>
                            </tr>
                            <tr>
                                <th>수정 전화번호<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="hp" id="hp" placeholder="“-(하이픈)” 없이 입력 (예 : 01012345678)"required autofocus value="<%=healthDTO.getHp()%>"></td>
                            </tr>
                            <tr>
                                <th>수정 업무담당자명<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="name" id="name" placeholder="사업장의 소속된 직장 가입자 직원 또는 대표자"required autofocus value="<%=healthDTO.getName()%>"></td>
                            </tr>
                            <tr>
                                <th>수정 이메일<img src="./img/ico-compulsory.png" alt=""></th>
                                <td><input type="text" name="email" id="email" required autofocus value="<%=healthDTO.getEmail()%>"></td>
                            </tr>
                            <tr>
                                <th>소식지 수신여부<img src="./img/ico-compulsory.png" alt=""></th>
                                <td>
                                    <label for="recieveY"><input type="radio" name="recieve" id="recieveY" value="받음" <% if(healthDTO.getRecieve().equals("받음")){%>checked="checked"<%}%>>받음</label>
                                    <label for="recieveN"><input type="radio" name="recieve" id="recieveN" value="안받음" <% if(healthDTO.getRecieve().equals("안받음")){%>checked="checked"<%}%>>안받음 (공단의 다양한 소식을 무료로 만나보세요)</label>
                                </td>
                            </tr>
                        </table>
                        <div class="btn-box">
                            <button type="submit">수정</button>
                            <button class="hide">취소</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>
</html>