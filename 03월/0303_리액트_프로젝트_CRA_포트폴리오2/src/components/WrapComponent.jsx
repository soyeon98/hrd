import React from 'react';
import SkipComponent from './wrap/SkipComponent.jsx';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import GoTopComponent from './wrap/GoTopComponent.jsx';

//rsc -> const지우고 function =, => 지우기
function WrapComponent(){
    return (
        <div id="wrap">
            <SkipComponent/>
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <GoTopComponent/>
            
        </div>
    );
};

export default WrapComponent;