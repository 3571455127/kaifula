$(function () {
    // 数字自增
    $('.counter').countUp();
    // wap-banner 
    var mySwiper = new Swiper('.wap-banner .swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1200,
        pagination: {
            el: '.wap-banner .swiper-pagination',
            clickable: true,
        }
    });

    // index-project
    var swiper = new Swiper('.index-project .swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1200,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.index-project .swiper-button-next',
            prevEl: '.index-project .swiper-button-prev',
        },
    });
    // index-partner
    var swiper = new Swiper('.index-partner .swiper-container', {
        autoplay: true,
        loop: true,
        speed: 1200,
        slidesPerView: 5,
        spaceBetween: 30,
        navigation: {
            nextEl: '.index-partner .swiper-button-next',
            prevEl: '.index-partner .swiper-button-prev',
        },
    });

    // product-show
    var galleryThumbs = new Swiper('.description .gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });
    var galleryTop = new Swiper('.description .gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.description .swiper-button-next',
            prevEl: '.description .swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    // product-show related
    var swiper = new Swiper('.related .swiper-container', {
        slidesPerView: 4,
        spaceBetween: 20,
        autoplay: true,
        loop: true,
        speed: 1200,
        navigation: {
            nextEl: '.related .swiper-button-next',
            prevEl: '.related .swiper-button-prev',
        },
        pagination: {
            el: '.related .swiper-pagination',
            clickable: true,
        },
    });


    // 头部导航
    $(".level>li").hover(function () {
        $(this).find(".secondary").slideDown(500)
    }, function () {
        $(".secondary").hide()
    });
    $(".secondary>li").hover(function () {
        $(this).find(".third").slideDown(500)
    }, function () {
        $(".third").hide()
    });

    // top
    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            $("header .navs").addClass("stricky-fixed");
            $(".scroll-top").show(600)
        } else {
            $("header .navs").removeClass("stricky-fixed");
            $(".scroll-top").hide(600)
        }
    });
    $(".scroll-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000);
    });


    // faq
    $(".first-nav .box").click(function () {
        var flag = $(this).next().is(':hidden');
        $(this).next().css("border-bottom", "1px solid #0089d2");
        console.log(flag);
        flag ? $(this).next().slideDown(500) : $(this).next().slideUp(500);

    })

    // wap菜单切换
    $('.arrow').click(function () {
        $(this).toggleClass('active3');
        $(this).siblings('.mt_ul').slideToggle(300);
    })
    $(".h_right").click(function () {
        $(".bgs").animate({
            "right": "0"
        }, 200);
    })
    $('.bg_l').click(function () {
        $(".bgs").animate({
            "right": "-100%"
        }, 200);
    })

    $("#asideMenu").treemenu({
        'delay': 200,
        'closeOther': true,
        'openActive': true
    });

    // 768
    var windowWidth = $(window).width();
    if (windowWidth < 768) {

    }


})

var submitcount2 = 0;

function beforeSubmit2(form) {

    if (form.name.value == '') {
        alert('Name can not be empty');
        form.name.focus();
        return false;
    } else if (form.email.value == '') {
        alert('Please enter the correct email format');
        form.email.focus();
        return false;
    } else if (form.email.value.indexOf('@') < 0) {
        alert('The email is wrong');
        form.email.focus();
        return false;
    } else if (form.company.value == '') {
        alert('The company can not be empty');
        form.company.focus();
        return false;
    } else if (form.message.value == '') {
        alert('The message can not be empty');
        form.message.focus();
        return false;
    } else {

        if (submitcount2 == 0) {
            submitcount2++;
            return true;
        } else {
            alert("Message is being sent, please wait!");
            return false;

        }
    }

}