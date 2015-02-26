$(function(){
    //图片滚动加载

    $(".scrollLoading").length && $(".scrollLoading").scrollLoading();

    //图片划入出
    $(document).on("mouseover","a",function(){
        $(this).find("div.hot-info").length && $(this).find("div.hot-info").stop().animate({bottom:"0px"},200);
    });

    $(document).on("mouseleave","a",function(){
        var widthBox = $(this).find("div.hot-info").height();
        $(this).find("div.hot-info").length && $(this).find("div.hot-info").stop().animate({bottom:"-"+widthBox+"px"},300);
    });

    //占位符
    $("#asc").placeholder();

})