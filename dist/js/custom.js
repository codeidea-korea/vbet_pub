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
    })
    .catch((error) => {
        console.log(error);
    });

    // 푸터 
    fetch("./_footer.html")
    .then((response) => response.text())
    .then((htmlData) => {
        $('#wrap').append(htmlData);
        footerScript();
        setTimeout(function(){
            loadJquery();
        },100)
    })
    .catch((error) => {
        console.log(error);
    });

    // 모달 
    fetch("./_modal.html")
    .then((response) => response.text())
    .then((htmlData) => {
        $('#wrap').append(htmlData);
    })
    .catch((error) => {
        console.log(error);
    });
    
    // 모달 
    fetch("./_profile_modal.html")
    .then((response) => response.text())
    .then((htmlData) => {
        $('#wrap').append(htmlData);
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

const footerScript = ()=>{

    setInterval(()=>{
        let timestamp = new Date().getTime();
        let date = new Date(timestamp);

        $('footer .now_time .hour').text(("0" + date.getHours()).slice(-2))
        $('footer .now_time .min').text(("0" + date.getMinutes()).slice(-2))
        $('footer .now_time .sec').text(("0" + date.getSeconds()).slice(-2))
    },1000);

    let fooT = $('footer').offset().top;
    
    $(window).on('resize',function(){
        fooT = $('footer').offset().top;
    })

    $(window).on('scroll',function(){
        let topStartPoint = fooT - $(window).outerHeight() - 400;
        let scrollT = $(this).scrollTop();

        if(topStartPoint < scrollT){
            $('#quick_top').addClass('on')
        }else{
            $('#quick_top').removeClass('on')
        }
    })

    $('#quick_top').on('click',function(){
        $('html,body').animate({scrollTop:0})
    })

    $('footer .fold_btn').on('click',function(){
        $('footer').toggleClass('on')
    })

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

// right_pop open 
const rightPopToggle = (item)=>{
    $(`#${item}`).toggleClass('open')
    setTimeout(function(){
        $(`#${item}`).find('.right_pop_box').toggleClass('show')
    },0)
}

// 버튼 토글
const tabActiveToggle = (item)=>{
    $(item).addClass('active').parent('li').siblings().find('button').removeClass('active')
}

const btnActiveRadio = (item)=>{
    $(item).addClass('active').siblings().removeClass('active')
}

const gameActive = (item)=>{
    $(item).toggleClass('active')
}


// faq
const faqToggle = (item)=>{
    $(item).parent().toggleClass('open')
}
const gameToggle = (item)=>{
    $(item).parents('.game_fold').toggleClass('open')
}
const gameToggle2 = (item)=>{
    $(item).parents('.game_fold2').toggleClass('open')
}

// game_fold 전체 제어
const gameAllToggle = (item,cate)=>{
    if($(item).hasClass('active')){
        $(item).removeClass('active')
        $(item).parents('.bet_btn_box').find('.game_fold').removeClass('open')
    }else{
        $(item).addClass('active')
        $(item).parents('.bet_btn_box').find('.game_fold').addClass('open')
    }
}

// 모바일메뉴 토글
const moMenuToggle = (item)=>{
    $('.mo_quick .menu').toggleClass('on')
    $('.mo_quick_menu').toggleClass('open')
}

// 모바일메뉴 - 2depth 토글
const menuToggle = (item,state)=>{
    if(state == "on"){
        $(item).next('.depth2').addClass('on')
        $(item).parent().siblings().find('.depth2').removeClass('on')
        
        $(item).parents('.menu').addClass('on')
    }else{
        $(item).parents('.depth2').prev().removeClass('on')
        $(item).parents('.menu').removeClass('on')
    }
}

// provider
const providerChange = (target,item)=>{
    $(target).addClass('on').siblings('button').removeClass('on');
    if(item=='list'){
        $('.sub_game .provider_list').addClass('list')
    }else{
        $('.sub_game .provider_list').removeClass('list')
    }
}

const providerToggle = (item)=>{
    $('.sub_game').toggleClass('close')
    if(item == "close"){
        $('.sub_game .close_btn').addClass('hidden')
        $('.sub_game .open_btn').removeClass('hidden')
    }else{
        $('.sub_game .open_btn').addClass('hidden')
        $('.sub_game .close_btn').removeClass('hidden')
    }
}

const GamesList = (item)=>{
    $(item).toggleClass('on')
    $('.sub_game .games .type_1').toggleClass('hidden')
    $('.sub_game .games .type_2').toggleClass('hidden')
}

const gameMoSearch = (item)=>{
    $(item).parent('.mo_search').toggleClass('on')
}
const gameSearch = (item)=>{
    $(item).parent('.fold_search').toggleClass('on')
}

const gameMoProvider = ()=>{
    $('.sub_game .provider').toggleClass('fold')
}

const providerClick = (item)=>{
    $(item).toggleClass('on')
}

// filter
const mofilterShow = (item)=>{
    $(item).toggleClass('rounded')
    $(item).find('>i').toggleClass('rotate-180')
    $(item).next('div').toggleClass('hidden')
}

// detailProvider
const detailProvider = (item)=>{
    $(item).toggleClass('left-full left-0')
}

// input readonly toggle
const inputReadToggle = (item)=>{
    let icon = $(item).find('i')

    if(icon.hasClass('bc-i-edit')){
        icon.removeClass('bc-i-edit').addClass('bc-i-checked')
        $(item).siblings('input').attr('readonly',true)
    }else{
        icon.addClass('bc-i-edit').removeClass('bc-i-checked')
        $(item).siblings('input').attr('readonly',false)
    }
}

// banner toggle fold
const bannerHeightToggle = (item)=>{
    $(item).toggleClass('rotate-180')
    $(item).parent().toggleClass('h-8')
}

// search toggle
const searchToggle = (item)=>{
    if($(item).hasClass('bc-i-search')){
        $(item).removeClass('bc-i-search').addClass('bc-i-close-remove')
        $(item).next('input').show().css('width','calc(100% - 36px')
    }else{
        $(item).addClass('bc-i-search').removeClass('bc-i-close-remove')
        $(item).next('input').hide().css('width','0')
    }
}

// 찜아이콘
const zzimToggle = (item) =>{
    $(item).toggleClass('bc-i-favorite bc-i-star')
}

// grid 변경
const changeGrid = (item,num)=>{
    $(item).addClass('text-opacity-100').removeClass('text-opacity-50');
    $(item).siblings().removeClass('text-opacity-100').addClass('text-opacity-50');
    if(num=='one'){
        $('.game_fold_wrap').removeClass('grid-cols-2').addClass('grid-cols-1');
    }else{
        $('.game_fold_wrap').addClass('grid-cols-2').removeClass('grid-cols-1');
    }
}

// gamecate
const gameCateToggle = (item)=>{
    $('.gamecate_btn').each(function(){
        if($(this).data('btn') !== $(item).data('btn')){
            $(this).removeClass('active')
        }else{
            $(this).toggleClass('active')
        }
    })
}

// 모바일 Result 페이지 오픈
const moResultOpen = (item)=>{
    console.log($(window).width())
    if($(window).width()< 767 ){
        modalOpen('sport_result-modal')
    }
}

// sports > column
const MultiColumnChecked = (item)=>{
    $('.multi_column_wrap').toggleClass('active')
    $('.multi_column > div').toggleClass('hidden')
    if(!$(item).prop('checked')){
        $('.multi_column_wrap').removeClass('one')
    }
}
const MultiColumnToggle = (item)=>{
    $('.multi_column_wrap').toggleClass('one')
}

// sport list toggle 
const sportListToggle = (item)=>{
    $('.multi_column_wrap').toggleClass('list')
}

// input_wrap 에서 input에 내용 입력했을때 클래스 추가
const inputChange = (item)=>{
    if($(item).val().length > 0){
        $(item).parent('.input_wrap').addClass('on')
    }else{
        $(item).parent('.input_wrap').removeClass('on')
    }
}

// password <---> text
const passwordChange = (item)=>{
    let type = $(item).siblings('input').attr('type')

    if(type == 'text'){
        $(item).siblings('input').attr('type','password')
    }else{
        $(item).siblings('input').attr('type','text')
    }

    $(item).toggleClass('bc-i-eye bc-i-eye-hidden')
}

// 테마색상 변경
const themeColor = (item)=>{
    $('html').removeClass('black light type2').addClass(item);
}

// 프로필 탭
const profileTab = (item)=>{
    let target = $(item).data('target')
    let name = '';
    if($(item).find('p').length == 0){
        name = $(item).text();
    }else{
        name = $(item).find('p').text()
    }
    $('#profile-modal #profielTit').text(name);

    $('#profile-modal .profile_tab').each(function(){
        if($(this).data('target') != $(item).data('target')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    });
    $('#profile-modal .profile_inner > div').removeClass('active');
    $(`#profile-modal .profile_inner > div[data-cont="${target}"]`).addClass('active');

    // 모바일에서 사용
    $('#profile-modal .profile_left').removeClass('open')
    $('#profile-modal .profile_right').addClass('open')
}
const profileTabPrev = (item)=>{
    $('#profile-modal .profile_left').addClass('open')
    $('#profile-modal .profile_right').removeClass('open')
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
                type:  $('.mySwiper.num' + index + ' .pagination').hasClass('fraction') ? "fraction" : $('.mySwiper.num' + index + ' .pagination').hasClass('progressbar') ? "progressbar": "bullets",
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
                el: '.mySwiper.num' + index + ' .scrollbar',
                // hide: true,
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

    // 스포츠 슬라이드
    $('.reactSlide').each(function(index){
        let idx = index + 100
        $(this).addClass('num'+idx);		
        let xlpcItemPer = $(this).data('xl') ? $(this).data('xl') : 1,
            pcItemPer = $(this).data('lg') ? $(this).data('lg') : xlpcItemPer,
            taItemPer = $(this).data('md') ? $(this).data('md') : pcItemPer,
            moItemPer = $(this).data('mo') ? $(this).data('mo') : 1,
            itemGap = $(this).data('gap') ? $(this).data('gap') : 0,
            // itemGroup = $(this).data('group') ?$(this).data('group') : 1,
            slideLoop = $(this).data('loop') == true ? true : false ;
        
        var reactSlide = new Swiper( '.reactSlide.num' + idx + ' .swiper-container', {
            spaceBetween: parseInt(itemGap),
            slidesPerView : moItemPer,
            slidesPerGroup : Math.floor(moItemPer),
            loop: slideLoop,
            pagination: {
                el: '.reactSlide.num' + idx + ' .pagination',
                clickable: true,
                type:  $('.reactSlide.num' + idx + ' .pagination').hasClass('fraction') ? "fraction" : "bullets",
            },
            breakpoints: {
                767: {
                  slidesPerView: taItemPer,
                  slidesPerGroup : Math.floor(taItemPer),
                },
                1020: {
                  slidesPerView: pcItemPer,
                  slidesPerGroup : Math.floor(pcItemPer),
                },
                1365: {
                  slidesPerView: xlpcItemPer,
                  slidesPerGroup : Math.floor(xlpcItemPer),
                }
            },
            navigation: {
                nextEl: '.reactSlide.num' + idx + ' .next',
                prevEl: '.reactSlide.num' + idx + ' .prev'
            },

        });
    })

    // custom_select 버튼 클릭
    $('.custom_select > button, .custom_select > .select_button').on('click',function(){
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

        if(Parents.hasClass('check')){
            let checkText = []
            $(this).parents('ul').find('li').each(function(){
                if($(this).find('input').val() !== "all"){
                    if($(this).find('input').prop('checked')){
                        checkText.push($(this).find('label').text())
                    }
                }
            })
            if(Parents.find('> button')){
                Parents.find('> button p').html(checkText.join());
            }else{
                Parents.find('> .select_button p').html(checkText.join());
            }
        }else{
            $(this).addClass('active').siblings().removeClass('active')
            // option 닫기
            Parents.removeClass('open')
            if(Parents.find('> button')){
                Parents.find('> button p').html(text);
            }else{
                Parents.find('> .select_button p').html(text);
            }
        }
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

    document.addEventListener('click',(e)=>{
        const right = document.querySelector('.right_pop_area.open')
        const rightIn = document.querySelector('.right_pop_box.show')

        if(rightIn && !rightIn.contains(e.target)){
            right.classList.remove('open')
            rightIn.classList.remove('show')
        }
    })

    // 드래그
    const DraggModal = $(".draggable_modal");
    
    $('.draggable_modal_open').on('click', function() {
        DraggModal.addClass('show');

        // show 클래스가 추가된 후 300ms 지연
        setTimeout(function() {
            DraggModal.removeClass('transition-all');
        }, 200);
    });
    
    DraggModal.draggable({ handle: ".draggable_modal_header" });
    
    $('.draggable_modal_close').on('click', function() {
        DraggModal.removeClass('show');
        DraggModal.addClass('transition-all');
    });


    // Litepicker
    $(".datepicker").each(function () {
        let options = {
            autoApply: true,
            singleMode: false,
            numberOfColumns: 2,
            numberOfMonths: 2,
            showWeekNumbers: true,
            format: "DD.MM.YYYY",
            dropdowns: {
                minYear: 1990,
                maxYear: null,
                months: true,
                years: true,
            },
        };

        if ($(this).data("single-mode")) {
            options.singleMode = true;
            options.numberOfColumns = 1;
            options.numberOfMonths = 1;
        }

        if ($(this).data("format")) {
            options.format = $(this).data("format");
        }

        if (!$(this).val()) {
            let day = new Date().toLocaleDateString().split('.');
            let today = `${day[2]}.${day[1]}.${day[0]}`;
            $(this).val(today.replaceAll(' ',''));
        }

        // if (!$(this).val()) {
        //     let date = dayjs().format(options.format);
        //     date += !options.singleMode
        //         ? " - " + dayjs().add(1, "month").format(options.format)
        //         : "";
        //     $(this).val(date);
        // }

        new Litepicker({
            element: this,
            ...options,
        });
    });
        

}
