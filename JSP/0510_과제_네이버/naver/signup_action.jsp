<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding= "UTF-8"
%>
<%@ page import="naver.NaverDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="naver.NaverDTO" id="naverDTO" scope="page"/>
<jsp:setProperty name="naverDTO" property="id"/>
<jsp:setProperty name="naverDTO" property="pw"/>
<jsp:setProperty name="naverDTO" property="name"/>
<jsp:setProperty name="naverDTO" property="year"/>
<jsp:setProperty name="naverDTO" property="month"/>
<jsp:setProperty name="naverDTO" property="date"/>
<jsp:setProperty name="naverDTO" property="gender"/>
<jsp:setProperty name="naverDTO" property="email"/>
<jsp:setProperty name="naverDTO" property="hp"/>

<%
    if(naverDTO.getId()==null ||naverDTO.getPw()==null ||naverDTO.getName()==null ||naverDTO.getYear()==null ||naverDTO.getMonth()==null ||naverDTO.getDate()==null ||naverDTO.getGender()==null ||naverDTO.getEmail()==null ||naverDTO.getHp()==null){
%>
        <script>
            alert("빈값이 있습니다.\n확인 후 다시 시도하세요");
            history.back();
        </script>
<%
    }
    else{
        NaverDAO naverDAO = new NaverDAO();
        int result = naverDAO.signup(naverDTO);
        if(result==1){
            session.setAttribute("id",naverDTO.getId());
%>
        <script>
            alert("가입 되셨습니다.");
            location.href="./main.jsp";
        </script>
<%
        }
        else{
%>
            <script>
                alert("데이터베이스 오류 \n다시 시도해주세요");
                history.back();
            </script>
<%            
        }
    }
%>