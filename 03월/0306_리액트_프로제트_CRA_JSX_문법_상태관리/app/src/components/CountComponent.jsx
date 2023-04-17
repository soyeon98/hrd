import React from 'react';
import WrapComponent from './WrapComponent';

function CountComponent  (props)  {
    const [state,setState] = React.useState(props);
        // 카운트함수
    // 타이머 제작
    const countDown =()=>{
        let cnt = 9;
        let setId =0;
        setId=setInterval(function(){
            cnt--;
            if(cnt<=0){
                clearInterval(setId);
            }
            setState({
                ...state,
                cnt:cnt,
                setId: setId
            })
        },1000);
    }
    React.useEffect(()=>{

        countDown();

        // setState({
        //     ...state, // 전개연산자
        //     타이틀:'상태관리 타이틀 수정 내용',
        //     이름:'김유신'
        // });

        //     console.log(state.이름);
        //     console.log(state.아이디);
        //     console.log(state.비밀번호);
        //     console.log(state.타이틀);
    },[]); //빈배열 로딩시 한번만 실행
    return (
        <>
        <WrapComponent cnt={state.cnt}/>
        </>
    );
};

CountComponent.defaultProps ={
    cnt:0,
    setId:0
}

export default CountComponent;