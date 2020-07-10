
$(document).ready(function() {
	
	// GNB sub
	$('.gnbsub .inner').animate({opacity: 0.0}, 300);
	$('div#gnb li').hover(function() {
		//var exception = $(this).attr('class');
		//if(exception.match('webzine1') || exception.match('webzine')) {  } // 웹진, 퀵링크는 제외
		//else gnbOpen($(this));
        gnbOpen($(this))
	} , function() {
		gnblCose($(this));
	});
	$('div#gnb li a.d1').focus(function() {
		var obj = $('div#gnb li');
		obj.find('.gnbsub').hide();
		//var exception = $(this).parent().attr('class');
		//if(exception.match('webzine1') || exception.match('webzine') ) {  } // 웹진, 퀵링크는 제외
		//else gnbOpen($(this).parent());
        gnbOpen($(this).parent());
	});
//	$('div#gnb .section:last-child ul > *:last-child a').blur(function() {
//		var obj = $('div#gnb li');
//		obj.find('.gnbsub').hide();
//		obj.find('img').each(function() {
//			$(this).attr('src', $(this).attr('src').replace('_on', '_off'));
//		});
//	});

});

// gnb hover
function gnbOpen(obj) {
	// IE6 width 100%
	if(navigator.userAgent.match('MSIE 6')) {
		var winw = document.documentElement.offsetWidth - 17;
		//obj.find('.gnbsub').css('width',winw);
	}
	if (navigator.userAgent.match('MSIE 6') && navigator.userAgent.match('MSIE 7')&& navigator.userAgent.match('MSIE 8')) {
		//$(".gnbsub").append('<iframe id="iframe" title="빈프레임"></iframe>');
	} 
	obj.find('.gnbsub').show();
	//obj.find('.gnbsub').animate({height: '320px'}, 500, function() {});
	obj.find('.gnbsub').css('height','');
	obj.find('.gnbsub .inner').animate({opacity: 1.0}, 100);
	obj.find('img').each(function() {
		$(this).attr('src', $(this).attr('src').replace('_off', '_on'));
	});
}
// gnb out
function gnblCose(obj) {
	obj.find('.inner').animate({opacity: 0.0}, 100);
	setTimeout(function(){ obj.find('.gnbsub').hide(); },100); 
	obj.find('img').each(function() {
		$(this).attr('src',$(this).attr('src').replace('_on', '_off'));
	});
	if (navigator.userAgent.match('MSIE 6') && navigator.userAgent.match('MSIE 7')) {
		$(".gnbsub").find('#iframe').remove();
	} 
}











