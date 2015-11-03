$().ready(function(){
	
	//alert("linked");
	$('.btn-box img').on('click', function(){});
	
	
	// button 2 click function
	$('.div-btn').on('click', function(){
		$this = $(this);
		//alert($(this).css("background-color"));
		if($(this).css("background-color") == "rgb(87, 156, 1)"){
			$(this).css({
						"background":"rgb(154, 156, 157) url('../assets/ex-2.png') no-repeat center center",
						"background-size":"60%",
						"-ms-transform":"rotate(45deg)", /* IE 9 */
						"-webkit-transform":"rotate(45deg)", /* Chrome, Safari, Opera */
						"transform":"rotate(45deg)",
						"border-top-left-radius":"0",
			});
			$('.ex-form').css({"display":"block"});
		} else {
			$(this).css({
						"background":"rgb(87, 156, 1) url('../assets/ex-1.png') no-repeat center center",
						"background-size":"60%",
						"-ms-transform":"rotate(-25deg)", /* IE 9 */
						"-webkit-transform":"rotate(-25deg)", /* Chrome, Safari, Opera */
						"transform":"rotate(-25deg)",
						"border-top-left-radius":"50%",
					});
			$('.ex-form').css({"display":"none"});
		}
	});
});
