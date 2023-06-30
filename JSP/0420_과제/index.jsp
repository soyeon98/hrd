<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TO DO LIST</title>
    <style>
        *{margin: 0;padding: 0;box-sizing: border-box;vertical-align: middle;}
        #wrap{width: 100%;padding: 50px 0;}
        #wrap .top{width: 100%;max-width: 1000px; margin: 0 auto; text-align: right; padding: 10px 0;}
        #wrap .top a{text-decoration: none; cursor: pointer;color: #aaa;transition: all 0.3s;}
        #wrap .top a:hover{color: #333;}
        #wrap form{width: 100%; max-width: 1000px; margin: 0 auto;background: #f0f0f0;padding: 50px 150px;}
        #wrap form table{width: 100%; border-collapse: collapse;}
        #wrap form table th{width: 100%;height: 80px; font-size: 24px; font-weight: 600; color: #000;}
        #wrap form table td{width: 100%; height: 50px;}
        #wrap form table td input{width: 100%;height: 100%; padding: 0 15px; font-size: 16px; border: 0;transition: all 0.3s;outline: 1px solid transparent;outline-offset: -1px; border-radius: 3px;}
        #wrap form table td input:focus{outline: 1px solid #777;}
        #wrap form button{width: 100%;height: 50px; background: #333; color: #fff; border: 0; margin: 20px 0;cursor: pointer;font-size: 16px; font-weight: 600;border-radius: 3px;transition: all 0.3s;}
        #wrap form button:hover{background: #fff; color: #333;}
    </style>
</head>
<body>
    <div id="wrap">
        <div class="top">
            <a href="./todo_view.jsp">목록 보기</a>
        </div>
        <form name="todo" id="todo" action="./todo_write.jsp" method="post">
            <table>
                <tr><th>이번 주 할일</th></tr>
                <tr><td><input type="text" name="todo" placeholder="할 일을 입력하세요" autocomplete="off"></td></tr>
            </table>
            <button type="submit">저 장</button>
        </form>
    </div>
</body>
</html>