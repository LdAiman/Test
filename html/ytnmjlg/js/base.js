// JavaScript Document
$(function(){
	autoSizeHeight();
	window.onresize = function(){
		autoSizeHeight();
    };
	//banner
	Banner();
	$(".h3_title").css("margin-left",-($(".h3_title").width()/2)+"px");
	$(".spot li img").css("height",0.6*$(".spot li img").width()+"px");
	//page-1
	var a=$(".page").width()/2;
	var h=$(".page").height();
	var b=h-a;
	$(".left-top").css({"border-left":a+"px solid #fff","border-bottom":a+"px solid transparent"});
	$(".right-bottom").css({"border-left":b+"px solid transparent","border-bottom":b+"px solid #fff"});
	$(".center-box").css({"height":a+"px"});
	//page-2
	$(".proimg_wrap li img").css("height",0.48*h+"px");
	$(".intro").css("height",0.22*h+"px");
	//page-3
	$(".page3-top").css("height",0.38*h+"px");
	$(".page3-center").css("height",0.29*h+"px");
	$(".page3-bottom").css("height",0.33*h+"px");
	//page-4
	$(".page4-rt .rtimg img").css("height",h/3+"px");
	//page-5
	$(".page5-top").css("height",0.38*h+"px");
	$(".page5-center").css("height",0.3*h+"px");
	$(".page5-bottom").css("height",0.32*h+"px");
	$(".case").css({"width":$(".bot_rt").width()-16+'px',"height":0.32*h-16+'px'})
	
	//page6
	/*$(".page.page6").on("touchmove",function(){
		$(".page6-shade").slideDown();
	})*/
	$(".abs-rt").click(function(){
		$(".page6-shade").slideUp();
	})
	//竖排文字
	var wordW=parseInt($(".topbox p").css("font-size"));
	var $Hnum=parseInt($(".case").height()/(wordW+3));
    var $Wnum=parseInt($(".case").width()/(wordW+8));
	$(".silo-text").html(lineWord($(".silo-text").text(),$Hnum,$Wnum));	
})

//固定导航
function autoSizeHeight(winH){	
	var winH = $(window).height();
	$(".content").height(winH);	
}

//轮播图
function Banner(){
	var banner_len = $('.proimg_wrap').find('ul li').length;
	if( banner_len <= 1 ) return;
	var scrollTimer = 0;
	for(var i=0; i < banner_len; i++){
		$('#mySwipe').find('.swipedot').append("<span></span>");
	}
	$('#mySwipe').find('.swipedot span').eq(0).addClass('current');
	var elem = document.getElementById('mySwipe');
	window.mySwipe = new Swipe(elem, {
		startSlide: 0,
		auto: 3000,
		continuous: true,
		// disableScroll: true,
		// stopPropagation: true,
		callback: function(index, element) {
			$(elem).find('.swipedot span.current').removeClass('current');
			$(elem).find('.swipedot span').eq(index).addClass('current');
		},
		transitionEnd: function(index, element) {}
	});

	for(var i=0; i<$(".recommendlist li").length; i++){
		$('part_num_wrap').find(".swipedot").append("<span></span>");
	}
	$('part_num_wrap').find(".swipedot span").eq(0).addClass("active");
}

function lineWord(str,n,m){
	var htmlArray = [];
	htmlArray.push("");
	for(var i = 0, len=m*n; i<len; i+=n) {
		htmlArray.push("<p>"+str.substring(i, i+(n-1))+"</p>");
	}
	htmlArray.push("");
	return htmlArray.join("");
}
