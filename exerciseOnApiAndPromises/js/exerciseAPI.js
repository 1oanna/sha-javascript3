//get all the data from the Random User API 
//and display everything in list items inside the author's list in html
//use promises 
//some comments are not needed, I have them so anyone can understand the procedures taking place in each line


function createNode(element) {
      return document.createElement(element); // Create the type of element you pass in the parameters
  }

function append(parent, el) {
    return parent.appendChild(el);  // Append the second parameter(element) to the first one
  }

  const ul = document.getElementById('authors'); // Catch the ul where the authors are going to be placed
  const url = 'https://randomuser.me/api/?results=12'; // Get 12 random users
  	fetch(url)
  		.then((resp) => resp.json())  // Transform the data into json
  		.then(function(data) {   // Here you get the data to modify as you please -- Create and append the li's to the ul
    let authors = data.results;  // Get the results
    	return authors.map(function(author) {  // Map through the results and for each run the code below
      	let li = createNode('li'),  //  Create the elements needed li,img,span
          	img = createNode('img'),  
          	span = createNode('span');  
      		img.src = author.picture.medium;  // Add the source of the image to be the src of the img element
      		img.className = "avatar";			// Add class names to the elements, for easier manipulation with css
      		li.className = "authorss";
      		span.className = "authorName";
      		span.innerHTML = `${author.name.first} ${author.name.last}`; // Make the HTML of the span to be the first and last name of each author
      	append(li, img); // Append all elements
      	append(li, span); 
      	append(ul, li); 
    })
  })
  		.catch(function(error) {   // If there is any error it will be catched and logged in the console
    		console.log(error);
  });   