
$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        

        e.target.classList.add('active');
      

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
            
        });

        return false;
    })

    let $btns2 = $('.header_area .main-menu .nav-item a');
    $btns2.click(function (e) {

        $('.header_area .main-menu .nav-item a').removeClass('active');
    
        e.target.classList.add('active');
      
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height();

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});