<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO"%>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean class="kurly.UserDTO" id="userDTO" scope="page"/>
<jsp:setProperty name="userDTO" property="user_id"/>
<jsp:setProperty name="userDTO" property="user_pw"/>
<jsp:setProperty name="userDTO" property="user_name"/>
<jsp:setProperty name="userDTO" property="user_email"/>
<jsp:setProperty name="userDTO" property="user_hp"/>
<jsp:setProperty name="userDTO" property="user_addr"/>
<jsp:setProperty name="userDTO" property="user_gender"/>
<jsp:setProperty name="userDTO" property="user_birth"/>

<%
    if(userDTO.getUser_id()==null ||userDTO.getUser_pw()==null ||
       userDTO.getUser_name()==null || userDTO.getUser_email()==null ||
       userDTO.getUser_hp()==null ||userDTO.getUser_addr()==null ||
       userDTO.getUser_gender()==null ||userDTO.getUser_birth()==null ){
%>
        <script>
            alert("빈값이 있는 항목이 있습니다. \n확인 후 다시 입력해주세요.");
            history.go(-1);
        </script>
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signup(userDTO);
        if(result==1){
        
%>
        <script>
            alert("가입 성공");
            history.go(-1); 
        </script>
<%
        }
        else{
 %>
        <script>
            alert("데이터베이스 오류\n 다시 시도하세요");
            history.go(-1); 
        </script>
<%
        }
    }
%>
