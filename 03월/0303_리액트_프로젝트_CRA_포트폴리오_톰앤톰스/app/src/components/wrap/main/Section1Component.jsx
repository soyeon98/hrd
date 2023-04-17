import React from 'react';

function Section1Component () {
    return (
        <section id="section1">
            <div className="container">
                <div className="gap">
                    <div className="slide-container">
                        <div className="slide-view">
                            <ul className="slide-wrap">                      
                                <li className="slide slide1"></li>
                                <li className="slide slide2"></li>
                                <li className="slide slide3"></li>
                                <li className="slide slide4"></li>
                                <li className="slide slide5"></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- 인디게이트 버튼 || 페이지네이션 버튼    --> */}
                    <div className="page-btn-box">
                            <span><a href="!#" className="page-btn on blind">페이지1</a></span>
                            <span><a href="!#" className="page-btn blind">페이지2</a></span>
                            <span><a href="!#" className="page-btn blind">페이지3</a></span>
                            <span><a href="!#" className="page-btn blind">페이지4</a></span>
                            <span><a href="!#" className="page-btn blind">페이지5</a></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section1Component;