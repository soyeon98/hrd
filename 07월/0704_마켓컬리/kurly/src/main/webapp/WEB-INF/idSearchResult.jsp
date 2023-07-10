<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<%@ page import="kurly.UserDAO" %>
<%@ page import="kurly.UserDTO" %>
<%
	request.setCharacterEncoding("UTF-8");
%>  
    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 찾기 결과</title>

<style type="text/css">
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}
	
	#idSearchResult {width:100%;padding:100px 0;}
	#idSearchResult .container {width:100%;max-width:600px;margin:0 auto;background:#f9f9f9;padding:50px;}
	#idSearchResult .container .title {text-align:center;padding:0 0 60px 0;}
	#idSearchResult .container .title h1 {font-size:28px;text-align:center;color:#7e9fc2;font-weight:500;}
	#idSearchResult .container .title h5 {font-size:16px;text-align:center;color:#333;font-weight:500;padding:5px 0 0 0;}
	
	#idSearchResult .container .content {width:100%;height:auto;}
	#idSearchResult .container .content  {width:100%;}
	#idSearchResult .container .content  ul {width:100%;}
	#idSearchResult .container .content  ul li {width:100%;padding:5px 0; text-align:center; }
	#idSearchResult .container .content  ul li p{font-weight:500;font-size:24px;}
	
	#idSearchResult .container .content  .button-box {width:100%;padding: 30px 0 50PX 0; text-align:center;}
	#idSearchResult .container .content  .button-box a {
		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		display:flex;
		background:#7e9fc2;cursor:pointer;		
		transition: all 0.3s;
		margin:5px 0;
		text-align:center;
		align-items:center; justify-content:center;
	}
	#login .container .content form .button-box a:hover {opacity:0.8}
	
</style>
</head>
<body>

<div id='idSearchResult'>
	<div class='container'>
		<div class='title'>
			<h1>고객님의 계정을 찾았습니다.</h1>
			<h5>아이디 확인 후 다시 로그인해주세요.</h5>
		</div>
		
		<div class="content">
	
		        <ul>
		            <li><p><%=request.getParameter("user_id") %></p></li>
		            <li></li>
		        </ul>
		</div>
	
	</div>
</div>	
	
</body>
</html>