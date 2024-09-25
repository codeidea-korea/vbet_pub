//=======================================================
//   html load
//=======================================================


window.addEventListener("load", ()=>{
    // 로딩이미지 가리기
    const loader = document.querySelector('#main-loader')
    if(loader){
        setTimeout(function(){
            loader.classList.add('hide')
        },1000)
    }

    // 헤더 
    fetch("./_header.html")
    .then((response) => response.text())
    .then((htmlData) => {
        $('#wrap').prepend(htmlData);
        headerScript();
        loadJquery();
    })
    .catch((error) => {
        console.log(error);
    });
    

});

const headerScript = ()=>{

    setInterval(()=>{
        let timestamp = new Date().getTime();
        let date = new Date(timestamp);

        $('header .now_time .hour').text(("0" + date.getHours()).slice(-2))
        $('header .now_time .min').text(("0" + date.getMinutes()).slice(-2))
        $('header .now_time .sec').text(("0" + date.getSeconds()).slice(-2))
    },1000)


}


// 모달 오픈
const modalOpen = (item)=>{
    const modal = document.querySelector(`#${item}`);
    modal.classList.add('show','overflow-y-auto');
    modal.style.marginTop = "0";
    modal.style.marginLeft = "0";
    modal.style.paddingLeft = "0";
    modal.style.zIndex = "10000";
    document.querySelector('body').classList.add('overflow-hidden');
}

// 모달 닫기
const modalClose = (item)=>{
    const modal = document.querySelector(`#${item}`);
    modal.classList.remove('show','overflow-y-auto');
    modal.style.marginTop = "-10000px";
    modal.style.marginLeft = "-10000px";
    modal.style.paddingLeft = "0";
    modal.style.zIndex = "0";
    document.querySelector('body').classList.remove('overflow-hidden');
}


// jquery 모음
const loadJquery = ()=>{

    // custom_select 버튼 클릭
    $('.custom_select > button').on('click',function(){
        let Parents = $(this).parents('.custom_select');
        if(Parents.hasClass('open')){
            Parents.removeClass('open')
        }else{
            Parents.addClass('open')
        }
    });

    // custom_select option 클릭
    $('.custom_select > div li').on('click',function(){
        let Parents = $(this).parents('.custom_select');
        let text = $(this).find('p').html();

        // option 닫기
        Parents.removeClass('open')
        Parents.find('> button p').html(text);
    })
    // custom_select 외의 영역 선택했을 시 닫기 
    document.addEventListener('click',(e)=>{
        const select = document.querySelectorAll('.custom_select.open')

        select.forEach((item)=>{
            if(item && !item.contains(e.target)){
                item.classList.remove('open')
            }
        })
    })

}