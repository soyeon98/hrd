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


<%
    if(userDTO.getUser_id()==null ||userDTO.getUser_pw()==null){
%>
        <script>
            alert("빈값이 있는 항목이 있습니다. \n확인 후 다시 입력해주세요.");
            history.go(-1);
        </script>
<%
    }
    else{
        UserDAO userDAO = new UserDAO();
        int result = userDAO.signin(userDTO);
        if(result==1){
        
%>
        <script>
            alert("로그인 중 ...");
            history.go(-1); 
        </script>
<%
        }
        else if(result==-1){
%>
            <script>
                alert("아이디 정보가 확인되지 않습니다.\n확인 후 다시 시도하세요.");
                history.go(-1); 
            </script>
<%
        }
        else if(result==0){
%>
            <script>
                alert("비밀번호 정보가 확인되지 않습니다.\n확인 후 다시 시도하세요.");
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
