$(
	function  () {
		$(".mytab_head li").eq(0).addClass("on");
		$(".mytab_content").eq(0).siblings().css("display","none");
		$(".mytab_head li").mouseover(function  () {
			$(this).addClass("on").siblings().removeClass("on");
			var t = $(".mytab_head li").index(this);//取经过li的序号
			$(".mytab_content").eq(t).css("display","block").siblings().css("display","none");
		});
	}
)
