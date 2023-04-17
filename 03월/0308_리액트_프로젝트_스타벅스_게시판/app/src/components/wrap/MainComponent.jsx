import React from 'react';
import '../../scss/main.scss';

export default function MainComponent  ({공지사항})  {
    React.useEffect(()=>{

    
    })
    return (
        <main id="main">
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>공지사항</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>NO</th>
                                        <th>제목</th>
                                        <th>날짜</th>
                                        <th>조회수</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        공지사항.map((i,idx)=>{
                                            return(
                                                <tr key={idx}>
                                                    <td>{idx+1}</td>
                                                    <td><a href="!#">{i.제목}</a></td>                                                 
                                                    <td>{i.날짜}</td>                                                 
                                                    <td>{i.조회수}</td>                                                 
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

