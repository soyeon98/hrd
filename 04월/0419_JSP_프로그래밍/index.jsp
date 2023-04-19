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
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <div id="wrap">
        <form name="todo_list_form" id="todoListForm" method="post" action="./todo_list_write.jsp">
            <table>
                <tr><th>TO DO LIST</th></tr>
                <tr><td><input type="text" name="todo" placeholder="TO DO LIST..."></td></tr>
            </table>
            <button type="submit">저장</button>
        </form>
    </div>
</body>
</html>