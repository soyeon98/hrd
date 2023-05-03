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
    <title>공지사항 | 마켓컬리</title>
    <style>
        *{margin: 0;padding: 0;box-sizing: border-box;vertical-align: middle;}
        html,body{width: 100%;}
        ul{list-style: none;}
        table{width: 820px;margin: 100px auto; border-collapse: collapse; }
        table caption{width: 100%; padding: 30px 0;text-align: start;font-size: 24px; font-weight: 500;letter-spacing: -1px;}
        table caption span{font-size: 14px; color: #999;padding: 0 0 0 10px;}
        table tr{width: 100%;}
        table tr th{height: 60px;border-top: 2px solid #333; border-bottom: 1px solid #333;font-size: 14px;color: #333;}
        table tr td{text-align: center;height: 55px;border-bottom: 1px solid #ddd;font-size: 14px; color: #4c4c4c;padding: 0 10px ;cursor: pointer;}
        table tr td:nth-child(2){text-align: left; margin-left: 20px;}
    </style>
</head>
<body>
    <%
        String[] num = {"공지","공지","535","534","533","532","531","530","529","528","527","526","525","524","523"};
        String[] tit = {
            "[안내] 샛별배송 서비스 확장 안내 (2023.04.01~)",
            "[안내] 컬리 소비자 분쟁해결 기준 안내",
            "[이벤트] 3월 봄날의 펫페어 기부 이벤트 공지의 건",
            "[안내] 컬리 APP 업데이트 안내 (2023.04.03)",
            "[이벤트] 전주 베테랑 라이브 경품 당첨자 안내",
            "[안내] 컬리로그 커뮤니티 가이드라인 일부 변경 안내 (2023.03.21~)",
            "[안내] SKT휴대폰결제 서비스 점검 (2023.03.22)",
            "[안내] 컬리 이메일 서버 점검 (2023.03.22)",
            "[안내] 컬리 서비스 점검 안내 (2023.03.18)",
            "[안내] 컬리 서비스 점검 안내 (2023.03.15)",
            "[안내] LGU+ 휴대폰 본인인증 서비스 점검 안내 (2023.03.08)",
            "[안내] LGU+ 휴대폰결제 서비스 점검 안내 (2023.03.10)",
            "[안내] SKT 휴대폰본인인증 서비스 SMS 시스템 점검 (2023.03.03~03.04, 03.05)",
            "[안내] 적립금 정책 일부 변경 안내 (2023.04.01~)",
            "[안내] 후기 적립금 정책 일부 변경 안내 (2023.04.01~)",
        };
        String[] writer = {"컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리","컬리"};
        String[] date = {"2023.03.31","2022.07.27","2023.04.03","2023.03.31","2023.03.29","2023.03.22","2023.03.21","2023.03.17","2023.03.14","2023.03.10","2023.03.07","2023.03.07","2023.03.02","2023.03.01","2023.02.23",};
    
    %>
    <table>
        <caption>공지사항<span>컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.</span></caption>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
        </tr>
        <%
            for(int i=0;i<num.length;i++){
                out.println("<tr><td>"+num[i]+"</td><td>"+tit[i]+"</td><td>"+writer[i]+"</td><td>"+date[i]+"</td></tr>");
            }
        %>
        
    </table>
</body>
</html>