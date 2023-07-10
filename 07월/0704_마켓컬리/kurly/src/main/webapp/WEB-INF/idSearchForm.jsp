<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>아이디 찾기 화면 폼</title>

<style type="text/css">
	* {margin:0; padding:0; vertical-align:center;box-sizing:border-box;}
	ul {list-style:none;}
	a {color:#333;text-decoration:none;}
	
	#login {width:100%;padding:100px 0;}
	#login .container {width:100%;max-width:600px;margin:0 auto;background:#f9f9f9;padding:50px;}
	#login .container .title {text-align:center;padding:0 0 60px 0;}
	#login .container .title h1 {font-size:28px;text-align:center;color:#7e9fc2;font-weight:500;}
	
	#login .container .content {width:100%;height:auto;}
	#login .container .content form {width:100%;}
	#login .container .content form ul {width:100%;}
	#login .container .content form ul li {width:100%;padding:5px 0;}
	#login .container .content form ul li input {
		width:100%;height:48px;padding:0 15px;font-size:16px;border:1px solid #ddd;
		outline-offset:-1px;outline:1px solid transparent;transition: all 0.3s;
	}
	#login .container .content form ul li input:focus {outline:1px solid #888;}
	
	#login .container .content form .search-box {width:100%; padding:10px 0 0 0; text-align:right; font-size:13px;}
	#login .container .content form .search-box a{color:#ccc; transition:all 0.3s;font-weight:500;}
	#login .container .content form .search-box a:hover{color:#7e9fc2;}
	#login .container .content form i {color:#ccc; margin: 0 10px; font-style:normal; font-size:12px;}
	
	
	#login .container .content form .button-box {width:100%;padding: 30px 0 50PX 0; text-align:center;}
	#login .container .content form .button-box button {
		width:100%;height:48px;font-size:17px;color:#fff;border-radius:3px;border:0;
		background:#7e9fc2;cursor:pointer;		
		transition: all 0.3s;
	}
	#login .container .content form .button-box button:hover {opacity:0.8}
	
</style>


</head>
<body>

	
<div id='login'>
	<div class='container'>
		<div class='title'>
			<h1>아이디 찾기</h1>
		</div>
		
		<div class="content">
		    <form name="idSearchForm" autocomplete="off" id="idSearchForm" method="post" action="./idSearchAction.jsp">
		        <ul>
		            <li><input  maxlength="30" type="text" name="user_name" id="user_name" placeholder="이름을 입력하세요"></li>
		            <li><input maxlength="250" type="text" name="user_hp" id="user_hp" placeholder="전화번호를 입력하세요"></li>
		        </ul>
		        <div class="button-box" style="text-align:center">
		            <button type="submit"> SEARCH </button>
		        </div>
		    </form>
		</div>
	
	</div>
</div>	
	

	
	

</body>
</html>