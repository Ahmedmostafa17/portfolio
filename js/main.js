$(document).ready(function() {
    let $btn = $('.project-area .button-groups button');
    $btn.click(function(e) {
        $('.project-area .button-groups button').removeClass("active");
        e.target.classList.add('active');

        let selector = $(e.target).attr("data-filter");
        $('.project-area .grid').isotope({

            filter: selector
        });
        return false;
    })



    /** owlCarousel*/
    $(".about-client .owl-carousel").owlCarousel({

        loop: true,
        autoplay: true,
        dots: true,
        responsive: {

            0: {
                items: 1
            },
            544: {
                items: 2

            }
        }
    });

    //navbar

    let offsetTop = $('.header-area').height() + 60;

    function navbarFixed() {
        if ($('.header-area').length) {

            $(window).scroll(function() {

                let scroll = $(window).scrollTop();
                if (scroll >= offsetTop) {
                    $('.header-area .navbar').addClass('fixed');
                } else {
                    $('.header-area .navbar').removeClass('fixed');

                }
            })
        }
    }

    navbarFixed();
});






























// var nav = document.querySelector('#navbar');
// var navTop = nav.offsetTop;

// function fixNav() {
//     if (window.scrollY >= navTop) {
//         document.body.classList.add('fixed-nav')
//     } else {

//         document.body.classList.remove('fixed-nav')

//     }

// }
// window.addEventListener('scroll', fixNav);

// $(function() {




//     $(window).scroll(function() {


//         if ($(window).scrollTop() > 100) {
//             $('.navbar').css('backgroundColor', 'rgba(0,0,0,0.8)');
//         } else {
//             $('.navbar').css('backgroundColor', 'transparent');
//         }

//     });





// });