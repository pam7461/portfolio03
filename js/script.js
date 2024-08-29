$(function(){

    $('.logo').addClass('active');

    let aboutTop = $('.about').offset().top - 240;
    let skillTop = $('.skill').offset().top - 240;
    let portfolioTop = $('.portfolio').offset().top - 240;
    let contactTop = $('.contact').offset().top - 240;

    function fnModal(jsonData,idx){
        $('.modal-wrap .art').addClass(jsonData[idx].class);
        $('.modal-wrap img').attr('src',jsonData[idx].src);
        $('.modal-wrap img').attr('alt',jsonData[idx].alt);
        $('.modal-wrap video').attr('src',jsonData[idx].video);
        $('body').css({overflow:'hidden'});
        if($('.modal-wrap video').attr('src') == '#'){
            $('.modal-wrap video').hide();
        }else{
            $('.modal-wrap video').show();
        }
        $('.modal-wrap').fadeIn(300);
    }

    $(window).scroll(function(){
        let scrTop = $(this).scrollTop();
        if(scrTop>=300){
            $('.header').addClass('active');
        }else{
            $('.header').removeClass('active');
        }
        
        if(scrTop>=aboutTop){
            $('.about').addClass('active');
        }else{
            $('.about').removeClass('active');
        }

        if(scrTop>=skillTop){
            $('.skill').addClass('active');
        }else{
            $('.skill').removeClass('active');
        }

        if(scrTop>=portfolioTop){
            $('.portfolio').addClass('active');
        }else{
            $('.portfolio').removeClass('active');
        }

        if(scrTop>=contactTop){
            $('.contact').addClass('active');
        }else{
            $('.contact').removeClass('active');
        }
        
    })

    $('.design a,.design .img-box,.video a,.video .img-box').click(function(e){
        let acIdx = $(this).attr('data-idx');

        $.ajax({
            url:'./json/modal.json',
            dataType:'json',
            success:function(loadData){
                fnModal(loadData,acIdx);
            },
            error:function(){
                alert('지금은 서비스 점검시간입니다.');
            }
        });
        

        e.preventDefault();
    })

    $('.btn-modal-close').click(function(){
        $('body').css({overflow:'auto'});            
        $('.modal-wrap').fadeOut(300);
    })

    $('.port .img-box').css({cursor:'pointer'});

    $('.pub-img').click(function(){
        let thisHref = $(this).attr('data-href');
        window.open(thisHref);
    })

    AOS.init();

    $('#btn-kakao').click(function(){
        $('.kakao').toggle(300);
    })

    function fnTyping(txtEl,speed,elTxt){
        let txtElHeight = txtEl.height();
        let idx = 0;
        let lastIdx = elTxt.length-1;
        txtEl.css({
            height:`${txtElHeight}px`,
            display:'block'
        });
        txtEl.text('');
        
        let typing = setInterval(function(){
            let insertTxt = txtEl.text() + elTxt[idx++];
            txtEl.text(insertTxt);
            if(idx>lastIdx){
                clearInterval(typing);
            }
        },speed);
    };
    setTimeout(function(){
        fnTyping($('.intro h3'),500,'portfolio');
    },3500);
    fnTyping($('.footer strong'),100,'이 사이트는 개인 포트폴리오 용도로 제작되었습니다.');
    setInterval(function(){
        fnTyping($('.footer strong'),100,'이 사이트는 개인 포트폴리오 용도로 제작되었습니다.');
    },5000);
        
})