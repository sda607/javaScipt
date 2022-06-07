$(document).ready(function(){
    $("tr:even").css("background", "red");
    $("tr:odd").css("background", "orange");
    $(":Header").css("background", "blue");
    $("li:eq(0)").css("background", "navy");
    $("li:gt(0)").css("background", "purple");
    $(":root").css("background", "lightgray");
    (function upDown(){
        $("h2").slideToggle(2000,upDown);
    })();
    $(":animated").css("border","4px solid red");

})