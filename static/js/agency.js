$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash && window.location.pathname == "/") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});
$(document).ready(function () {
    var maxOffset = 300;
    $(window).scroll(function () {
        if ($(window).scrollTop() >= maxOffset) {
            $('.navbar-default').addClass('navbar-shrink');
        } else {
            $('.navbar-default').removeClass('navbar-shrink');
        }
    });
});
$(document).ready(function () {
    var maxOffset = 300;
    if ($(window).scrollTop() >= maxOffset) {
        $('.navbar-default').addClass('navbar-shrink');
    } else {
        $('.navbar-default').removeClass('navbar-shrink');
    }
});
$('body').scrollspy({target: '.navbar-fixed-top'})
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});
$('form[id=contactForm]').submit(function () {
    $.post($(this).attr('action'), $(this).serialize(), function (res) {
        $('form[id=contactForm] #error').hide();
        $('form[id=contactForm] #success').show();
        $('form[id=contactForm]').trigger("reset");
        $('form[id=contactForm] .btn').prop('disabled', true);
    }, "json").fail(function () {
        $('form[id=contactForm] #success').hide();
        $('form[id=contactForm] #error').hide();
        $('form[id=contactForm] #error').show();
    });
    return false;
});
$.validate({modules: 'html5, toggleDisabled'});