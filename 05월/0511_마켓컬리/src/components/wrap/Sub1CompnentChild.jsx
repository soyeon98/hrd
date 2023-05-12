import React from 'react';


export default function Sub1CompnentChild ({신상품}) {
    


    // 정가, 판매가 금액에 콤마형식 정규표현식 구현하기

    const commaPrice=(price)=>{
        let value = price.toString();
  
        const regExp =/(^\d+)(\d{3})/g; // 그룹1() 그룹2()
        // 가져온 데이터값은 숫자이다 그래서 파란색으로 콜솔로그에 표시됨
        // 정규표현식은 문자열만 가능
        // 문자열 형식으로 변환시키기
        // console.log(regExp.test(value));
        // 리턴문으로 결과값
        while(regExp.test(value)){
            console.log("//////////////");
            console.log(value.replace(regExp, '$1,$2'));

            return value.replace(regExp, '$1,$2');
            
        }
        


    }

    return (
            <ul>
                {
                    신상품.map((item,idx)=>{
                        return(
                                <li key={item.제품코드}>
                                    <a href="!#">
                                        <div className="img-box">
                                            <img src= {`./images/sub1/${item.이미지}`} alt="" />
                                            <span>
                                                <img src="./images/sub1/icon_kart.svg" alt="" />
                                            </span>
                                        </div>
                                        <div className="tit-box">
                                            <ul>
                                                <li>{item.샛별배송}</li>
                                                <li><strong>[{item.제조사}]</strong><em>{item.제품명}</em></li>
                                                <li>{item.제품특성}</li>
                                                <li><span className='rate-price'>{item.할인율===0? '':`${Math.round(item.할인율*100)}%`}</span><span className='panme-price'>{commaPrice(Math.round(item.정가*(1-item.할인율)))}원</span></li>
                                                <li>{item.할인율 === 0 ? '':<s> {commaPrice(item.정가)}원 </s>}</li>
                                                <li>{item.판매처}</li>
                                            </ul>
                                        </div>
                                    </a>
                                </li>
                        )
                    })
                }
            </ul>
    );
};

