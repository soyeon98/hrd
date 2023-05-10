<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<%@ page import="health.HealthDAO"%>
<% request.setCharacterEncoding("UTF-8"); %>

<jsp:useBean class="health.HealthDTO" id="healthDTO" scope="page"/>
<jsp:setProperty name="healthDTO" property="num"/>
<jsp:setProperty name="healthDTO" property="pw"/>


<%
    HealthDAO healthDAO = new HealthDAO();
    int result = healthDAO.signin(healthDTO);
    if(result==1){
        session.setAttribute("num",healthDTO.getNum());
        session.setAttribute("id",healthDTO.getId());
      
%>
        <script>
            alert("로그인 되었습니다");
            location.href="./main.jsp";
        </script>
<%
    }
    else if(result==-1){
%>
        <script>
            alert("사업장 관리번호가 확인되지 않습니다.\n확인 후 다시 입력해주세요");
            history.back();
        </script>
<%
    }
    else if(result==0){
%>
        <script>
            alert("비밀번호가 확인되지 않습니다.\n확인 후 다시 입력해주세요");
            history.back();
        </script>
<%       
    }
    else{
        %>
        <script>
            alert("로그인에 실패하였습니다. \n다시 시도해주세요.");
            history.back();
        </script>
<%        
    }

%>
