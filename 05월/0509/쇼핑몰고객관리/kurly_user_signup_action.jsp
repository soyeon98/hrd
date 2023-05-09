<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO" %>
<% request.setCharacterEncoding("UTF-8");%>

<jsp:useBean id="userDTO" class="kurly.UserDTO" scope="page" />
<jsp:setProperty name="userDTO" property="user_id" />
<jsp:setProperty name="userDTO" property="user_pw" />
<jsp:setProperty name="userDTO" property="user_name" />
<jsp:setProperty name="userDTO" property="user_email" />
<jsp:setProperty name="userDTO" property="user_hp" />
<jsp:setProperty name="userDTO" property="user_addr" />
<jsp:setProperty name="userDTO" property="user_gender" />
<jsp:setProperty name="userDTO" property="user_birth_year" />
<jsp:setProperty name="userDTO" property="user_birth_month" />
<jsp:setProperty name="userDTO" property="user_birth_date" />
<jsp:setProperty name="userDTO" property="user_chooga" />
<jsp:setProperty name="userDTO" property="user_service_all" />
<jsp:setProperty name="userDTO" property="user_service_1" />
<jsp:setProperty name="userDTO" property="user_service_2" />
<jsp:setProperty name="userDTO" property="user_service_3" />
<jsp:setProperty name="userDTO" property="user_service_4" />
<jsp:setProperty name="userDTO" property="user_service_5" />
<jsp:setProperty name="userDTO" property="user_service_6" />
<jsp:setProperty name="userDTO" property="user_service_7" />


<%
  if(
    userDTO.getUser_id()==null ||
    userDTO.getUser_pw()==null ||
    userDTO.getUser_name()==null ||
    userDTO.getUser_email()==null ||
    userDTO.getUser_hp()==null ||
    userDTO.getUser_addr()==null ||
    userDTO.getUser_gender()==null ||
    userDTO.getUser_birth_year()==null ||
    userDTO.getUser_birth_month()==null ||
    userDTO.getUser_birth_date()==null ||
    userDTO.getUser_chooga()==null
    ){
%>
<script>
  alert("빈 항목을 모두 입력하세요!"); 
  history.back();
</script>
<%
    }
    else{
      UserDAO userDAO = new UserDAO();
      int result = userDAO.signup(userDTO);
      if(result == -1){
%>
<script>
  alert("중복된 아이디입니다!");
  history.back();
</script>
<%
      }
      else{
        session.setAttribute("user_id",userDTO.getUser_id());
%>
<script>
  alert("회원가입 축하드립니다!");
  location.href="./kurly_user_main.jsp";
</script>
<%
      }
    }
%>
