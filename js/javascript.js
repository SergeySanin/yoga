$("#btn-one").mouseover(function() {
	$("#header-one").addClass("hover");
});
$("#btn-one").mouseout(function() {
	$("#header-one").removeClass("hover");
});


$("#btn-two").mouseover(function() {
	$("#header-two").addClass("hover");
});
$("#btn-two").mouseout(function() {
	$("#header-two").removeClass("hover");
});


$("#btn-three").mouseover(function() {
	$("#header-three").addClass("hover");
});
$("#btn-three").mouseout(function() {
	$("#header-three").removeClass("hover");
});


	$(document).ready(function(){
    $("a[href*=#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top-98
        }, 1500);
        e.preventDefault();
        return false;
    });
});