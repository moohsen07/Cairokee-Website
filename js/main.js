$(document).ready(function () {

    $('.navbar li a').click(function (e) {
        e.preventDefault();

        // add class active on navbar 

        $(this).addClass('active-nav').parent().siblings().find('a').removeClass('active-nav');

        // smoth scroll to element

        $('html,body').animate({

            scrollTop: $('#' + $(this).data('scroll')).offset().top + 5

        }, 1000)
    });

    // sync sections with links

    $(window).scroll(function () {

        $('.block').each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {

                var blockID = $(this).attr('id');

                $('.navbar li a').removeClass('active-nav');

                $('.navbar li a[data-scroll="' + blockID + '"]').addClass('active-nav');
            }


        });
    });

    // Start member slider

    $('.next').on('click', function () {

        var currentMember = $('.member.active');

        var nextMember = currentMember.next();

        if (currentMember.is(':last-child')) {

            currentMember.hide().removeClass('active');

            $('.member').eq(0).fadeIn(1000).addClass('active')

        }

        else {
            currentMember.hide().removeClass('active');

            nextMember.fadeIn(1000).addClass('active');
        }
    })

    $('.prev').on('click', function () {

        var currentMember = $('.active');

        var prevMember = currentMember.prev();

        if (currentMember.is(':first-child')) {

            currentMember.hide().removeClass('active');

            $('.member:last').fadeIn(1000).addClass('active')


        }

        else {
            currentMember.hide().removeClass('active');

            prevMember.fadeIn(1000).addClass('active');
        }
    });

    // show the hover element

    $('.youtube .hover-elem').hover(function () {

        $(this).find('.video').animate({
            opacity: 1

        }, 500)

        $(this).find('.hover-inner span').animate({
            opacity: 1,
            left: 0
        }, 500)

        $(this).find('.hover-inner h3').animate({
            opacity: 1,
            top: 0
        }, 500)

    }, function () {

        $(this).find('.video').animate({
            opacity: 0

        }, 500)

        $(this).find('.hover-inner span').animate({
            opacity: 0,
            left: 30
        }, 500)

        $(this).find('.hover-inner h3').animate({
            opacity: 0,
            top: 40
        }, 500)

    });

    // gallery modal

    var modal = $("#myModal"),

        modalImg = $("#img01"),

        img = $(".myImg");

    img.click(function () {

        modal.css("display", "block");

        modalImg.attr("src", $(this).attr("src"))

    });
    // close the modal by click anywhere

    modal.click(function () {

        modal.css("display", "none")

    });

    // stopPropagation at modalImg

    modalImg.click(function (e) {

        e.stopPropagation();
    })

    // Show Scroll To Top

    var scrollTop = $('.scroll-top')

    $(window).scroll(function () {

        if ($(window).scrollTop() > 2000) {

            scrollTop.fadeIn(400)

        } else {

            scrollTop.fadeOut(400)
        }

    });

    // Activate Scroll Top Button

    scrollTop.click(function () {

        $('html , body').animate({

            scrollTop: 0
        }, 1500)

    })


});
