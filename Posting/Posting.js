var saveFile = '{"username":"Wholmes","firstname":"Nisha","lastname":"Holmes","birthday":"05/01/1992","email":"abc@gmail.com","phone":"555-555-555"}';

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
		
		/*$("input[name=file]").change(function () {
                if (this.files && this.files[0]) {
                    var reader = new FileReader();

                    reader.onload = function (e) {
                        var img = $('<img>').attr('src', e.target.result);
                        $('.upload-image-preview').html(img);
                    };

                    reader.readAsDataURL(this.files[0]);
                }
            });*/

		
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
	var username;
	
	$("#add_listing_info").find(".firstname").html(obj.firstname);
	$("#add_listing_info").find(".lastname").html(obj.lastname);
	$("#add_listing_info").find(".birthday").html(obj.birthday);
	$("#add_listing_info").find(".email").html(obj.email);
	$("#add_listing_info").find(".phone").html(obj.phone);
	$("#add_listing_info").find(".username").html(obj.username);
	
	$('#fname').hide(); //Initially form will be hidden.
	$('#lname').hide();
	$('#bname').hide();
	$('#ename').hide();
	$('#pname').hide();
	$('#uname').hide();

		$('#fedit').click(function() {
			$('#fname').show();
			
		});
		$('#ledit').click(function() {
			$('#lname').show();
		});
		$('#uedit').click(function() {
			$('#uname').show();
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

function setPost(templateCardPost,user_posts,img){
	
	var current_post = new Object();
	var the_post = $('#post')[0];
	var today = new Date();
	var date = (today.getMonth()+1)+ '/' +today.getDate()+ ' ' + today.getHours() + ":" + today.getMinutes();	
	
	templateCardPost.find(".display").html(the_post.value + img);
	templateCardPost.find(".time").html(date);

	current_post.datetime = date;
	current_post.content = the_post.value ; 

	user_posts.textposts.push(current_post);
	
	
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
	
	var update_phone = $('#ph')[0];
	
	var update_username = $('#user')[0];
	
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
	if($('#user')[0].value != '')
	{
		$("#add_listing_info").find(".username").html(update_username.value);
		
	}
	
	$('#fname').hide(); //Initially form will be hidden.
	$('#lname').hide();
	$('#bname').hide();
	$('#ename').hide();
	$('#pname').hide();
	$('#uname').hide();
	

	
}
/*------------------------------------------------
				Google API

--------------------------------------------------*/ 

function handleClientLoad() {
    // Loads required libraries for functionality
    gapi.load('client:auth2', initClient);
}

function initClient() 
{
	// Initialize the client with API key and Client ID. Scope is set to full access
	// to Google Drive
	gapi.client.init(
	{
		apiKey: 'AIzaSyBFL7e4jh939anq2JsOUeFCTTP41Jz1GoY',
		discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
		clientId: '834692356537-5fn43u118ogta150l995623a7auu52fg.apps.googleusercontent.com',
		scope: 'https://www.googleapis.com/auth/drive'
	}).then(function () 
	{
		// Listen for sign-in state changes
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

		// Handle the initial sign-in state
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
	});
}
// Function called when sign in changes
function updateSigninStatus(isSignedIn) 
{
	// If status changes to signed in, makes call to Google API
	if (isSignedIn) 
	{
		//If POSN is not setup then setup
		//If POSN is setup then get photo links
		if( isPOSNSetup() == true)
		{
			getPhotoLinks();
		}
	}
}

function handleSignInClick(event) 
{
	gapi.auth2.getAuthInstance().signIn();
	
}
function handleSignOutClick(event) 
{
	gapi.auth2.getAuthInstance().signOut();
}
	 
	 function isPOSNSetup()
	 {
		var folderName = "name= 'POSN_Directory'";
		var isTrashed = "trashed = false"
		var query = folderName + 'and' + isTrashed;
		
		//Function will essentially search for the folder that contains
		//application data to see if POSN is setup
        gapi.client.drive.files.list(
		{    
			 'q' : query
		}).then(function(response) 
		{
			console.log(response.result);
			if( response.result.files.length == 0 )
			{
				//If folder is not found (POSN not initialized),
				//then initialize setup 
				setupPOSN();
			}
			console.log("POSN is setup");
        }, function(reason) 
		{
			console.log('Error: ' + reason.result.error.message);
        });
		return true;			
	 }
	 
	 function setupPOSN()
	 {
		makeApplicationFolders();
	 }
	 

	 //Makes folders needed to run the POSN application
	function makeApplicationFolders()
	{
		subFolderNames = ['Photos','Comments','Music','Videos','Other_Files']
		mimeType = 'application/vnd.google-apps.folder'
		bodyMetadata = 
		{
			'name' : 'POSN_Directory',
			'mimeType' : mimeType
		}
		
		gapi.client.drive.files.create(
		{    
			resource : bodyMetadata
		}).then(function(response) 
		{
			console.log(response.result);
			makeSubFolders(response.result.id, subFolderNames);
			
        }, function(reason) 
		{
			console.log('Error: ' + reason.result.error.message);
        });
	}
	 
	//Makes each individual subfolder as specificed
	function makeSubFolders( directoryID, subFolderNames )
	{
		numOfSubFolders = 5;
		directory = [directoryID]
		mimeType = 'application/vnd.google-apps.folder'
		for( i = 0; i < numOfSubFolders; i++ )
		{
			bodyMetadata = 
			{
				'name' : subFolderNames[i],
				'mimeType' : mimeType,
				'parents' : directory
			}
			
			gapi.client.drive.files.create(
			{    
				resource : bodyMetadata
			}).then(function(response) 
			{
				console.log(response.result);
				
			}, function(reason) 
			{
				console.log('Error: ' + reason.result.error.message);
			});
		}
	}
	
	//Shows information about a file's permissions
	function showPermissions( fileID )
	{
		gapi.client.drive.permissions.list(
		{
			'fileId' : fileID
		}).then(function(response)
		{
			console.log(response.result)
		}, function(reason)
		{
			console.log('Error: ' + reason.result.error.message);
		});
	}
	
	//Adds a permission to a file using email address
	function addPermissions( fileID, emailAddress )
	{
		friendRole = "reader";
		permType = 'user';
		requestBody = {
			"type": permType,
			"emailAddress": emailAddress,
			"role": friendRole,
		}
		gapi.client.drive.permissions.create(
		{
			'fileId' : fileID,
			resource : requestBody
		}).then(function(response)
		{
			console.log(response.result)
		}, function(reason)
		{
			console.log('Error: ' + reason.result.error.message);
		});
	}    
	
//Can upload a text file to Google Drive root
function uploadFile() 
{
	//Read in file to be uploaded from upload button
	var uploadFile = document.getElementById("myFile").files[0];
	var fileContent; 
	if (uploadFile) 
	{
		var name = uploadFile.name;
		var fileSize = uploadFile.size;
		var mimeType = uploadFile.type;
		var reader = new FileReader();
		reader.readAsBinaryString(uploadFile);
		reader.onload = function (evt) 
		{
			document.getElementById("myFile").innerHTML = evt.target.result;
					
				//evt.target.result is actual text/data in file
				//Encoded in base64
			fileContent = btoa(evt.target.result);	
					
			//Rest of function below handles uploading to Google Drive
			var auth_token = gapi.client.getToken().access_token;
			const boundary = '-------314159265358979323846';
			const delimiter = "\r\n--" + boundary + "\r\n";
			const close_delim = "\r\n--" + boundary + "--";
			var metadata = 
			{ 
				"name" : name,
				"mimeType": mimeType
			};  

			var multipartRequestBody =
			delimiter +  'Content-Type: application/json\r\n\r\n' +
			JSON.stringify(metadata) +
			delimiter +
			'Content-Type: application/json' + '\n' +
			'Content-Transfer-Encoding: base64\r\n\r\n' +
			fileContent +
			close_delim;

			gapi.client.request({ 
				'path': '/upload/drive/v3/files/',
				'method': 'POST',
				'params': {'uploadType': 'multipart'},
				'headers': { 'Content-Type': 'multipart/form-data; boundary="' + boundary + '"', 'Authorization': 'Bearer ' + auth_token, },
				'body': multipartRequestBody 
			}).execute(function(file) { 
				console.log("Wrote to file " + file.name + " id: " + file.id); 
			},function(error){
				console.log(error);
			});  
		}
		reader.onerror = function (evt) {
			document.getElementById("myFile").innerHTML = "error reading file";
		}
	}
}
	  
	  //gives a list of web links for images in the Photos folder
function getPhotoLinks()
{
	var order = 'folder'
	var photoDirectory = "'1VsFK73KutpZziLFYIihvXlhPIHpH8zbd' in parents"
	var isTrashed = "trashed = false"
	//Function returns a list of files in google drive
    var listPromise = Promise.resolve(gapi.client.drive.files.list(
	{    
		'orderBy': order,
		'q' : photoDirectory
	}).then(function(response) 
	{
		console.log(response.result.files);
		var filesList = response.result.files;
		var webLinkList = [];
		getWebLinks( filesList, webLinkList );
		return webLinkList;
	}, function(reason) 
	{
		console.log('Error: ' + reason.result.error.message);
	}));
			
	listPromise.then(function(value)
	{
		//Do whatever you need with list of Weblinks
		//value is webLinkList
		console.log(value);
		return value;
	}).then(function(value)
	{
		//Do whatever you need with list of Weblinks
		//value is webLinkList
	});
}
	 
	  
	//Successfully implemented batching of requests to allow for 10+
	//Needs some error checking
	function getWebLinks( filesList, webLinkList )
	{
		//Gets web content links for all the photos in the folder
		var i = 0
		var callList = [];
		var httpBatch = gapi.client.newBatch()
		var webLink;
		while( i < filesList.length )
		{
			currentID = filesList[i].id;
			callList.push(gapi.client.drive.files.get(
			{
				'fileId': currentID,
				fields: 'webContentLink'
			}));
			httpBatch.add(callList[i])
			i++;
		}
		console.log(httpBatch);
		httpBatch.then(function(onFulfilled)
		{
			i = 0;
			myResult = onFulfilled.result;
			while( i < filesList.length )
			{
				callList[i].then(function(response)
				{
					webLink = JSON.parse(response.body);
					webLinkList.push(webLink.webContentLink);
				}, function(reason)
				{
					console.log('Error: ' + reason.result.error.message);
				});
				i++;
			}
		})
		console.log(webLinkList)
	}
	  	
		
		//Old, unfinished, or unused functions
		//listed below:
		
		//Unused
		function sleep(ms) 
		{
			return new Promise(resolve => setTimeout(resolve, ms));
		}

		async function demo() 
		{
			console.log('Taking a break...');
			await sleep(1000);
			console.log('Two second later');
		}

	  //Not fully functional
	  function getPhotosFolderId ()
	  {
		  	var folderName = "name= 'Photos'";
			var isTrashed = "trashed = false"
			var query = folderName + 'and' + isTrashed;
			var photosID;
			gapi.client.drive.files.list(
			{    
				 'q' : query
			}).then(function(response) 
			{
				console.log(response.result);
				photosID = response.result.files[0].id;
				console.log(photosID)
			}, function(reason) 
			{
				console.log('Error: ' + reason.result.error.message);
			});
			return photosID;
	  }
	  
	  //Old Version of function before batching was implemented
	  function getWebLinksOld( filesList, webLinkList, i )
	  {
			//Gets web content links for all the photos in the folder
			while( i < filesList.length )
			{
				currentID = filesList[i].id;
				gapi.client.drive.files.get(
				{
					'fileId': currentID,
					fields: 'webContentLink'
				}).then( function(response) 
				{
					webLink = JSON.parse(response.body);
					webLinkList.push(webLink.webContentLink);
				}, function(reason)
				{
					console.log('Error: ' + reason.result.error.message);
				});
				i++;
			}
			console.log(webLinkList)
	  }
	  
	  
	  
		//Placeholder for the one second delay that will occur when too many API calls
		//are made in a second. (defined as 10 per sec by Google)		
		//Not used
		async function webLinkBackoff(filesID, webLinkList) 
		{
			console.log(filesID);
			var delay = 1000;
			console.log('timeout');
			setTimeout(function() 
			{  
				console.log('Try again');
				gapi.client.drive.files.get(
				{
					'fileId': filesID,
					fields: 'webContentLink'
				}).then(function(response) 
				{
					webLink = JSON.parse(response.body);
					webLinkList.push(webLink.webContentLink);
				},function(reason)
				{
					console.log('Error: ' + reason.result.error.message);
				});
			}, delay);
			console.log(webLinkList);
		}
		
	
