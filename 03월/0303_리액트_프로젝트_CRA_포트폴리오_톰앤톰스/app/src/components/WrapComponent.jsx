import React from 'react';
import HeaderComponent from './wrap/HeaderComponent.jsx';
import MainComponent from './wrap/MainComponent.jsx';
import FooterComponent from './wrap/FooterComponent.jsx';
import ChatBoxComponent from './wrap/ChatBoxComponent.jsx';
import GoTopComponent from './wrap/GoTopComponent.jsx';

function WrapComponent () {
    return (
        <div id="wrap">
            <HeaderComponent/>
            <MainComponent/>
            <FooterComponent/>
            <ChatBoxComponent/>
            <GoTopComponent/>
        </div>
    );
};

export default WrapComponent;