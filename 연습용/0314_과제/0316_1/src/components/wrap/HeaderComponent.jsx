import React from 'react';

function HeaderComponent () {

    const [state,setState]=React.useState({
        isSub1:false,
        isSub2:false,
        isFix:false
    });

    const onMouseOverSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1:true
        })
    }

    const onMouseLeaveSub1=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub1:false
        })
    }
    const onMouseOverSub2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub2:true
        })
    }
    const onMouseLeaveSub2=(e)=>{
        e.preventDefault();
        setState({
            ...state,
            isSub2:false
        })
    }

    React.useEffect(()=>{
        const row3Top = document.querySelector('#header .row3').offsetTop;

        window.addEventListener('scroll',function(){
            let isFix =false;
            if(this.window.scrollY>=row3Top){
                isFix =true;
            }
            else{
                isFix =false;
            }
            setState({
                ...state,
                isFix:isFix
            });
            
        })

    },[]);

    return (
        <header id="header">
            <div className="gap">
                <div className="content">
                    <div className="row1">
                        <div className="container">
                            <ul>
                                <li><a href="/회원가입">회원가입</a></li>
                                <li><i>|</i></li>
                                <li><a href="/로그인">로그인</a></li>
                                <li><i>|</i></li>
                                <li>
                                    <a onMouseOver={onMouseOverSub1} href="/고객센터">고객센터<i><img src="./img/sign_up/ico_down_16x10.png" alt="" /></i></a>
                                    {
                                        state.isSub1 && (
                                            <div className="sub1" onMouseLeave={onMouseLeaveSub1}>
                                                <ul>
                                                    <li><a href="!#">공지사항</a></li>
                                                    <li><a href="!#">자주하는 질문</a></li>
                                                    <li><a href="!#">1:1 문의</a></li>
                                                    <li><a href="!#">대량주문 문의</a></li>
                                                </ul>
                                        </div>
                                        )
                                    }
                     
                                </li>                               
                            </ul>
                        </div>
                    </div>
                    <div className={`row2 ${state.isFix?' on':''}`}>
                        <div className="container">
                            <div className="left">
                                <h1>
                                    <img src="./img/sign_up/logo.svg" alt="" />
                                    <span><a href="!#">마켓컬리</a></span>
                                    <span><i>|</i></span>
                                    <span><a href="!#">뷰티컬리</a></span>
                                </h1>
                            </div>
                            <div className="center">
                                <div>
                                    <input type="text" name='search' id='search' placeholder='검색어를 입력해주세요' />
                                    <a href="!#"><img src="./img/sign_up/search.svg" alt="" /></a>
                                </div>
                            </div>
                            <div className="right">
                                <span onMouseLeave={onMouseLeaveSub2}>
                                    <a onMouseOver={onMouseOverSub2} href="!#"><img src="./img/sign_up/map.svg" alt="" /></a>
                                    {
                                        state.isSub2 && (
                                            <div className="sub2">
                                            <ul>
                                                <li>
                                                    <span>배송지를 등록</span>하고
                                                </li>
                                                <li>
                                                    구매가능한 상품을 확인하세요!
                                                </li>
                                                <li>
                                                    <button>로그인</button>
                                                    <button>
                                                        <img src="./images/sign_up/ico_search.svg" alt="" />
                                                        주소검색
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                        )
                                    }

                                </span>
                                <span><a href="!#"><img src="./img/sign_up/heart.svg" alt="" /></a></span>
                                <span><a href="!#"><img src="./img/sign_up/cart.svg" alt="" /></a></span>
                            </div>
                        </div>
                    </div>
                    <div className={`row3 ${state.isFix?' on':''}`}>
                        <div className="container">
                            <div className="left">
                                <a href="!#"><img src="./img/sign_up/ham.svg" alt="" /><span>카테고리</span></a>
                            </div>
                            <div className="center">
                                <ul>
                                    <li><a href="!#">신상품</a></li>
                                    <li><a href="!#">베스트</a></li>
                                    <li><a href="!#">알뜰쇼핑</a></li>
                                    <li><a href="!#">특가/혜택</a></li>
                                </ul>
                            </div>
                            <div className="right">
                                <a href="!#">샛별・택배<span>배송안내</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;