$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".fa").fadeIn();
        } else {
            $(".fa").fadeOut();
        }
    });

    $(".fa").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 500);
    });

    $(".menu-btn").click(function () {
        $(".main-nav").toggleClass("active");
    });
});