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

<%
    if(naverDTO.getId()==null ||naverDTO.getPw()==null){
%>
        <script>
            alert("빈값이 있습니다.\n확인 후 다시 시도하세요");
            history.back();
        </script>
<%
    }
    else{
        NaverDAO naverDAO = new NaverDAO();
        int result = naverDAO.delete(naverDTO);
        if(result>=1){
%>
        <script>
            alert("정보가 삭제되었습니다.");
            location.href="./main.jsp";
        </script>
<%
        }
        else{
%>
            <script>
                alert("회원정보가 확인되지 않습니다. \n다시 시도해주세요");
                history.back();
            </script>
<%            
        }
    }
%>