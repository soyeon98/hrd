;(($)=>{
    $('.member-grade-btn-xml').on({
        click(){
            $.ajax({
                url:'./data/member.xml',
                type:'get',
                dataType:'xml',
                success(res){
                    // console.log('AJAX 성공');
                    // console.log(res);
                    let a = [];
                    // 1. 줄단위 가져오기
                    // 2. 칸단위 가져와서 배열에 저장
                    // console.log($(res).find('record')); 
                    $.each($(res).find('record'),function(idx,item){
                        // console.log(idx,item);
                        a[idx]=[];
                        a[idx][0]=$(item).find("hakbun").text();
                        a[idx][1]=$(item).find("irum").text();
                        a[idx][2]=$(item).find("hakgwa").text();
                        a[idx][3]=$(item).find("addr").text();
                        a[idx][4]=$(item).find("hp").text();
                    });
                    console.log(a);
                    // $(res).find('record').each(function(idx,item){
                    //     console.log(idx,$(item).find("hakbun").text(),$(item).find("irum").text(),$(item).find("hakgwa").text(),$(item).find("addr").text(),$(item).find("hp").text());
                    //     console.log(idx,item);
                    //     a[idx]=[];
                    //     a[idx][0]=$(item).find("hakbun").text();
                    //     a[idx][1]=$(item).find("irum").text();
                    //     a[idx][2]=$(item).find("hakgwa").text();
                    //     a[idx][3]=$(item).find("addr").text();
                    //     a[idx][4]=$(item).find("hp").text();
  
                    // });
                    $('.tbody-xml').empty();
                    for(let i=0;i<a.length;i++){
                        $('.tbody-xml').append(`<tr>`);
                        for(let j=0;j<a[i].length;j++){
                            $('.tbody-xml').append(`<td>${a[i][j]}</td>`);
                        }
                        $('.tbody-xml').append(`</tr>`);
                    }
                },
                error(err){
                    console.log(`AJAX 실패 ${err}`);
                }
            })
        }
    });
})(jQuery);