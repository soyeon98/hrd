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
        *{margin: 0;padding: 0;vertical-align: middle;box-sizing: border-box;}
        ul{list-style: none;}
        #wrap{width: 100%;}
        #wrap #main {width: 100%;}
        #wrap #main .container{width: 100%;max-width: 1100px; margin: 100px auto;}
        #wrap #main .container .title{width: 100%; text-align: center;}
        #wrap #main .container .title h1{width: 100%;color: #000; margin: 0 0 50px 0; font-size: 30px; font-weight: 600;}
        #wrap #main .container ul{width: 100%; border-top: 1px solid #000; }
        #wrap #main .container ul li{width: 100%; border-bottom: 1px solid #ddd;height: 60px;display: flex;align-items: center;justify-content: space-between;}
        #wrap #main .container ul li.firsr-line{border-bottom: 1px solid #000; height: 50px;}
        #wrap #main .container ul li.firsr-line span{color: #222;font-size: 14px; font-weight: 700;}
        #wrap #main .container ul li span{width: 10%;text-align: center; font-size: 16px; color: #666;}
        #wrap #main .container ul li span.tit{width: 70%;text-align: start;cursor: pointer;}
        #wrap #main .container ul li span.tit:hover{text-decoration: underline;}
        #wrap #main .container ul li span.tit.first{text-align: center; cursor:auto;}
        #wrap #main .container ul li span.tit.first:hover{text-decoration: none;}

    </style>

</head>
<body>
    <%
        int[] num = {425,424,423,422,421,420,419,418,417,416};
        String[] title = {"시스템 개선 및 서비스 점검 안내","시스템 개선 및 서비스 점검 안내","탄소중립포인트 인센티브 지급 기준 안내","스타벅스 코리아 사칭 홈페이지 및 이메일 주의 안내","Summer 시즌 사이렌 오더 음료 기본 설정 변경 안내","시스템 개선 및 서비스 점검 안내","탄소중립실천포인트제 도입 안내","영상정보처리기기 운영방침 / 위치정보 이용약관 / 개인정보처리방침 이용약관 개정 안내","시스템 개선 및 서비스 점검 안내","설 연휴 스타벅스 딜리버스 운영 안내"};
        String[] date ={"2023-04-04","2023-03-27","2023-03-23","2023-03-20","2023-03-17","2023-02-17","2023-02-02","2023-02-02","2023-01-27","2023-01-20"};
        int[] view = {1479,1720,25999,3705,21037,3377,20653,2135,1879,9036};
    
    %>
    <div id="wrap">
        <main id="main">
            <div class="container">
                <div class="title">
                    <h1>STARBUCKS 공지사항</h1>
                </div>
                <ul>
                    <li class="firsr-line"><span>NO</span><span class="tit first">제목</span><span>날짜</span><span>조회수</span></li>
                    <%
                        for(int i=0;i<10;i++){
                            out.println("<li><span>"+num[i]+"</span>"+"<span class='tit'>"+title[i]+"</span>"+"<span>"+date[i]+"</span>"+"<span>"+view[i]+ "</span></li>");
                        }
                    %>
                </ul>
            </div>
        </main>
    </div>

</body>
</html>