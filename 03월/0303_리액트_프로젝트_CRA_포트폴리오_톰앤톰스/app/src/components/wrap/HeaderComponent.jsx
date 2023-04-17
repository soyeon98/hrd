import React from 'react';

function HeaderComponent ()  {
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="logo">
                        <h1>
                            <a href="!#"><img src="./img/logo.png" alt=""/></a>
                        </h1>
                    </div>
                    <nav className="nav-box">
                        <div className="row1">
                            <ul className="nav-top">
                                <li><a href="!#">매장찾기</a></li>
                                <li><a href="!#">탐앤탐스 몰</a></li>
                                <li><a href="!#">ENGLISH</a></li>
                                <li><a href="!#">CHINESE</a></li>
                            </ul>    
                        </div>
                        <div className="row2">
                            <ul className="nav-bottom">
                                <li><a href="!#">MENU</a></li>
                                <li><a href="!#">EVENT</a></li>
                                <li><a href="!#">STORE</a></li>
                                <li><a href="!#">SERVICE</a></li>
                                <li><a href="!#">COMMUNITY</a></li>
                                <li><a href="!#">TOM N TOMS</a></li>
                            </ul>    
                        </div>
                    </nav>
                    <div id="mobile">
                        <div className="mbl-left">
                            <div className="mbl-btn">
                                <a href="!#" className="line line1 blind">a</a>
                                <a href="!#" className="line line2 blind">a</a>
                                <a href="!#" className="line line3 blind">a</a>
                            </div>
                        </div>
                        <div className="mbl-right">
                            <div className="mbl-mall">
                                <img src="./img/tomntoms_mall_i.png" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderComponent;