
var user_posts = new Object();
var saveToFile = '{"name":"wholmes","picture":"./Personal Profile Template_files/user.jpg","textposts":[{"datetime":"4/5 17:29","content":"hey"},{"datetime":"4/5 17:29","content":"what "}]}';

$("#card-post").hide();
$(document).ready(function(){

	$("#card-post").hide(); 
	
	user_posts.name = "wholmes";
	user_posts.picture = "./Personal Profile Template_files/user.jpg";
	user_posts.textposts = [];

	$("#post-count").html(0);
	$("#friend-count").html(0);

	var counter = 0;
	
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
						 
					 
		setPost();
		
		$("#card-post").clone().appendTo("#posts-container").show();

		});
		
		
		
		$("#download").click(function(){
			
			var jsonString= JSON.stringify(user_posts);
			download(jsonString, 'json.txt', 'text/plain');  
		});
		
		$("#repop").click(function(){
			
				
			
			
			
		});
		
		
		
		clear();
});
 function download(content, fileName, contentType) {
	
		var a = document.createElement("a");
		var file = new Blob([content], {type: contentType});
		a.href = URL.createObjectURL(file);
		a.download = fileName;
		a.click();
}

function setPost(){
	
	var current_post = new Object();
	
	//stored data in local storage and retrieves it
	
	var the_post = $('#post')[0];// document.getElementById("post");
	//var stored_post = localStorage.getItem("post");
	var today = new Date();
	
	var date = (today.getMonth()+1)+ '/' +today.getDate()+ ' ' + today.getHours() + ":" + today.getMinutes();		
	
	

	
						
	$("#display").html(the_post.value);		
	$("#time").html(date);
	
	current_post.datetime = date;
	current_post.content = the_post.value;
	user_posts.textposts.push(current_post);
	
	//localStorage.setItem("post",the_post.value);
}


