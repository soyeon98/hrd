import React from 'react';

export default function Section3Component ()  {
    return (
        <div id='section3'>
            <div className="container">
                <div className="left-content">
                    <div className="gap">
                        <div className="title">
                            <h1>유사한 고객님이<br />많이 구매했어요</h1>
                            <span>더보기<img src="./img/ico_arrow7x11_2.png" alt="" /></span>
                        </div>
                        <div className="slide-container">
                            <div className="slide-view">
                                <ul className="slide-wrap">
                                    <li className='slide slide1'>
                                        <div className="col clo1">
                                            <div className="img-box">
                                                <img src="./img/A00000018002605ko.jpg" alt="" />
                                            </div>
                                            <div className="txt-box">
                                                <h3>[한정기획] 라로슈포제 <br />시카플라스트 밤B5+...</h3>
                                                <h5><em>76,000원</em>49,400원<span><img src="./img/icon_bag.png" alt="" /></span></h5>
                                                <p><span className='sale'>세일</span><span className='coupon'>쿠폰</span><span className='drim'>오늘드림</span></p>
                                            </div>
                                        </div>
                                        <div className="col clo2">
                                            <div className="img-box">
                                                <img src="./img/A00000014998811ko.jpg" alt="" />
                                            </div>
                                            <div className="txt-box">
                                                <h3>[증량] 마녀공장 퓨어&딥 클렌징 폼 1+1 기획 (120ml+120ml)</h3>
                                                <h5><em>12,000원</em>11,00원<span><img src="./img/icon_bag.png" alt="" /></span></h5>
                                                <p><span className='sale'>세일</span><span className='drim'>오늘드림</span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='slide slide2'>

                                    </li>
                                    <li className='slide slide3'>

                                    </li>
                                    <li className='slide slide4'>

                                    </li>
                                    <li className='slide slide5'>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="btn-box">
                        <button>다른상품 추천해드릴게요 1 | 6</button>
                    </div>
                    </div>
                </div>
                <div className="right-content">
                    <div className="gap">
                        <div className="title">
                            <h1>고객님을 위한 추천 상품<br /></h1>
                            <span>더보기<img src="./img/ico_arrow7x11_2.png" alt="" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

 