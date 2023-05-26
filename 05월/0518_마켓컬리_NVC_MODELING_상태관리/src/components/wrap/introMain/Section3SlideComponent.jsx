import React from 'react';

export default function Section3SlideComponent ({상품}) {

    // 판매가격, 정가 콤마형식
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp =/(^\d+)(\d{3})/g;
        
        while(regExp.test(value)){
            return value.replace(regExp, '$1,$2');
        }
    }

    return (
        <div className="slide-container">
            <div className="slide-view">
                <ul className="slide-wrap">
                    { 
                        상품.map((item)=>{
                            return(
                                <li className="slide" key={item.제품코드}>
                                    <div className="col-gap">
                                        <a href="!#">
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

