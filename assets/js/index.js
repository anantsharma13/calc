$(document).ready(function(){


	var operation = ['+', '-', '*', "/"]
	var expression_string = "";
	$('.calc-btn').on('click',function(){

		$(".error_display").text('');
		expression_string = $(".expression_text").val();
		var key = $(this).attr('data-key');
		if(key != '='){
			
			if(expression_string[expression_string.length -1] == "." && key == "."){
				return false;
			}

			if(!(jQuery.inArray( expression_string[expression_string.length -1], operation ) !== -1) && (jQuery.inArray(key,operation ) !== -1)){
				expression_string += key; 	
				$(".expression_text").val(expression_string);
			}else if (!(jQuery.inArray(key,operation ) !== -1)){
				expression_string += key
				$(".expression_text").val(expression_string);
			}			
		}else{
			evaluate();
		}
		
	});


	$(".expression_text").on('keyup',() => {
		$(".error_display").text('');
		if(event.keyCode == 13){
			expression_string = $(".expression_text").val();
			evaluate();	
		}
	});


	// 3 + 2 -1
	function evaluate(){
		// var express_arr  = expression_string.split("");
		if(jQuery.inArray( expression_string[expression_string.length -1], operation ) !== -1){
			expression_string = expression_string.slice(0,-1)
		}
		try {
			var result  = eval(expression_string);
			$(".history").append("<p class='history_value' >"+result+"</p>");
			$(".history").find('p').css('font-size', '14px');
			$(".history").find('p:last').css('font-size', '25px');
		}catch(err){
			$(".error_display").text("Malformed Expression");
		}
	}


});