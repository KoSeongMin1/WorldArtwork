$(".mainmenu>li").mouseover(function(){
    $(this).children(".submenu").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(this).children(".submenu").stop().slideUp();
});

setInterval(function(){
    $(".slide").delay(2300);
    $(".slide").animate({marginTop:"-300px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginTop:"-600px"},700);
    $(".slide").delay(2300);
    $(".slide").animate({marginTop:"0px"},700);
});

$(".onClick").click(function(){
    $("#modal").show();
});
$(".modalbutton").click(function(){
    $("#modal").hide();
});