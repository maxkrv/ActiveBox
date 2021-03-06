$(function() {
    // header
    let header = $("#header");
    let intro = $("#intro").innerHeight();
    // let introH = intro.;
    let scrollPos = $(window).scrollTop();

    function checkScroll() {
        if(scrollPos > intro) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed");
        }
    }
    checkScroll(scrollPos, intro);

    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();      
        checkScroll(scrollPos, intro);
    });

    // scroll
    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;
        nav.removeClass("active")

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 800);
    });

    // navToggle
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(e) { 
        e.preventDefault();

        nav.toggleClass("active");
     });

    // Reviews slider
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
});