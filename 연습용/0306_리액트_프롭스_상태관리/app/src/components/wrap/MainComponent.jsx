import React from 'react';
import ModalComponent from './main/ModalComponent';
import imgDog from '../../imgs/photography-img30.jpg';

export default function MainComponent  ({mainProps})  {
    const [state, setState] = React.useState({mainProps});
    const style={
        button:{
            height:'50px',
            background:'#000',
            color:'#fff',
            cursor:'pointer',
            fontSize:'20px',
            padding:'0 30px'
        }
    }
    const modalCloseFn=()=>{
        setState({
            ...state,
            isModal: false
        })
    }
    const modalOpenFn=()=>{
        setState({
            ...state,
            isModal: true
        })
    }
    const onClickModalOpen=(e)=>{
        e.preventDefault();
        modalOpenFn();
    }



    return (
           <main id="main">
                 {
                    state.isModal && <ModalComponent modalCloseFn={modalCloseFn}/>}
                <div className="img-box">
                    <img src={imgDog} alt="" />                  
                </div>
                <button onClick={onClickModalOpen} style={style.button}>OPEN</button>
           </main>
    );
};
MainComponent.defaultProps ={
    mainProps:{
        isModal:false 
        }
    }

