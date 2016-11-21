var main = function() {


//registration
	$('#registration_button').click(function() {
	  	$('.enter').fadeOut(1700);
	 });



//User drop down menu

	$('#button_user').click(function() {
  		$('.dropdown_user_menu').toggle();
 	 });
  


//Sorting drop down menu

	$('.sorting img').click(function() {
  		$('.dropdown-menu').toggle();
 	 });
  
};

//change color like active 

	$('.like').click(function() {
		 $('.like').attr('src', 'img/icons_of_idea_list/like_active.png');
	});

	$('.unlike').click(function() {
		 $('.unlike').attr('src', 'img/icons_of_idea_list/unlike_active.png');
	});
	$('.favorites_icon').click(function() {
		 $('.favorites_icon').attr('src', 'img/icons_of_idea_list/active_favorites_star.png');
	});








$(document).ready(main);


