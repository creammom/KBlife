// 헤더
$(function () {
    $(".pc_header .menu_box > ul > li > a").on("mouseenter", function () {
        $(".pc_header .menu_box a").removeClass("active");
        $(".pc_header .sub_menu_wrap").hide();
        $(this).addClass("active");
        $(this).siblings(".sub_menu_wrap").show();
    });

    $(".pc_header .menu_box > ul").on("mouseleave", function () {
        $(".pc_header .menu_box a").removeClass("active");
        $(".pc_header .sub_menu_wrap").hide();
    });
});
