<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="gaib.GaibDAO" %>

<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean id="gaibDTO" class="gaib.GaibDTO" scope="page"/>
<jsp:setProperty name="gaibDTO" property="user_id"/>
<jsp:setProperty name="gaibDTO" property="user_hp"/>



<%
    if(gaibDTO.getUser_id()==null ||gaibDTO.getUser_hp()==null){
%>
        <script>
            alert("빈값이 있는 항목이 있습니다. \n확인 후 다시 입력해주세요.");
            history.go(-1);
        </script>
<%
    }
    else{
            GaibDAO gaibDAO = new GaibDAO();
            int result = gaibDAO.delete(gaibDTO);
            if(result <= 0){
%>
                <script>
                    alert("정보를 확인 할 수 없습니다.\n확인 후 다시 시도해주세요");  
                    history.back(); 
                </script>
<%                

            }
            else{
%>
        <script>
            window.location.href="./index.jsp"; 
        </script>
<%

            }
    }
%>