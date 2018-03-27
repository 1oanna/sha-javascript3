// The goal is render a github informations on a page with: Promises, Map and Reduce. 
// Take a look to the GitHub API Documentation to know where to fetch the informations.


(function(){
	// Inside a function called GitHubUser.
	// Create an Object that is a User in GitHub and will hold all the information about the user and their repositories
	// You should pass in the username of the user as a parameter.

	function GitHubUser (username) {
		this.username = username;
	}
	// Add a method called "getUserInformation"
	// This will fetch information about the user that is passed in as a paramter
	// This should return a promise

	function getUserInformation(gUser) {
		let url = 'https://api.github.com/users/' + gUser.username;
		
		return fetch(url)
				.then(resp => {
					return resp.json();
					});
	};

	// 	Add a method called "getRepos"
	// After information is fetched about the user, fetch repository informations about that user.
	// This should return a promise

	function getRepos(gUser) {
		let url = 'https://api.github.com/users/' + gUser.username + "/repos";
		return fetch(url)
				.then(resp => {
					return resp.json();
					});
	}

	// Finally add a method called "Render" that will display the repositories that the user has to the webpage using HTML elements.
	// This will take the information about the repositories and display them on the page
	// You should use HTML elements to display the information
	// Should display the name, number of stars and number of forks for each repo

	function Render(gUser) {
		
		
		let html = '';

		//user details
		html += '<div class="userDetails">';
		html +=	'<h1>' + gUser.user.login + '</h1>';
		html += '</div>';

		//repos
		html += '<div class="repos">';

		html += gUser.repos.map(function(R){ 
			return '<div class="repo">' +
						'<div class="name">' + R.name + '</div>' +
							'<div class="details">' +
									'<div class="forks">forks: <span>' + R.forks_count + '</span></div>' +
								'<div class="stars">stars: <span>' + R.stargazers_count + '</span></div>' +
							'</div>' +
					'</div>';
		}).join("");

		html += '</div>';

		document.querySelector(".githubView").innerHTML = html;
	}


	// Expecting
	let gitUser = new GitHubUser('ideabile');

	getUserInformation(gitUser)
		.then(function(userInfo) {
			gitUser.user = userInfo;
			return getRepos(gitUser);
		})
		.then(repos => {
			gitUser.repos = repos;
        	Render(gitUser);
		});

})();