$().ready(function(){
	
	//alert("linked");
	$('.btn-box img').on('click', function(){});
	
	// START FORM 2
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
			$('.ex-form-green-button').css({"display":"block"});
		} else {
			$(this).css({
						"background":"rgb(87, 156, 1) url('../assets/ex-1.png') no-repeat center center",
						"background-size":"60%",
						"-ms-transform":"rotate(-25deg)", /* IE 9 */
						"-webkit-transform":"rotate(-25deg)", /* Chrome, Safari, Opera */
						"transform":"rotate(-25deg)",
						"border-top-left-radius":"50%",
					});
			//$('.ex-form-green-button').css({"display":"none"});
		}
	});
	// form 2 send button 
	$('.ex-form-green-button button[type="submit"]').on('click', function(evt){
			 //alert("Submit Clicked");
		// - limiting event to fire only this function
		evt.preventDefault();

		var $form_check = 0;
		$name = $('.ex-form-green-button input[name=name]');
		if (!$name.val()){
			$name.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Anthony Roy" ).val("");
			$name.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			// adding testing values
			$name.val("Anthony Roy");
		} else {
			// -- checking for valid name format; all characters
			var regex = /^[a-z ,-]+$/i;
			if (regex.test($name.val()) == false){
			$name.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Anthony Roy" ).val("");
			$name.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			};
		};
		$email = $('.ex-form-green-button input[name=email]');
		if (!$email.val()){
			$email.css({"border":"1px solid #E86A67"}).attr( "placeholder", "amryh7@gmail.com" ).val("");
			$email.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			// adding testing values
			$email.val("amryh7@gmail.com");
		} else {
			// -- checking for valid email format; characters@characters.characters
			var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
			if (regex.test($email.val()) == false){
			$email.css({"border":"1px solid #E86A67"}).attr( "placeholder", "amryh7@gmail.com" ).val("");
			$email.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			};
		};
		$subject = $('.ex-form-green-button input[name=subject]');
		if (!$subject.val()){
			$subject.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Anthony Roy" ).val("");
			$subject.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			// adding testing values
			$subject.val("Subject");
		} else {
			// -- checking for valid subject format; all characters
			var regex = /^[a-z ,-]+$/i;
			if (regex.test($subject.val()) == false){
			$subject.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Letters Only" ).val("");
			$subject.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			};
		};
		$message = $('.ex-form-green-button textarea[name=message]');
		if (!$message.val()){
			$message.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Anthony Roy" ).val("");
			$message.parent().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			// adding testing values
			$message.val("Message");
		} else {
			// -- checking for valid message format; all characters
			var regex = /^[a-z ,-]+$/i;
			if (regex.test($message.val()) == false){
			$message.css({"border":"1px solid #E86A67"}).attr( "placeholder", "Letters Only" ).val("");
			$message.sibling().find('.helper-tags').show().css({"color":"#E86A67"});
			$form_check++;
			};
		};
		//alert($form_check);
		if($form_check > 0){
			return false;
			} else {
				$('form[name="form-2"]').submit();
			};
	});
	//END FORM 2
});
