import React from 'react';
import '../../../scss/modal.scss';


export default  function ModalComponent ({isTimer,isTimerFn,ModalClose,modalMsg}) {

    const onClickModalClose =(e)=>{
        e.preventDefault();
        ModalClose(); // 상위 컴포넌트의 모달닫기 함수 호출
        isTimer && isTimerFn();
    }
    return (
        <div id='modal'>
            <div className="wrap">
                <div className="container">
                    <div className="content">
                        <div className="msg-box">
                            <p>
                                {modalMsg}
                            </p>
                        </div>
                        <div className="btn-box">
                            <button onClick={onClickModalClose}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

