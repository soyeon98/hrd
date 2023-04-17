import React from 'react';
import '../../scss/main.scss';

export default  function MainComponent ({성적}) {
    
    React.useEffect(()=>{

        // for문
        // for(let i=0; i<성적.length; i++){
        //     console.log(`이름:${성적[i].이름} 국어: ${성적[i].국어}점 수학:${성적[i].수학}점`);
        //     console.log(`${성적[i].국어+성적[i].영어+성적[i].수학}`);
        // }
        // map함수
        // 성적.map((item,idx) => {
        //     console.log(idx,item.이름,item.국어+item.영어+item.수학);
        // })
    })

    const grade = 성적.map((item,idx)=>{ 
        return(
            <tr key={item.번호}>  {/* key써줘야 오류 안뜸 */}
                <td>{item.번호}</td>
                <td>{item.이름}</td>
                <td>{item.국어}</td>
                <td>{item.영어}</td>
                <td>{item.수학}</td>
                <td>{item.수학+item.국어+item.영어}</td>
                <td>{Math.round((item.수학+item.국어+item.영어)/3)}</td>
            </tr>
        )
    })




    return (
        <main id="main">
            <section id="section1">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>중간고사</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>이름</th>
                                        <th>국어</th>
                                        <th>영어</th>
                                        <th>수학</th>
                                        <th>총점</th>
                                        <th>평균</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        성적.map((item,idx)=>{ 
                                            return(
                                                <tr key={item.번호}>  {/* key써줘야 오류 안뜸 */}
                                                    <td>{item.번호}</td>
                                                    <td>{item.이름}</td>
                                                    <td>{item.국어}</td>
                                                    <td>{item.영어}</td>
                                                    <td>{item.수학}</td>
                                                    <td>{item.수학+item.국어+item.영어}</td>
                                                    <td>{Math.round((item.수학+item.국어+item.영어)/3)}</td>
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
            <section id="section2">
                <div className="container">
                    <div className="gap">
                        <div className="title">
                            <h2>기말고사</h2>
                        </div>
                        <div className="content">
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>이름</th>
                                        <th>국어</th>
                                        <th>영어</th>
                                        <th>수학</th>
                                        <th>총점</th>
                                        <th>평균</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        grade
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

