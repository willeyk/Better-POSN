var saveToFile = '{"firstname":"Nisha","lastname":"Holmes","birthday":"05/01/1992","email":"abc@gmail.com","phone":"555-555-555"}';


$(document).ready(function(){
	
	
	obj = JSON.parse(saveToFile);
	
	
	$("#add_listing_info").find(".firstname").html(obj.firstname);
	$("#add_listing_info").find(".lastname").html(obj.lastname);
	$("#add_listing_info").find(".birthday").html(obj.birthday);
	$("#add_listing_info").find(".email").html(obj.email);
	$("#add_listing_info").find(".phone").html(obj.phone);
	
	$('#fname').hide(); //Initially form will be hidden.
	$('#lname').hide();
	$('#bname').hide();
	$('#ename').hide();
	$('#pname').hide();

		$('#fedit').click(function() {
			$('#fname').show();
			
		});
		$('#ledit').click(function() {
			$('#lname').show();
		});
		$('#bedit').click(function() {
			$('#bname').show();
		});
		$('#eedit').click(function() {
			$('#ename').show();
		});
		$('#pedit').click(function() {
			$('#pname').show();
		});
		$('#submit').click(function() {
			
			
			update($("#add_listing_info"));
		});

	
});

function update()
{
	var update_firstname = $('#first')[0];
	
	var update_lastname = $('#last')[0];
	
	var update_birthday = $('#birth')[0];
	
	var update_email = $('#em')[0];
	;
	var update_phone = $('#ph')[0];
	
	if($('#first')[0].value != '')
	{
		
		$("#add_listing_info").find(".firstname").html(update_firstname.value);
		
	}
	
	if($('#last')[0].value != '')
	{
		$("#add_listing_info").find(".lastname").html(update_lastname.value);
	}
	
	if($('#birth')[0].value != '')
	{
		$("#add_listing_info").find(".birthday").html(update_birthday.value);
	}
	if($('#em')[0].value != '')
	{
		$("#add_listing_info").find(".email").html(update_email.value);
	}
	if($('#ph')[0].value != '')
	{
		$("#add_listing_info").find(".phone").html(update_phone.value);
	}
	
	$('#fname').hide(); //Initially form will be hidden.
	$('#lname').hide();
	$('#bname').hide();
	$('#ename').hide();
	$('#pname').hide();
	
}




