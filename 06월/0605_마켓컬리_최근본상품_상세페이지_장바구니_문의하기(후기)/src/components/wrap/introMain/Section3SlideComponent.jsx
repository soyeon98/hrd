import React from 'react';

export default function Section3SlideComponent ({상품,n,setViewProduct}) {

    const slideWrap = React.useRef();
    const [cnt, setCnt] = React.useState(0);


    // 판매가격, 정가 콤마형식
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp =/(^\d+)(\d{3})/g;
        
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2');
        }
    }

    const onClickProductList=(e,item)=>{
        e.preventDefault();
       let obj={
        제품코드:item.제품코드,
        이미지:`http://localhost:3001/images/sub1/${item.이미지}`,
        배송구분:item.배송구분,
        제조사:item.제조사,
        제품명:item.제품명,
        제품특성:item.제품특성,
        정가:item.정가,
        할인율:item.할인율,
        판매가: Math.round(item.정가*(1-item.할인율)),
        판매처:item.판매처,
        저장일시: new Date().getTime()
       }
       console.log(obj);
       setViewProduct(obj);
       // 상세페이지 이동
       window.location.pathname='/product'
    }

    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">
                    { 
                        상품.map((item)=>{
                            return(
                                <li  className="slide" key={item.제품코드}>
                                    <div className="col-gap">
                                        <a href="!#" onClick={(e)=>onClickProductList(e, item)}>
                                            <div className="img-box">
                                                <img src= {`./images/sub1/${item.이미지}`} alt="" />
                                                <span>
                                                    <img src="./images/sub1/icon_kart.svg" alt="" />
                                                </span>
                                            </div>
                                            <div className="tex-box">
                                                <ul>
                                                    <li>{}</li>
                                                    <li><strong>[{item.제조사}]</strong><em>{item.제품명}</em></li>
                                                    <li>{}</li>
                                                    <li><span className='rate-price'>{item.할인율===0? '':`${Math.round(item.할인율*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(item.정가*(1)))}원</span></li>
                                                    <li>{item.할인율 === 0 ? '':<s> {commaPrice(item.정가)}원 </s>}</li>
                                                    <li>후기</li>
                                                </ul>      
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            )
                        })

                    }
                </ul>
            </div>
        </div>

    );
};

