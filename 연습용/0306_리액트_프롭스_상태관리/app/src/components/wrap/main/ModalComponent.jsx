import React from 'react';
import imgSrc from '../../../imgs/photography-img16.jpg';
import '../../../scss/style_modal.scss';

export default  function ModalComponent  ({modalCloseFn})  {
    const onclickModalClose=(e)=>{
        e.preventDefault();
        modalCloseFn();
    }
    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="img-box">
                        <img src={imgSrc} alt="" />
                    </div>
                    <button onClick={onclickModalClose}>EXIT</button>
                </div>
            </div>
        </div>
    );
};

