function timer() {
    var countbox = document.querySelectorAll(".countbox");
    var box = "<div class='countbox_wrap'><div class='countbox_num'><span class='hours'></span></div><p class='countbox_text'>часов</p></div><div class='countbox_wrap'><div class='countbox_num'><span class='minutes'></span></div><p class='countbox_text'>минут</p></div><div class='countbox_wrap'><div class='countbox_num'><span class='seconds'></span></div><p class='countbox_text'>секунд</p></div>";
    inner(countbox, box);
    var h = document.querySelectorAll(".hours"),
        m = document.querySelectorAll(".minutes"),
        s = document.querySelectorAll(".seconds"),
        nD = new Date();
    function inner(x, y) {
        for (var i = 0; i < x.length; i++) {
            x[i].innerHTML = y;
        }
    }
    function getTime() {
        inner(s, getNum(59, nD.getSeconds()));
        inner(m, getNum(59, nD.getMinutes()));
        inner(h, getNum(23, nD.getHours()));
    }
    function getNum(x, y) {
        return ((x - y) < 10 ? '0' : '') + (x - y);
    }
    setInterval(function() {
        nD = new Date();
        var got = getNum(59, nD.getSeconds());
        if (+got !== 59) {
            inner(s, got);
        } else {
            getTime();
        }
    }, 1000);
    getTime();
};
window.onload = function() {
    timer()
};
$(document).ready(function() {

    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });
    $(".feedback_slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: true,
        loop: true,
        lazyLoad: false,
        nav: true,
        dots:true,
        navText: false,
        margin: 10,
        items: 1  
    });

    $(".show_slider").owlCarousel({
        navigation: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        pagination: true,
        loop: true,
        items:1,
        lazyLoad: false,
        nav: true,
        dots:false,
        navText: false,
        responsiveClass: true
    });
});
