import React from 'react';

function FooterComponent () {
    return (
        <footer id="footer">
            <div className="container">
                <div className="gap">
                    <div className="content">
                        <div className="left-box">
                            <div className="call-box">
                                <p>고객만족센터</p>
                                <h3>02. 3412. 0781</h3>
                            </div>
                        </div>
                        <div className="center-box">
                            <div className="top-box">
                                <ul>
                                    <li><a href="!#">회사소개</a></li>
                                    <li><a href="!#">채용안내</a></li>
                                    <li><a href="!#">프랜차이즈</a></li>
                                    <li><a href="!#">계열사 소개</a></li>
                                    <li><a href="!#">공지사항</a></li>
                                </ul> 
                                <ul>
                                    <li><a href="!#">고객만족센터</a></li>
                                    <li><a href="!#">찾아오시는 길</a></li>
                                    <li><a href="!#">가맹점 전용 게시판</a></li>
                                </ul>    
                            </div>
                            <div className="middle-box"><p>서울특별시 광진구 아차산로 426 대표 : 명선철<br/>사업자등록번호 : 215-86-65050 개인정보 책임자 : 이동규 TEL. 02-3412-0781 FAX. 02-3412-1907</p></div>
                            <div className="bottom-box"><h5>COPYRIGHT &copy; 2022 TOM N TOMS COFFEE. ALL RIGHTS RESERVED.</h5></div>
                        </div>
                        <div className="right-box">
                            <div className="sns-box">
                                <h4>Follow us</h4>
                                <ul>
                                    <li><img src="./img/sns_instagram.png" alt=""/></li>
                                    <li><img src="./img/sns_facebook.png" alt=""/></li>
                                    <li><img src="./img/sns_youtube.png" alt=""/></li>
                                    <li><img src="./img/sns_blog.png" alt=""/></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;