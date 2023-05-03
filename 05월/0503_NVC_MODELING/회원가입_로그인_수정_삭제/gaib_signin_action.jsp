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
<jsp:setProperty name="gaibDTO" property="user_pw"/>



<%
    if(gaibDTO.getUser_id()==null ||gaibDTO.getUser_pw()==null){
%>
        <script>
            alert("빈값이 있는 항목이 있습니다. \n확인 후 다시 입력해주세요.");
            history.go(-1);
        </script>
<%
    }
    else{
            GaibDAO gaibDAO = new GaibDAO();
            int result = gaibDAO.signin(gaibDTO.getUser_id(),gaibDTO.getUser_pw());
            if(result==1){
%>
                <script>
                    window.location.href="./index.jsp";
                </script>
<%
            }
            else if(result==-1){
%>
                <script>
                    alert("아이디가 일치하지 않습니다.\n확인 후 다시 시도해주세요");   
                    history.go(-1);
                </script>
<%
            }
            else if(result==0){
%>
                <script>
                    alert("비밀번호가 일치하지 않습니다.\n확인 후 다시 시도해주세요"); 
                    history.go(-1);  
                </script>
<%
            }
            else if(result==-2){
%>
                <script>
                    alert("데이터베이스 오류\n 다시 시도하세요");  
                    history.go(-1); 
                </script>
<%
            }

    }
%>