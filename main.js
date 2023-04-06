var btn = document.getElementById('btn');

btn.onclick = function (e) {
	e.preventDefault();
	var text = document.querySelector('span');
	text.classList.add('red');
}
$(function () {
	$(window).scroll(function() {
	    $('.skills').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.section-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("jello");
	        }
	    });
	});
})