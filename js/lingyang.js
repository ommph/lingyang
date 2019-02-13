$(function(){

	var pay = $(".f_fastpay a").find("em");
	//点击设置弹出的内容	
	$(".myservice_set").click(function(e){
		e.stopPropagation();
		e.preventDefault();
		$(".f_setpop").show();
		$(".f_setcontentlist ul li").eq(0).trigger('click');
	})

	$(".f_setclose").click(function(){
		$(".f_setpop").hide();
	})

	$(".f_setcontentlist ul li").click(function(){		
		$(this).find("img").removeClass("z_right");
		$(this).siblings().find("img").addClass("z_right");
	})


	/*点击购买套餐*/

	$(".myservice_buy").click(function(){
		$(".f_buypop").show();
	})

	$(".f_setclose").click(function(){
		$(".f_buypop").hide();
	})

	$(".f_buylist ul li:eq(0)").click(function(){
		var money = $(this).find(".z_500minutes_money").text();
		$(pay).text(money);
		$(this).addClass("f_500minutesactive");
		$(this).find(".z_500minutes_money").addClass("z_500minutes_moneyactive");
		$(this).find(".z_500minutes_minutes").addClass("z_500minutes_minutesactive");

		$(".f_buylist ul li:eq(1)").removeClass("f_1000minutesactive");
		$(".f_buylist ul li:eq(1)").find(".z_500minutes_money").removeClass("z_1000minutes_moneyactive");
		$(".f_buylist ul li:eq(1)").find(".z_500minutes_minutes").removeClass("z_1000minutes_minutesactive");

		$(".f_buylist ul li:eq(2)").removeClass("f_3000minutesactive");
		$(".f_buylist ul li:eq(2)").find(".z_500minutes_money").removeClass("z_3000minutes_moneyactive");
		$(".f_buylist ul li:eq(2)").find(".z_500minutes_minutes").removeClass("z_3000minutes_minutesactive");	
	})

	$(".f_buylist ul li:eq(1)").click(function(){
		var money = $(this).find(".z_1000minutes_money").text();
		$(pay).text(money);
		$(this).addClass("f_1000minutesactive");
		$(this).find(".z_500minutes_money").addClass("z_1000minutes_moneyactive");
		$(this).find(".z_500minutes_minutes").addClass("z_1000minutes_minutesactive");

		$(".f_buylist ul li:eq(0)").removeClass("f_500minutesactive");
		$(".f_buylist ul li:eq(0)").find(".z_500minutes_money").removeClass("z_500minutes_moneyactive");
		$(".f_buylist ul li:eq(0)").find(".z_500minutes_minutes").removeClass("z_500minutes_minutesactive");

		$(".f_buylist ul li:eq(2)").removeClass("f_3000minutesactive");
		$(".f_buylist ul li:eq(2)").find(".z_500minutes_money").removeClass("z_300minutes_moneyactive");
		$(".f_buylist ul li:eq(2)").find(".z_500minutes_minutes").removeClass("z_3000minutes_minutesactive");		
	})

	$(".f_buylist ul li:eq(2)").click(function(){
		var money = $(this).find(".z_3000minutes_money").text();
		$(pay).text(money);
		$(this).addClass("f_3000minutesactive");
		$(this).find(".z_500minutes_money").addClass("z_3000minutes_moneyactive");
		$(this).find(".z_500minutes_minutes").addClass("z_3000minutes_minutesactive");

		$(".f_buylist ul li:eq(0)").removeClass("f_500minutesactive");
		$(".f_buylist ul li:eq(0)").find(".z_500minutes_money").removeClass("z_500minutes_moneyactive");
		$(".f_buylist ul li:eq(0)").find(".z_500minutes_minutes").removeClass("z_500minutes_minutesactive");

		$(".f_buylist ul li:eq(1)").removeClass("f_1000minutesactive");
		$(".f_buylist ul li:eq(1)").find(".z_500minutes_money").removeClass("z_1000minutes_moneyactive");
		$(".f_buylist ul li:eq(1)").find(".z_500minutes_minutes").removeClass("z_1000minutes_minutesactive");		
	})


})