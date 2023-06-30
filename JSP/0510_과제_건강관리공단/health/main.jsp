<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="health.HealthDAO"%>
<%@ page import="health.HealthDTO"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <div id="wrap">
        <div class="container">
            <div class="gap">
                <div class="title">
                    <h1>메인페이지</h1>
                </div>
                <%
                    String loginNum=null;
                    if(session.getAttribute("num")!=null){
                        loginNum=(String)session.getAttribute("num");
                    }
                    if(loginNum==null){
                %>
                    <div class="content">
                        <h3>접속하기</h3>
                        <h4></h4>
                        <ul>
                            <li><a href="./signin.jsp">로그인</a></li>
                            <li><a href="./signup.jsp">회원가입</a></li>
                        </ul>
                    </div>
                <%
                    }
                    else{
                %>
                        <div class="content">
                            <h3>관리하기</h3>
                            <h4> 사업장번호 :<%=loginNum%> </h4>
                            <ul>
                                <li><a href="./update.jsp">수정하기</a></li>
                                <li><a href="./delete.jsp">탈퇴하기</a></li>
                                <li><a href="./logout_action.jsp">로그아웃</a></li>
                            </ul>
                        </div>



            </div>
        </div>
        <div class="list">
            <table>
                <caption>회원리스트</caption>
                <tr>
                    <th>사업장관리번호</th>
                    <th>사업장기호</th>
                    <th>단위사업장기호</th>
                    <th>아이디</th>
                    <th>비밀번호</th>
                    <th>비밀번호 분실 시 확인 질문</th>
                    <th>비밀번호 분실 시 확인 답변</th>
                    <th>전화번호</th>
                    <th>업무담당자명</th>
                    <th>이메일</th>
                    <th>소식지 수신여부</th>
                </tr>
                <%
                    HealthDAO healthDAO = new HealthDAO();
                    List<HealthDTO> list = new ArrayList<>();
                    list =  healthDAO.getJoinList();

                    if(list.size()==0){
                        out.println("<script>alert('조회내역이 없습니다');</script>");
                    }
                    else{
                        for(HealthDTO item : list){
%>
                                <tr>
                                    <td><%=item.getNum()%></td>
                                    <td><%=item.getSign1()%></td>
                                    <td><%=item.getSign2()%></td>
                                    <td><%=item.getId()%></td>
                                    <td><%=item.getPw()%></td>
                                    <td><%=item.getChk_que()%></td>
                                    <td><%=item.getChk_ans()%></td>
                                    <td><%=item.getHp()%></td>
                                    <td><%=item.getName()%></td>
                                    <td><%=item.getEmail()%></td>
                                    <td><%=item.getRecieve()%></td>
                                </tr>
<%
                        }
                    }
                %>

            </table>
            <%        
        }
    %>  
        </div>
    </div>
</body>
</html>