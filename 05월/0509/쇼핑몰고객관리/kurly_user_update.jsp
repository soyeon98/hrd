<%@
  page
  language="java"
  contentType="text/html; charset=UTF-8"
  pageEncoding="UTF-8"
%>

<%@ page import="kurly.UserDAO"%>
<%@ page import="kurly.UserDTO"%>
<%@ page import="java.util.*"%>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kurly</title>
  <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <%
    String loginId=null;
    if(session.getAttribute("user_id")!=null){
        loginId =(String)session.getAttribute("user_id");
    }
%>
<%
    UserDAO userDAO = new UserDAO();
    UserDTO userDTO = userDAO.getJoin(loginId);
%>
    <div id="wrap">
        <main id='signUp'>
            <section id="section1">
                <div class="container">
                    <div class="gap">
                                <div class="title">
                                    <h2>정보수정</h2>

                                    <p><span><i>*</i>필수입력사항</span></p>
                                </div>
                                <div class="content">
                                    <form name='sign_up_form' id='signUpForm' method='post' action="./kurly_user_update_action.jsp">
                                        <ul>
                                            <li>
                                                <div>
                                                    <label htmlFor="userId">아이디<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            maxLength={16} 
                                                            name='user_id' 
                                                            id='userId' 
                                                            placeholder='아이디를 입력해주세요' 
                                                            value="<%=userDTO.getUser_id()%>"
                                                        />
                                                    </div>
                                                    <button  
                                                        type='button'
                                                        onClick={onClickUserIdOk}
                                                    >중복확인</button>
                                                    <p class="error-msg"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userPw1">비밀번호<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='password'  
                                                            maxLength={16} 
                                                            name='user_pw' 
                                                            id='userPw' 
                                                            placeholder='비밀번호를 입력해주세요' 
                                                            value="<%=userDTO.getUser_pw()%>"
                                                        />
                                                    </div>
                                                    <p class="error-msg"></p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userName">이름<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            name='user_name' 
                                                            id='userName' 
                                                            placeholder='이름을 입력해주세요' 
                                                            value="<%=userDTO.getUser_name()%>"
                                                        />
                                                    </div>
                                                    <p class="error-msg">이름 메시지 텍스트</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userEmail">이메일<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='email' 
                                                            name='user_email' 
                                                            id='userEmail' 
                                                            placeholder='이메일을 입력해주세요'
                                                            value="<%=userDTO.getUser_email()%>" 
                                                        />
                                                    </div>
                                                    <button  
                                                        type='button'
                                                   
                                                    >중복확인</button>
                                                 
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userHp">휴대폰<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text'  
                                                            maxLength={11} 
                                                            name='user_hp' 
                                                            id='userHp' 
                                                            placeholder='숫자만 입력해주세요' 
                                                            value="<%=userDTO.getUser_hp()%>"
                                                        />
                                                    </div>
                                                    <button class="hp-num-btn" type='button'>인증번호 받기</button>
                                                    <button class="hp-num-btn" type='button'>다른번호 인증</button>
                                                </div>
                                            </li>
                                            <li>
                                                <div>
                                                    <label htmlFor="userAddress1">주소<i>*</i></label>
                                                    <div class="center-box">
                                                        <input 
                                                            type='text' 
                                                            name='user_addr' 
                                                            id='userAddr' 
                                                            placeholder='주소 검색' 
                                                            value="<%=userDTO.getUser_addr()%>"
                                                            />
                                                        <h5>샛별배송</h5>
                                                        
                                                        <h6>배송지에 따라 상품 정보가 달라질 수 있습니다.</h6>
                                                    </div>
                                                
                                                    <button 
                                                        class="addr-research-btn"
                                                        type='button'
                                                    >재검색</button>
                                                </div>
                                            </li>                                 
                                            <li>
                                                <div>
                                                    <label>성별</label>
                                                    <div class="center-box gender">
                                                        <label><input type='radio' name='user_gender' id='userMale' value='남자' <% if(userDTO.getUser_gender().equals("남자")){%>checked="checked"<%}%>/>남자</label>
                                                        <label><input type='radio' name='user_gender' id='userFemale' value='여자' <% if(userDTO.getUser_gender().equals("여자")){%>checked="checked"<%}%>/>여자</label>
                                                        <label><input type='radio' name='user_gender' id='userNone' value='선택안함' <% if(userDTO.getUser_gender().equals("선택안함")){%>checked="checked"<%}%>/>선택안함</label>
                                                    </div>                                            
                                                </div>
                                            </li>
                                            <li>
                                            <div>
                                                    <label>생년월일</label>
                                                    <div class="center-box birth">
                                                        <div class="birth-box">
                                                            <ul>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={4} 
                                                                        name='user_birth_year' 
                                                                        id='userBirthYear' 
                                                                        placeholder='YYYY'
                                                                    /></li>
                                                                <li><i>/</i></li>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={2} 
                                                                        name='user_birth_month' 
                                                                        id='userBirthMonth' 
                                                                        placeholder='MM' 
                                                                    /></li>
                                                                <li><i>/</i></li>
                                                                <li>
                                                                    <input 
                                                                        type="text" 
                                                                        maxLength={2} 
                                                                        name='user_birth_date' 
                                                                        id='userBirthDate' 
                                                                        placeholder='DD' 
                                                                    /></li>
                                                            </ul>
                                                        </div>
                                                    </div>                                       
                                                </div>
                                            </li>    
                                            <li>
                                                <div>
                                                    <label>추가입력사항</label>
                                                    <div class="center-box chooga">
                                                        <label>
                                                            <input 
                                                                type='radio' 
                                                                name='user_chooga' 
                                                                id='userChooga1' 
                                                                value='친구초대 추천인 아이디'
                                                            />친구초대 추천인 아이디
                                                        </label>
                                                        <label>
                                                            <input 
                                                                type='radio' 
                                                                name='user_chooga' 
                                                                id='userChooga2' 
                                                                value='참여 이벤트명'
                                                            />참여 이벤트명
                                                        </label>                                                
                                                    </div> 
                                                </div>
                                            </li>
    
                                            <li class='hr'>
                                                <hr />
                                            </li>  
    
                                            <li class='service-box'>
                                                <div>
                                                    <label>이용약관동의<i>*</i></label>
                                                    <div class="center-box service">
                                                    <ul>
                                                            <li>
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_all' 
                                                                        id='userServiceAll' 
                                                                        value='전체 동의합니다.'
                                                                    />전체 동의합니다.</label>                                                
                                                                <h5>선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.</h5>
                                                            </li>
                                                            
                                                            <li>
                                                                <label>
                                                                    <input                                                                 
                                                                        type='checkbox' 
                                                                        name='user_service_1' 
                                                                        id='userService1' 
                                                                        value='이용약관 동의(필수)' 
                                                                    />이용약관 동의</label><span>필수</span>                                                       
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_2' 
                                                                        id='userService2' 
                                                                        value='개인정보 수집∙이용 동의(필수)'
                                                                        />개인정보 수집∙이용 동의</label><span>필수</span>                                                       
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_3' 
                                                                        id='userService3' 
                                                                        value='개인정보 수집∙이용 동의(선택)'
                                                                    />개인정보 수집∙이용 동의</label><span>선택</span>                                                       
                                                            </li>
                                                            <li>
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_4' 
                                                                        id='userService4' 
                                                                        value='무료배송, 할인쿠폰 등 혜택/정보 수신 동의(선택)'
                                                                    />무료배송, 할인쿠폰 등 혜택/정보 수신 동의</label><span>선택</span>                                                       
                                                            </li>
                                                            <li class='service56'>
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_5' 
                                                                        id='userService5' 
                                                                        value='SNS'
                                                                    />SNS</label>                                                    
                                                                <label>
                                                                    <input 
                                                                        type='checkbox' 
                                                                        name='user_service_6' 
                                                                        id='userService6' 
                                                                        value='이메일'
                                                                    />이메일</label>
                                                                <h6>동의 시 한 달간 [5%적립] + [2만원 이상 무료배송] 첫 주문 후 안내</h6>
                                                            </li>
                                                            <li>
                                                                <label><input 
                                                                            type='checkbox' 
                                                                            name='user_service_7' 
                                                                            id='userService7' 
                                                                            value='본인은 만 14세 이상입니다.(필수)'
                                                                        />본인은 만 14세 이상입니다.</label><span>본인은 만 14세 이상입니다.(필수)</span>                                                       
                                                            </li>
    
                                                    </ul> 
    
                                                    </div>                                            
                                                </div>
                                            </li>
                                            <li>
                                                <button type='submit'>수정하기</button>
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                    </div>
                </div>
            </section>
        </main>
    </div>
</body>
</html>