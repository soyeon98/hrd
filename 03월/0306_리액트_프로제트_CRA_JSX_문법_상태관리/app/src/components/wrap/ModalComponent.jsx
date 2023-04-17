import React from 'react';
import imgSrc from '../../imgs/photography-img18.jpg';
import '../../scss/style_modal.scss';


export default function ModalComponent ({modalcloseFn}) {
    const onclickModalClose=(e)=>{
     e.preventDefault();
     modalcloseFn();
    }
    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="img-box">
                        <img src={imgSrc} alt="" />
                    </div>
                    <button onClick={onclickModalClose}>닫기</button>
                </div>
            </div>
        </div>
    );
};

