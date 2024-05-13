$(document).ready(function() {

    // Sections Scroll
    let navBtn = $('.nav-item');

    let sliderSection = $('#slider-container');
    let projectsSection = $('#featured-container');
    let propertiesSection = $('#info-container');
    let contactSection = $('#footer');

    let scrollTo='';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        if(btnId == 'projects-menu') {
            scrollTo = projectsSection;
        }
        else if(btnId == 'properties-menu') {
            scrollTo = propertiesSection;
        }
        else if(btnId == 'contact-menu') {
            scrollTo = contactSection;
        }
        else {
            scrollTo = sliderSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top-150
        }, 1500);
    });
});