import React from 'react';
import axios from 'axios';
import Sub4CompnentChild from './Sub4CompnentChild';

export default function Sub4Compnent () {
    const [state,setState] = React.useState({
        특가혜택:[]
    });
    const getAlProduct=()=>{
        axios({
            url:'./data/product.json',
            method:'GET'
        })
        .then((res)=>{
         
            setState({
                ...state,
                특가혜택:res.data.특가혜택
            });
        })
        .catch((err)=>{
            console.log("AXIOS 오류",err);
        })
    } 
    React.useEffect(()=>{
        getAlProduct();
    },[]);
    return (
        <main id="sub4">
            <Sub4CompnentChild 특가혜택={state.특가혜택}/>
        </main>
    );
};

