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


$(document).ready(main);


