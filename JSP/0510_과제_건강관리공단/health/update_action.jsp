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
<jsp:setProperty name="healthDTO" property="sign1"/>
<jsp:setProperty name="healthDTO" property="sign2"/>
<jsp:setProperty name="healthDTO" property="id"/>
<jsp:setProperty name="healthDTO" property="pw"/>
<jsp:setProperty name="healthDTO" property="chk_que"/>
<jsp:setProperty name="healthDTO" property="chk_ans"/>
<jsp:setProperty name="healthDTO" property="hp"/>
<jsp:setProperty name="healthDTO" property="name"/>
<jsp:setProperty name="healthDTO" property="email"/>
<jsp:setProperty name="healthDTO" property="recieve"/>

<%
    HealthDAO healthDAO = new HealthDAO();
    int result = healthDAO.update(healthDTO);
    if(result==1){
%>
        <script>
            alert("수정되었습니다");
            location.href="./main.jsp";
        </script>
<%
    }
    else{
        %>
        <script>
            alert("정보가 확인되지 않습니다. \n다시 시도해주세요.");
            history.back();
        </script>
<%        
    }

%>
