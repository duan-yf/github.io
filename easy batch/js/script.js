$(	
	function  () {
		fixNav();
		getTop();
	}
	
)
//此函数实现的功能就是固定导航
function fixNav(){
//	$(".navbar-header").hide();
	var top = 0;
	var bodyWidth = $("html").width();
	$(window).scroll(function  () {
		top = $(this).scrollTop();
		if(top > 50){			
			$("#custom-nav-right").hide();	
			$("#custom-nav").addClass("custom-nav-right");
			if(bodyWidth > 768){
				$(".navbar-header").hide();
				$(".navbar").height(68);
				$(".footer").show();
			}else{
				$(".navbar-header").show();
				$(".navbar").height(68);
				$(".footer").hide();
			}
		}else{
			$(".navbar-header").show();
			$("#custom-nav").removeClass("custom-nav-right");
			if(bodyWidth > 768){
				$("#custom-nav-right").show();
				$(".navbar").height(78);
			}else{
				$("#custom-nav-right").hide();
				$(".navbar").height(68);
			}			
		}
	});
}
//此函数实现的功能是回到顶部
function getTop () {
	//1.页面刚加载的时候隐藏回到顶部这个盒子
	$(".get_top").hide();
	//2.滚动到下方的某一处显示回到顶部这个盒子
	$(window).scroll(function  () {
		var top = $(this).scrollTop();
		if(top > 300){
			$(".get_top").fadeIn(2000);
		}else{
			$(".get_top").fadeOut(300);
		}
	});
	//3.给回到顶部这个盒子添加单击事件，让页面回到顶部
	$(".get_top").click(function  () {
		$("body,html").animate({"scrollTop":0},100);
	});
}




