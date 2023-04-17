import React from 'react';


export default function HeaderComponent  ({cnt})  {

    const style={
        header:{
            padding:'130px',
            background:'#fff'
        },
        h1:{
            color:'#333',
            fontSize:'42px'
        }
    }

    return (
        <header id="header" style={style.header}>
            <h1 style={style.h1}>{cnt}</h1>
        </header>
    );
};

