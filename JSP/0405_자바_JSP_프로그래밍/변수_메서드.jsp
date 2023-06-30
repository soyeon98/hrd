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
    <title>변수와 메서드</title>
</head>
<body>

    <h1>JSP 전역 변수와 메서드 이용하기</h1>
    <hr>
    <%!
        String companyName = "GREEN COMPUTER ACADEMY"; 

        // 호출용 메서드
        // 게터 메서드(함수)
        // get변수명 카멜케이스 기법

        public String getCompanyName(){
            companyName="GREEN COMPUTER ACADEMY 풀스텍 박소연";
            return companyName;
        }

        // 세터 메서드(함수) setter
        // 설정(수정,기록) 메서드
        // set변수명 카멜케이스 기법
        public String setCompanyName(String z){
            companyName = z;
            return companyName;
        }
    
    %>

    <h2>회사 이름은 <%=companyName%></h2>

    <h1>게터메서드 호출 실행 <em style="color: #fff;background: #c99;font-size: 20px;">[<%= getCompanyName() %>]</em></h1>

    <h1>세터메서드 호출 설정 실행 <em style="color: #fff;background: #99c;font-size: 20px;">[<%= setCompanyName("자바 프로그래밍 JSP 세터메서드 설정하기") %>]</em></h1>

</body>
</html>
