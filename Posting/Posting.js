
$(document).ready(function(){
	
	var obj;
	var create;
	var jsonString;
	var savedPosts;
	var counter;
	var user_posts = new Object();
	var saveToFile = '{"name":"wholmes","picture":"./Personal Profile Template_files/user.jpg","textposts":[{"datetime":"4/7 19:11","content":"hey "},{"datetime":"4/7 19:11","content":"what "},{"datetime":"4/7 19:11","content":"whose "},{"datetime":"4/7 19:12","content":"when"}]}';
	
	
	//hard coded in for now
	user_posts.name = "wholmes";
	user_posts.picture = "./Personal Profile Template_files/user.jpg";
	user_posts.textposts = [];
	
	$("#card-post").hide(); 
	$("#post-count").html(0);
	$("#friend-count").html(0);

	//loop handles repopulating the posts 
	for(var i = 0;i < 4;i++)
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
