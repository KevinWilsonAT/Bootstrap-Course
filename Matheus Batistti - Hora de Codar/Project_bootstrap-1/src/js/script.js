$(document).ready(function() {

    // Progress Bar

    let containerA = document.getElementById("circleA");
    let containerB = document.getElementById("circleB");
    let containerC = document.getElementById("circleC");
    let containerD = document.getElementById("circleD");

    let circleA = new ProgressBar.Circle(containerA, {

        color: '#64daf9',
        strokeWidth: 8,
        duration: 1500,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke',state.color);
            let value = Math.round(circle.value() * 60);
            circle.setText(value);

        }
    });

    let circleB = new ProgressBar.Circle(containerB, {

        color: '#64daf9',
        strokeWidth: 8,
        duration: 2000,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke',state.color);
            let value = Math.round(circle.value() * 254);
            circle.setText(value);

        }
    });

    let circleC = new ProgressBar.Circle(containerC, {

        color: '#64daf9',
        strokeWidth: 8,
        duration: 1000,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke',state.color);
            let value = Math.round(circle.value() * 32);
            circle.setText(value);

        }
    });

    let circleD = new ProgressBar.Circle(containerD, {

        color: '#64daf9',
        strokeWidth: 8,
        duration: 3000,
        from: {color: '#aaa'},
        to: {color: '#65daf9'},

        step: function(state, circle) {
            
            circle.path.setAttribute('stroke',state.color);
            let value = Math.round(circle.value() * 5243);
            circle.setText(value);

        }
    });

    // Start Loader

    let dataAreaOffset = $('#data-area').offset();
    let stop = 0;

    $(window).scroll(function(e) {

        let scroll = $(window).scrollTop();
    
        if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
            circleA.animate(1.0);
            circleB.animate(1.0);
            circleC.animate(1.0);
            circleD.animate(1.0);

            stop = 1;
        }
    });

    // Parallax

    setTimeout(function() {
        $('#data-area').parallax({imageSrc:'./src/img/cidadeparallax.png'});
        $('#apply-area').parallax({imageSrc:'./src/img/pattern.png'});
    }, 250);

    // Portfolio filter

    $('.filter-btn').on('click', function() {
        let type = $(this).attr('id');
        let boxes = $('.project-box');

        $('.main-btn').removeClass('active');
        $(this).addClass('active');

        if(type == 'dsg-btn') {
            eachBoxes('dsg', boxes)
        }
        else if(type == 'dev-btn') {
            eachBoxes('dev', boxes)
        }
        else if(type == 'seo-btn') {
            eachBoxes('seo', boxes)
        }
        else {
            eachBoxes('all', boxes)
        }
    });

    function eachBoxes(type, boxes){
        if(type == 'all') {
            $(boxes).fadeIn();
        }
        else {
            $(boxes).each(function() {
                if(!$(this).hasClass(type)) {
                    $(this).fadeOut('slow');
                }
                else {
                    $(this).fadeIn();
                }
            });
        }
    }

    // Sections Scroll
    let navBtn = $('.nav-item');

    let bannerSection = $('#mainSlider');
    let aboutSection = $('#about-area');
    let servicesSection = $('#services-area');
    let teamSection = $('#team-area');
    let portfolioSection = $('#portfolio-area');
    let contactSection = $('#contact-area');

    let scrollTo='';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        }
        else if(btnId == 'services-menu') {
            scrollTo = servicesSection;
        }
        else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        }
        else if(btnId == 'portfolio-menu') {
            scrollTo = portfolioSection;
        }
        else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        }
        else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });
});