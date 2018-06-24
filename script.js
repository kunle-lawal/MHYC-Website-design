//Random number Generator
function randNum( min, max ) {
    return Math.random() * ( max - min ) + min;
}

$(document).ready(function(){
	$(".slide_header_text").removeClass("slide_header_hidden");

	var scroll_top = $(document).scrollTop();
	if(scroll_top >= 700){
		$("#nav_bar").addClass("nav_bar_stick");
		$(".nav img").addClass("shrink_img");
	} else {
		$("#nav_bar").removeClass("nav_bar_stick");
		$(".nav img").removeClass("shrink_img");
	}

	//On Click change slide
	var curr_slide = 1;
	var slide_header = ["", "Mission Hill Youth Collaborative", "Motivating Students", "Fostering Growth", "Building Relationships", "Creating Community", "Establishing Connections", "Cultivating The Future", "Serving the Community"];


	function reset_slides(){
		for(var i = 2; i < 9; i++){
			$("#slide" + i).removeClass("remove_image");
			$("#slide" + i).addClass("slide_image_hidden");
		}

		$("#slide" + 1).removeClass("remove_image");
	}

	function play_slide(){
		//image we dont want
		$("#slide" + curr_slide).addClass("remove_image");
		//image we want
		$("#slide" + (curr_slide+1)).removeClass("slide_image_hidden");
		curr_slide++;
		if(curr_slide >= 9){
			reset_slides();
			curr_slide = 1;
		}
		console.log("Slide: " + curr_slide);
		$(function(){
	    	$(".slide_header_text").typed({
				strings: [slide_header[curr_slide]],
				typeSpeed: 50,
	   		});	
		});
	}

	var set_slide_timer = setInterval(play_slide, 8000); ///Every 8 seconds

	function reset_interval(variable, func, time){
		clearInterval(variable);
		variable = setInterval(func, time);
	}

	$(".arrow_right").click(function(){
		//reset_interval(set_slide_timer, play_slide, 8000);
		clearInterval(set_slide_timer);
		set_slide_timer = setInterval(play_slide, 8000);
		if(curr_slide >= 8){
			return 0;
		}
		//image we dont want
		$("#slide" + curr_slide).addClass("remove_image");
		//image we want
		$("#slide" + (curr_slide+1)).removeClass("slide_image_hidden");
		curr_slide++;
		$(function(){
	    	$(".slide_header_text").typed({
				strings: [slide_header[curr_slide]],
				typeSpeed: 50,
	   		});	
		});
	})

	$(".arrow_left").click(function(){
		clearInterval(set_slide_timer);
		set_slide_timer = setInterval(play_slide, 8000);
		if(curr_slide <= 1){
			return 0;
		}
		//image we dont want
		$("#slide" + curr_slide).addClass("slide_image_hidden");
		//image we want
		$("#slide" + (curr_slide - 1)).removeClass("remove_image");
		curr_slide--;
		$(function(){
	    	$(".slide_header_text").typed({
				strings: [slide_header[curr_slide]],
				typeSpeed: 50,
	   		});	
		});
	})

	/*function animate_nav(id){
		$('.active_page').animate({
        	'marginLeft' : $(id).data('value') + "px" //moves left
        });
	}*/

	function active_nav(id){
		$(curr_page).removeClass("active_page");
		$(id).addClass("active_page");
		curr_page = $(id);
	}

	var curr_page = "#nav1";
	$(document).scroll(function(){
		var scroll_top = $(document).scrollTop();
		if(scroll_top >= 700){
			$("#nav_bar").addClass("nav_bar_stick");
			$(".nav img").addClass("shrink_img");
		} else {
			$("#nav_bar").removeClass("nav_bar_stick");
			$(".nav img").removeClass("shrink_img");
		}

		var home_pos = $("#home").position();
		var mission_pos = $("#mission").position();
		var aboutus_pos = $("#aboutus").position();
		var steering_pos = $("#steering").position();
		var events_pos = $("#events").position();
		var contact_pos = $("#contact").position();

		if(scroll_top > home_pos.top && scroll_top < mission_pos.top){
			active_nav("#nav1");
        	console.log(scroll_top);
		} else if(scroll_top > mission_pos.top - 50 && scroll_top < aboutus_pos.top){
			active_nav("#nav2");
        	console.log(scroll_top);
		} else if(scroll_top > aboutus_pos.top - 50 && scroll_top < steering_pos.top){
			active_nav("#nav3");
        	console.log(scroll_top);
		} else if(scroll_top > steering_pos.top - 50 && scroll_top < events_pos.top){
			active_nav("#nav4");
        	console.log(scroll_top);
		} else if(scroll_top > events_pos.top - 50 && scroll_top < contact_pos.top){
			active_nav("#nav5");
        	console.log(scroll_top);
		} else if(scroll_top > contact_pos.top){
			active_nav("#nav6");
        	console.log(scroll_top);
		}
	})

	$(".nav_link").click(function(){
		var id = (this.id).toString();
		active_nav(this);
	})
	$('.nav_links_container').localScroll({duration:800});
});

window.setInterval(function(){
	var scroll_top = $(document).scrollTop();
	var x = $("#home").position();
	console.log(x.top);
	//console.log(scroll_top);
}, 200);