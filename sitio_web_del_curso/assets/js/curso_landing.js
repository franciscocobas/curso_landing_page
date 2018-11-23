function scrollToTop() {
    $("html, body").animate({
    scrollTop: 0
    }, 1000);
}

function scrollToSection(sectionName) {
    var sectionName = '.' + sectionName;
    if ($(sectionName).length != 0) {
        $("html, body").animate({
        scrollTop: $(sectionName).offset().top
        }, 1000);
    }
};