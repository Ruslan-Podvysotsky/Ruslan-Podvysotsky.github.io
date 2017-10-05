var $nav = $('.nav');

$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $nav.addClass('header__fixed');
    }
    else {
        $nav.removeClass('header__fixed');
    }
});

