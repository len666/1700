//ios下载地址
var downIosUrl = 'https://u4g9n3.apmcgpd.xyz/';

//安卓下载地址
var downAndroidUrl = 'https://u4g9n3.apmcgpd.xyz';

var isIos = (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent));

$('.download').click('on',function() {
    if(isIos) {
        window.location.href = downIosUrl;
    }else {
        window.location.href = downAndroidUrl;
    }
});

$(window).ready(function() {
    var mySwiper = new Swiper('.swiper_banner',{
        speed: 300,
        loop: true,
        autoplay:true,
        effect:'slide',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});