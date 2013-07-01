/**
 * User: Alexis DUCERF
 * Date: 01/07/13
 * Time: 11:16
 */


(function ($) {
    $.fn.infiniteLoop = function (width, height) {

        var InfiniteLoopImgWidth = $(this).find('img').width() ;
        var infiniteLoopTime = $(this).find('img').width() / 0.04;
        var InfiniteLoopSelector = $(this) ;
        var InfiniteLoopSelectorCpt = 0;


        $(this).find('img').wrap("<ul></ul>");
        $(this).find('img').wrap("<li></li>");

        $(this).find("li").attr('id', "slide1");

        $(this).css("width", width+"px");
        $(this).css("height", height+"px");
        $(this).css("overflow", "hidden");
        $(this).css("position", "absolute");
        $(this).find('ul').css("width", InfiniteLoopImgWidth*3+"px");
        $(this).find('ul').css("height" , height+"px");
        $(this).find('ul').css("padding" , "0");
        $(this).find('ul').css("margin" , "0");
        $(this).find('ul').css("list-style" , "none");
        $(this).find('li').css("float" , "left");

        $(this).find('li').first().clone().appendTo($(this).find('ul')).attr('id', "slide2");
        $(this).find('li').first().clone().appendTo($(this).find('ul')).attr('id', "slide3");;

        $(this).find("ul").animate({marginLeft: -InfiniteLoopImgWidth}, infiniteLoopTime, 'linear', function () {
            $(this).css({marginLeft: 0}).find("li:last").after($(this).find("li:first"));
        })

        setInterval(function () {
            InfiniteLoopSelectorCpt++;
            InfiniteLoopSelector.find("ul").animate({marginLeft: -InfiniteLoopImgWidth}, infiniteLoopTime, 'linear', function () {
               $(this).css({marginLeft: 0}).find("li:last").after( $(this).find("li:first"));
            })
        }, infiniteLoopTime);
    };

})(jQuery)


