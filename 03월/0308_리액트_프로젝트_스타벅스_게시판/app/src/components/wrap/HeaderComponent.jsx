import React from 'react';
import '../../scss/header.scss';
import logo from '../../imgs/logo.png';

export default function HeaderComponent  ()  {
    return (
        <header id="header">
            <div className="container">
                <div className="gap">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
        </header>
    );
};

