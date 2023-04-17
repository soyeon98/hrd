import React from 'react';

export default function Sub1Compnent () {
    return (
        <main id='sub1'>
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="content">
                            <a href="#">
                                <img src="./images/sub1/0HpXehniZlRXiBeSfEFpPK8rSl35tGLPMUOwNNWK.png" alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>신상품</h2>
                        </div>
                        <div className="content">
                            <div className="left">
                                <div className="left-title">
                                    <strong>필터</strong>
                                    <span>
                                        <img src="./images/sub1/icon_format.svg" alt="" />
                                        <em>초기화</em>
                                    </span>
                                </div>
                                <div className="left-content">                          
                                        <a href="#" className='category-btn'><span>카테고리</span><img src="./images/sub1/icon_up.svg" alt="" /></a>                                      
                                        <ul> </ul>                                 
                                </div>
                            </div>
                            <div className="right">
                                <div className="right-title">
                                    <strong>215건</strong>
                                    <span>
                                        <a href="#" className='order-btn'>추천순<img src="./images/sub1/icon_question.svg" alt="" /></a>
                                        <a href="#" className='order-btn'>신상품순</a>
                                        <a href="#" className='order-btn'>판매량순</a>
                                        <a href="#" className='order-btn'>혜택순</a>
                                        <a href="#" className='order-btn'>낮은 가격순</a>
                                        <a href="#" className='order-btn'>높은 가격순</a>
                                    </span>
                                </div>
                                <div className="right-content">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div className="img-box">
                                                    <img src="./images/sub1/0a54f6a4-4f5a-4202-8f6d-045d2a1709de.jpg" alt="" />
                                                    <span>
                                                        <img src="./images/sub1/icon_format.svg" alt="" />
                                                    </span>
                                                </div>
                                                <div className="tit-box"></div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                          
            </section>
        </main>
    );
};

