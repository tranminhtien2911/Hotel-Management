$(document).ready(function () {
    $('.table_Public > i').click(function () {
        $(this).parent().siblings('.table_body-detail').toggleClass('show');
        let tabs = $(this).parent().siblings('.table_body-detail').find('.detail_tab-item > span');
        let notification = $(this).parent().find('.table_body-feil > span').text();
        let radio = $(this).parent().siblings('.table_body-detail').find('.detail_tab .radio');
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].textContent === notification) {
                radio[i].checked = true;
            }
        };
    });
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