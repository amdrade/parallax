
   jQuery(document).ready(function(){
   	$('.bgParallax').parallaxbg();
	$('#parallax').mousemove(
		function(e){
			var offset = $(this).offset();
			var xpos = e.pageX - offset.left;
			var ypos = e.pageY - offset.top;
			var mousex = Math.round(xpos / $(this).width()*100);
			var mousey = Math.round(ypos / $(this).height()*100);
			$(this).children('.bola').each(
				function(){
					var difx = $('#parallax').width() - $(this).width();
					var dify = $('#parallax').height() - $(this).height();
					
					var novox = difx * (mousex / 100);
					var novoy = dify * (mousey / 100);

					$(this).animate({left: novox, top: novoy},{duration: 50, queue: false, easing: 'linear'});
				}
			);
		}
	);
	
	$('#parallax-bg').mousemove(function(e){
		var offset = $(this).offset();
		var xpos = e.pageX - offset.left;
		var ypos = e.pageY - offset.top;
		var mousex = Math.round(xpos / $(this).width()*100);
		var mousey = Math.round(ypos / $(this).height()*100);
		var bg = -mousex + 'px ' + -mousey + "px";
		$(this).css('background-position',bg);
	});

	/*$('div.bgParallax').each(function(){
		var $obj = $(this);
		$(window).scroll(function() {
			var yPos = -($(window).scrollTop() / $obj.data('speed')); 
			var bgpos = '50% '+ yPos + 'px';
			$obj.css('background-position', bgpos );
		}); 
	});*/

	

	(function( $ ){
    $.fn.tooltip = function(options) {
        var defaults = {
          'corDeFundo' : 'yellow'
        };
        var settings = $.extend( {}, defaults, options );
        return this.each(function() {
            $(this).css({ background: settings.corDeFundo });
        });
    }; 
})( jQuery );
});

(function ($){
		$.fn.parallaxbg = function(){
			return this.each(function(){
				var obj = $(this);
				$(window).scroll(function(){
					var yPos = -($(window).scrollTop() / obj.data('speed')); 
					var bgpos = '50% '+ yPos + 'px';
					obj.css('background-position',bgpos);
				});
			});
		};
	})(jQuery);