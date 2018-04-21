$(document).ready(function(){
  $('#loginGoogle').click(function(){
	    handleClientLoad(); 
	  
     });
	
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
		  discoveryDocs: ["https://people.googleapis.com/$discovery/rest"],
		  clientId: '1048767164744-cqi2l396ecujb8jegk3831tp48ecgec1.apps.googleusercontent.com',
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
				gapi.client.load('drive', 'v3', makeApiCall);
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
 
});

function check(form) {
 if(form.userid.value == "dew" && form.pswrd.value== "123")
	{
      window.open('http://www.google.com'); 
	}
	else
	{
	  alert("The username and password does not match"); 	  
	}
}

function CollapseForm()
{
	// Two places to customize:

	// Specify the id of the form.
	var IDofForm = "login";

	// Specify the id of the div containing the form.
	var IDofDivWithForm = "boxed";

	// This line submits the form. (If Ajax processed, call Ajax function, instead.)
	document.getElementById(IDofForm).submit();

	// This line collapses the form.
	document.getElementById(IDofDivWithForm).style.display = "none";
}

function onSignIn(googleUser){
// Useful data for your client-side scripts:
var profile = googleUser.getBasicProfile();
console.log("ID: " + profile.getId()); // Don't send this directly to your server!
console.log('Full Name: ' + profile.getName());
console.log('Given Name: ' + profile.getGivenName());
console.log('Family Name: ' + profile.getFamilyName());
console.log("Image URL: " + profile.getImageUrl());
console.log("Email: " + profile.getEmail());
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
	$('.message a').click(function(){
	$('.register').animate({height: "toggle", opacity:"toggle"}, "slow"); 
	}); 
