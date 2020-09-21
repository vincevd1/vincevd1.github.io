$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(() => {
    updateHeader()
    updateSections()

    setTimeout(() => {
        console.log('test')
        $('.loader').css('transform', 'translateY(-100vh)')
        setTimeout(() => {
            $('.loader').remove()
            $('html').css('overflow', 'auto')
        }, 500)
    }, 2000)
})

$(window).on('resize', () => {
    updateHeader()
    updateSections()
})

$(window).scroll(() => {
    var elements = $('.numberedheading, .grid, .artworkshowcase')

    elements.each((i, el) => {
        if ($(el).visible(true)) {
            $(el).css('transform', 'translateY(0)')
        }
    })
});

$('.hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.sideBar').toggleClass('is-visible')
    $('.mainContainer').toggleClass('blur')
});

$('img').attr('draggable', false);

function updateHeader() {
    if ($(window).width() < 800) {
        $('.headerNav').css('display', 'none')
        $('.hamburger').css('display', 'block')
    } else {
        $('.headerNav').css('display', 'block')
        $('.hamburger').css('display', 'none')

        if($('.hamburger').hasClass('is-active')) {
            $('.hamburger').toggleClass('is-active');
            $('.sideBar').toggleClass('is-visible')
            $('.mainContainer').toggleClass('blur')
        }
    }
}

function updateSections() {
    if ($(window).width() < 900) {
        $('.grid').css('display', 'block')
        $('.portretfoto > img').css({
            'max-width': '50%',
            'max-height': '50%'
        })
        $('.portretfoto').css('margin', '50px 0px')
    } else {
        $('.grid').css('display', 'grid')
        $('.portretfoto > img').css({
           'max-width': '100%',
           'max-height': '100%'
        })
        $('.portretfoto').css('margin', '0')
    }
}
      