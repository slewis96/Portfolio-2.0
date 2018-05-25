$(function() {
	$.scrollify({
		section:".overlay",
		scrollSpeed:1000,
		after:function(i) {
		}
	});
	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();
		$.scrollify.next();
	});
});
function nextScroll(x){
  $.scrollify({
		section:x,
		scrollSpeed:1800,
		after:function(i) {
		}
	});
}
