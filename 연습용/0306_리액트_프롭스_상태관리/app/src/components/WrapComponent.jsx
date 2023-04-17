import React from 'react';
import HeaderComponent from './wrap/HeaderComponent';
import MainComponent from './wrap/MainComponent';
import '../scss/style.scss';



export default function WrapComponent({wrapProps}) {

    const [state, setState] = React.useState({wrapProps});

    const countDown = () => {
        let cnt = 60;
        setInterval(function(){
            cnt--;
            if(cnt<=0){
                cnt=60;
            }
            setState({
                ...state,
                cnt:cnt
                
            });
        },1000);
    }
       

    React.useEffect(()=>{
        countDown();
    },[]);


   
    return (
        <div id='wrap'>
            <HeaderComponent cnt={state.cnt}/>
            <MainComponent/>
        </div>
    );


    };

WrapComponent.defaultProps ={
    wrapProps:{
    cnt:0,
    setId:0
    }
}
