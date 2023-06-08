import React from 'react';
import './scss/cart.scss';

export default function CartComponent () {

    const [cart,setCart] = React.useState([])
    const [arr1,setArr1] = React.useState([])
    const [arr2,setArr2] = React.useState([])
    const [arr3,setArr3] = React.useState([])

    // 1. 냉장
    const res1= cart.map((item,idx)=>{
        if(item.보관방법==='냉장'){
        return(
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox"  name='chk' id='chk1' value={item.제품코드}/>
                        </li>
                        <li>
                            <span style={{backgroundImage:`url(${item.이미지})`}} className='cart-img blind'>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{[item.제조사]} {item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}</span>
                        </li>
                        <li>
                            <a href="!#" className='del-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
    })

    // 2. 냉동 
    const res2= cart.map((item,idx)=>{
        if(item.보관방법==='냉동'){
            return(
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox"  name='chk' id='chk1' value={item.제품코드}/>
                        </li>
                        <li>
                            <span style={{backgroundImage:`url(${item.이미지})`}} className='cart-img blind'>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{[item.제조사]} {item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}</span>
                        </li>
                        <li>
                            <a href="!#" className='del-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
    })

    // 3. 상온 
    const res3= cart.map((item,idx)=>{
        if(item.보관방법==='상온'){
            return(
                <dd key={idx}>
                    <ul>
                        <li>
                            <input type="checkbox"  name='chk' id='chk1' value={item.제품코드}/>
                        </li>
                        <li>
                            <span style={{backgroundImage:`url(${item.이미지})`}} className='cart-img blind'>Cart Small Image</span>
                        </li>
                        <li>
                            <a href="!#">{[item.제조사]} {item.제품명}</a>
                        </li>
                        <li>
                            <div>
                                <button className='sub-btn blind'>빼기</button>
                                <strong>{item.수량}</strong>
                                <button className='add-btn blind'>더하기</button>
                            </div>
                        </li>
                        <li>
                            <span>{item.총상품금액}</span>
                        </li>
                        <li>
                            <a href="!#" className='del-btn blind'>삭제버튼</a>
                        </li>
                    </ul>
                </dd>
            )
        }
   
    })
    // 장바구니(cart) 가져오기
    React.useEffect(()=>{
        if(localStorage.getItem('SY_KURLY_CART_PRODUCT')!==null){
            let result = JSON.parse(localStorage.getItem('SY_KURLY_CART_PRODUCT'));

            // 정렬 : 보관방법 오름차순 ASC
            result.sort((a,b)=>{
                if(a.보관방법 > b.보관방법)return  1;
                if(a.보관방법 < b.보관방법)return -1;
                if(a.보관방법===b.보관방법)return  0;
            });

            setCart(result);

            let arr1=[];
            let arr2=[];
            let arr3=[];
            console.log(arr1);

            result.map((item,idx)=>{
                if(item.보관방법==='냉장'){
                    arr1 = [...arr1,item];
                }
                else if(item.보관방법==='냉동'){
                    arr2 = [...arr2,item];
                }
                else if(item.보관방법==='상온'){
                    arr3 = [...arr3,item];
                }

            });
            setArr1(arr1);
            setArr2(arr2);
            setArr3(arr3);
        }
    },[]);

    

    return (
        <div id='cart'>
            <div className="container">
                <div className="gap">
                    <div className="title">
                        <h1>장바구니</h1>
                    </div>
                    <div className="content">
                        <div className="left">
                            <ul>
                                <li>
                                    <span>
                                        <button className='select-btn'>전체선택<strong>(<em className='select-count'>3</em>/<em className='cart-tot'>5</em>)</strong></button>
                                        <i>|</i>
                                        <button className='delete-btn'>선택삭제</button>
                                    </span>
                                </li>
                                <li>
                                    <dl>
                                    {
                                        arr1.length>=1 && 
                                        (
                                            <>
                                                <dt>
                                                    <div><img src="./images/cart/cart_icon1.svg" alt="" /><h3>냉장 상품</h3></div>
                                                    <div><button><img src="./images/cart/arrow_up.svg" alt="" /></button></div>
                                                </dt>
                                                {res1}
                                            </>
                                            
                                        )
                                    }
                                    </dl>
                                    <dl>
                                    {
                                        arr2.length>=1 && 
                                        (
                                           <>
                                                <dt>
                                                    <div><img src="./images/cart/cart_icon2.svg" alt="" /><h3>냉동 상품</h3></div>
                                                    <div><button><img src="./images/cart/arrow_up.svg" alt="" /></button></div>
                                                </dt>
                                                {res2}
                                            </>
                                        )
                                    }
                                    </dl>
                                    <dl>
                                    {
                                        arr3.length>=1&&
                                            (
                                                <>
                                                    <dt>
                                                        <div><img src="./images/cart/cart_icon3.svg" alt="" /><h3>상온 상품</h3></div>
                                                        <div><button><img src="./images/cart/arrow_up.svg" alt="" /></button></div>
                                                    </dt>
                                                    {res3}
                                                </>
                                            )
                                    }
                                     </dl>
                                </li>
                                <li>
                                    <span>
                                        <button className='select-btn'>전체선택<strong>(<em className='select-count'>3</em>/<em className='cart-tot'>5</em>)</strong></button>
                                        <i>|</i>
                                        <button className='delete-btn'>선택삭제</button>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="right">
                            <ul>
                                <li>
                                    <h3><img src="./images/cart/ico_location.svg" alt="" />배송지</h3>
                                    <p><em>배송지를 등록</em>하고 <br />구매가능한 상품을 확인하세요!</p>
                                    <button><img src="./images/cart/ico_search.svg" alt="" />주소검색</button>
                                </li>
                                <li>
                                    <div className='row1'>
                                        <p><strong>상품금액</strong><strong>309,500원</strong></p>
                                        <p>
                                            <strong>상품할인금액</strong><strong>0원</strong>
                                            <span>로그인 후 할인 금액 적용</span>
                                        </p>
                                        <p><strong>배송비</strong><strong>0원</strong></p>
                                    </div>
                                    <div className='row2'>
                                        <p><strong>결제예정금액</strong><strong>309,500원</strong></p>
                                        <p><strong><em>적립</em>로그인 후 회원 등급에 따라 적립</strong></p>
                                    </div>
                                </li>
                                <li>
                                    <button>배송지를 입력해주세요</button>
                                    <p>
                                        [주문완료] 상태일 경우에만 주문 취소 가능합니다. <br />
                                        [마이컬리 &gt; 주문내역 상세페이지] 에서 직접 취소하실 수 있습니다.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

