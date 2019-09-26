$(window).ready(function(){
	tagRibbon();
	menuRestaurant();
});


function tagRibbon(){
	var item = $(".ribbon");
	for (var i = 0; i < item.length; i++) {
		if(i%2 == 0 && i==0||i==6){
			$(item[i]).children(".tag-ribbon").addClass("show");
		}
		else if(i%2 != 0 && i==3||i==5){
			$(item[i]).children(".tag-ribbon").addClass("show").addClass("color-tag-ribbon");
			$(item[i]).children(".tag-ribbon").children("h1").text("SPECIALITY");
		}
	}
}

function menuRestaurant(){
	var nav = $(".nav-menu-res button");
	$(nav).each(function(){
		$(this).click(function(){
			$(nav).removeAttr("id");$(this).attr("id","active");
			var valuenav = $(this).val();
			var item = $(".item-menu");
			for ( i = 0; i< item.length; i++){
				if ( $(item[i]).hasClass(valuenav) ){
					$(item[i]).removeClass("hide-item").addClass("show-item");
				}
				else{
					$(item[i]).removeClass("show-item").addClass("hide-item");
				}
			}
		})
	});
}
