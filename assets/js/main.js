$(document).ready(function () {
    $('.table_Public > i').click(function () {
        $(this).parent().siblings('.table_body-detail').toggleClass('show');
    });
    $('.detail_tab').each(function (index) {
        $('.detail_tab .nav-tabs').attr('id', 'nav-tab-' + index);
        $('.detail_tab .tab-content').attr('id', 'nav-tabContent-' + index);
        $('#nav-service-tab').attr({
            id: 'nav-service-tab-' + index,
            'data-bs-target': '#nav-service-' + index,
            'aria-controls': 'nav-service-' + index
        });
        $('#nav-tour-tab').attr({
            id: 'nav-tour-tab-' + index,
            'data-bs-target': '#nav-tour-' + index,
            'aria-controls': 'nav-tour-' + index
        });
        $('#nav-blacklist-tab').attr({
            id: 'nav-blacklist-tab-' + index,
            'data-bs-target': '#nav-blacklist-' + index,
            'aria-controls': 'nav-blacklist-' + index
        });
        $('#nav-service').attr({
            id: 'nav-service-' + index,
            'aria-labelledby': 'nav-service-tab-' + index
        });
        $('#nav-tour').attr({
            id: 'nav-tour-' + index,
            'aria-labelledby': 'nav-tour-tab-' + index
        });
        $('#nav-blacklist').attr({
            id: 'nav-blacklist-' + index,
            'aria-labelledby': 'nav-blacklist-tab-' + index
        });
    });
    $(window).resize(function () {
        var width = $(".camera_display img").width();
        $(".camera_display img").height(width / 1.78);
        var width_01 = $(".camera_display canvas").width();
        $(".camera_display canvas").height(width_01 / 1.78);
        var width_02 = $(".camera_display video").width();
        $(".camera_display video").height(width_02 / 1.78);
    }).resize();
    //End Login
    $(function () {
        $('.bck').backToTop({
            iconName: 'fas fa-chevron-up',
            trigger: 300,
            fxName: 'fade',
            fxTransitionDuration: 300,
            scrollDuration: 300
        });

    });
});