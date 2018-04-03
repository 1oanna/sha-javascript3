//create a text box where the user can type a website address 
//of a website that allows CORS
//create a button named get and by pressing the get button, information such as
//number of H1 tags, number of images, list of all of the links on the page,
//number of any email addresses on the page, JavaScript files on the page,
//ARIA tags on the HTML elements 
//will be displayed on the console


(function(){

	const txtUrl = document.getElementById("txtUrl");
	const btnGet = document.getElementById("btnGet");

	btnGet.addEventListener("click", function(e){
		e.preventDefault();
		parseSite();
	});

	txtUrl.addEventListener("keypress", function(e){
		if (e.keyCode == 13) {
			e.preventDefault();
			parseSite();
			return;
		}
	});

	function getHtml(url) {
		return fetch(url);
	}

	function getSiteStats(html) {
		let vDom = document.createElement( 'html' );
		vDom.innerHTML = html;

		//How many H1 tags are on the page?
		let h1 = vDom.getElementsByTagName('h1'); 
		console.log("H1 found: " + h1.length );
		
		//How many images are on the page?
		let img = vDom.getElementsByTagName('img');
		console.log("Images found: " + img.length );

		//A list of all of the links on the page
		let a = vDom.getElementsByTagName('a');
		console.log("Links found: " + a.length );

		//Find any email addresses on the page
		let emails = html.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
		console.log("Emails found: " + (emails ? emails.length : 0) );

		//Find all the JavaScript files on the page 
		let scripts = vDom.getElementsByTagName('script');
		console.log("Scripts found: " + scripts.length );


		//Does this website use ARIA tags on their HTML elements?
		let useOfAria = html.match(/role=\"[a-zA-Z0-9\s]+\"/gi);
		console.log("Use of aria: ", useOfAria ? "Yes" : "No");

	}

	function parseSite() {
		let url = txtUrl.value;
	
		getHtml(url)
			.then(res => {
				getSiteStats(res);
			})
			.catch(() => {
				console.log("Failed to load url");
			});

	}

	//console.log(getSiteStats(html));

}())