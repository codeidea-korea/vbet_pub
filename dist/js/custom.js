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

    // 스와이퍼 공통
    $('.mySwiper').each(function(index) {
        var mySwiper = $(this),
            swiperContainer = $(this).find('.swiper-container'),
            itemPer = $(this).attr('data-per') ? $(this).attr('data-per') : 1,
            itemGap = $(this).attr('data-gap') ? $(this).attr('data-gap') : 0,
            slideLoop = $(this).attr('data-loop') == 'false' ? false : true,
            slideCenter = $(this).attr('data-center') == 'true' ? true : false,
            slidePlayTime = $(this).attr('data-timer') ? $(this).attr('data-timer') * 1000 : 0;
            effect = $(this).attr('data-effect') ? $(this).attr('data-effect') : 'slide';
            initial = $(this).attr('data-initial') ? $(this).attr('data-initial') : 0;
            itemSpeed = $(this).attr('data-speed') ? $(this).attr('data-speed') : 1000;
        $(this).addClass('num'+index);		
        var swiper =  new Swiper( '.mySwiper.num' + index + ' .swiper-container', {
            spaceBetween: parseInt(itemGap),
            slidesPerView: itemPer == 'auto' ? "auto" : itemPer,
            effect: effect,
            pagination: {
                el: '.mySwiper.num' + index + ' .pagination',
                clickable: true,
                type:  $('.mySwiper.num' + index + ' .pagination').hasClass('fraction') ? "fraction" : "bullets",
            },
            navigation: {
                nextEl: '.mySwiper.num' + index + ' .next',
                prevEl: '.mySwiper.num' + index + ' .prev'
            },
            speed : itemSpeed,
            centeredSlides: slideCenter,
            autoplay: slidePlayTime ? {delay: parseInt(slidePlayTime),disableOnInteraction:true} : false,
            loop: slideLoop,
            initialSlide: initial,
            scrollbar: {
                el: '.mySwiper.num' + index + ' .swiper-scrollbar',
                hide: true,
            }
        });		
        if($(this).attr('data-slideto') == '1') {
            $(slideWrapper.find('.swiper-slide')).click(function() {
                var i = $(this).index();
                swiper.slideTo(i,700,false);
            });
        }
        if($(this).attr('data-click')){
            $('.mySwiper li').on('click',function(){
                swiper.slideTo($(this).index())
            })
        }
        if($(this).attr('data-group')){
            swiper.on('slideChangeTransitionEnd',function(swiper){
                let data = $('.mySwiper.num'+index).find('.swiper-slide-active').data('group')
                $('.mySwiper.num'+index).find('.group').text(data)
            })
        }
    });

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