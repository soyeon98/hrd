<%@
    page
    language="java"
    contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
%>

<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <style>
        *{margin: 0;padding: 0;vertical-align: middle; box-sizing: border-box;}
        ul{list-style: none;}
        #wrap{width: 100%;}
        #wrap #header{
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            background: #333;
            position: fixed;
        }
        #wrap #header a{
            margin: 0 10px;
            color: #fff; 
            font-size: 16px;
            font-weight: 500;
            text-decoration: none;

        }
        #wrap #header a:hover{
            text-decoration: underline;
        }

        #wrap #main{width: 100%;}
        #wrap #main #section1{width: 100%;height: 100vh;background: rgb(238, 237, 154); display: flex; align-items: center; justify-content: center;color: #fff; font-size: 100px;}
        #wrap #main #section2{width: 100%;height: 100vh;background: rgb(230, 201, 230); display: flex; align-items: center; justify-content: center;color: #fff; font-size: 100px;}
        #wrap #main #section3{width: 100%;height: 100vh;background: #9c9; display: flex; align-items: center; justify-content: center;color: #fff; font-size: 100px;}
        #wrap #main #section4{width: 100%;height: 100vh;background: #99c; display: flex; align-items: center; justify-content: center;color: #fff; font-size: 100px;}
        #wrap #main #section5{width: 100%;height: 100vh;background: rgb(217, 161, 231); display: flex; align-items: center; justify-content: center;color: #fff; font-size: 100px;}

        #wrap #footer {width: 100%;height: 300px;background: #eee;color: #000; font-size: 100px; display: flex; align-items: center; justify-content: center;}
    </style>

</head>
<body>
    <script>
        ((p)=>{
            console.log(p);
        })(window.navigation);
    </script>
    <%
        String selectPage = request.getParameter("pageChange");
        if(selectPage==null){
            selectPage="main.jsp";
        }
    %>
    <div id="wrap">
        <jsp:include page="./header.jsp" flush="false"/>
        <jsp:include page="<%=selectPage%>" flush="false"/>
        <jsp:include page="./footer.jsp" flush="false"/>
    </div>
</body>
</html>