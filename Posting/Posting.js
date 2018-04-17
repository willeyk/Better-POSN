var saveFile = '{"firstname":"Nisha","lastname":"Holmes","birthday":"05/01/1992","email":"abc@gmail.com","phone":"555-555-555"}';

$(document).ready(function(){
	
	var obj;
	var create;
	var jsonString;
	var savedPosts;
	var counter;
	var user_posts = new Object();
	var saveToFile = '{"name":"wholmes","picture":"./Personal Profile Template_files/user.jpg","textposts":[{"datetime":"4/7 19:11","content":"Having fun at Disneyland"},{"datetime":"4/7 19:11","content":" The most important thing in the world is family and love."},{"datetime":"4/7 19:12","content":"Try to be a rainbow in someones cloud."}]}';
	
	

	
	
	
	//hard coded in for now
	user_posts.name = "wholmes";
	user_posts.picture = "./Personal Profile Template_files/user.jpg";
	user_posts.textposts = [];
	
	$("#card-post").hide(); 
	$("#post-count").html(0);
	$("#friend-count").html(0);

	//loop handles repopulating the posts 
	for(var i = 0;i < 3;i++)
	{
		obj = JSON.parse(saveToFile);
		create = createPost(obj,i,$("#card-post"),user_posts);
		create.appendTo(".innerdiv").show();
	}
			
	counter = i;
	
	$("#post-count").html(counter);


	//disables the post button until post is done 	
	$(':input[type="submit"]').prop('disabled', true);
     $('input[type="text"]').keyup(function() {
        if($(this).val() != '') {
           $(':input[type="submit"]').prop('disabled', false);
        }
    });

	

	$("#postbtn").click(function(){
		
		
		counter = counter + 1;
		
		$("#post-count").html(counter);
	
		$("#card-post").hide().show;
						 	
		savedPosts = setPost($("#card-post"),user_posts);
		savedPosts.appendTo(".innerdiv").show();
		
	});
	

		
		
		
	$("#download").click(function(){
			
		jsonString= JSON.stringify(user_posts);
		download(jsonString, 'json.txt', 'text/plain');  
		
		

	});
	/*---------------------------------------------------
					Handles settings 
	
	-----------------------------------------------------*/
	
	obj = JSON.parse(saveFile);
	
	
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
/*-----------------------------------------------------
				download
function handles downloading json file information 
to a txt file. 
------------------------------------------------------*/

 function download(content, fileName, contentType) {
	
		var a = document.createElement("a");
		var file = new Blob([content], {type: contentType});
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
}


/*-----------------------------------------------------
				setPost
function handles creating a new post as needed when user
clicks on post button
------------------------------------------------------*/

function setPost(templateCardPost,user_posts){
	
	var current_post = new Object();
	var the_post = $('#post')[0];
	var today = new Date();
	var date = (today.getMonth()+1)+ '/' +today.getDate()+ ' ' + today.getHours() + ":" + today.getMinutes();	
	
	templateCardPost.find(".display").html(the_post.value);
	templateCardPost.find(".time").html(date);
	
	current_post.datetime = date;
	current_post.content = the_post.value;
	user_posts.textposts.push(current_post);
	
	//localStorage.setItem("post",the_post.value);
	
	
	return templateCardPost.clone();
}

/*-----------------------------------------------------
				createPost
function handles repopulating previous posts.
------------------------------------------------------*/

function createPost(obj,i,templateCardPost,user_posts)
{
	var old_post = new Object();			
	templateCardPost.find(".name").html(obj.name);
					
	//possibly change image src
	//$("#my_image").attr("src","second.jpg");
					
	templateCardPost.find(".display").html(obj.textposts[i].content);
	templateCardPost.find(".time").html(obj.textposts[i].datetime);
	
					
	old_post.datetime = obj.textposts[i].datetime;
	old_post.content = obj.textposts[i].content;		
	user_posts.textposts.push(old_post);
	
	return templateCardPost.clone();
}

/*-----------------------------------------
                 Settings functions 

-----------------------------------------*/
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
