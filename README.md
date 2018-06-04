# sha-javascript3

---- homework week 1 -----

Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
Your solution could be something like this:

let numbers = [1, 2, 3, 4];
let newNumbers = [];

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 !== 0) {
        newNumbers[i] = numbers[i] * 2;
    }
}

console.log("The doubled numbers are", newNumbers); // [2, 6]
rewrite the above program using map and filter don't forget to use =>

Use the array of the previous assignment, write a program that add the even numbers to the resulting array twice, but the odd numbers only once. Don't forget to use =>.
Your output should be:

console.log("The final numbers are", newNumbers);// [1, 2, 2, 3, 4, 4]
Underneath you see a very interesting small insight in Maartje's work:
let monday = [
        {
            name     : 'Write a summary HTML/CSS',
            duration : 180
        },
        {
            name     : 'Some web development',
            duration : 120
        },
        {
            name     : 'Try to convince teachers to fix homework class10',
            duration : 30
        },
        {
            name     : 'Fix homework for class10 myself',
            duration : 20
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        }
    ];
 
let tuesday = [
        {
            name     : 'Keep writing summery',
            duration : 240
        },
        {
            name     : 'Some more web development',
            duration : 180
        },
        {
            name     : 'Staring out the window',
            duration  : 10
        },
        {
            name     : 'Talk to a lot of people',
            duration : 200
        },
        {
            name     : 'Look at application assignments new students',
            duration : 40
        }
    ];
     
let tasks = [monday, tuesday];
Write a program that does the following:

Collect two days' worth of tasks.
Convert the task durations to hours, instead of minutes.
Filter out everything that took two hours or more.
Sum it all up.
Multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour).
Output a formatted Euro amount.
Don't forget to use =>


---- homework week 2 -----

The goal is render a github informations on a page with: Promises, Map and Reduce. Take a look to the GitHub API Documentation to know where to fetch the informations.

Steps:

1. Inside a function called GitHubUser.

2. Create an Object that is a User in GitHub and will hold all the information about the user and their repositories
You should pass in the username of the user as a parameter.

3. Add a method called "getUserInformation"
This will fetch information about the user that is passed in as a paramter
This should return a promise

4. Add a method called "getRepos"
After information is fetched about the user, fetch repository informations about that user.
This should return a promise

5. Finally add a method called "Render" that will display the repositories that the user has to the webpage using HTML elements.
This will take the information about the repositories and display them on the page
You should use HTML elements to display the information
Should should display the name, number of stars and number of forks for each repo

---- homework week 3 ----

-- step 1 --

Let's continue to learn a little more about scope and Closures.

What will be the output of the following code - and more importantly - WHY?
for (let i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}
Write a function that would allow you to do this:
let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
You will need to create an HTML document out of the below snippet to run the below code. A hint - the code is syntactically correct but doesn't do what you would expect. Can you see why and fix it?
Don't cheat - but if you get stuck ... http://stackoverflow.com/questions/750486/javascript-closure-inside-loops-simple-practical-example

<button id="btn-0">Button 1!</button>
<button id="btn-1">Button 2!</button>
<button id="btn-2">Button 3!</button>

<script type="text/javascript">
    
    let prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }
</script>
Rewrite the code below so that it is asynronous, using promises
1.

// Add together all the numbers given in to the function
let sum = calculateSum(2, 6);
console.log(sum);

2.

// Get the json and show them on the screen
let results = $.getJSON('https://jsonplaceholder.typicode.com/posts/1');
showResults(results);

3.

// Add together all the numbers and if the number is larger than 8, console.log();
let sum = calculateSum(2, 6);
if (sum > 8) {
    console.log('larger than 8');
}

4.

// Get all the even numbers from the array and console.log them you know them all
let array = [1,2,3,4,5,6,7,8,9]
let even = getEven(array);
console.log(even)

-- step 2 --

Complete the previous homework using "prototypes". If you haven't done already, you should complete the previous homeworking using the "Prototype" methods inside the GithubUser. 

-- step 3 --

Website Scraper

A web scraper is a piece of code that goes to websites and extracts information about them. What I want you to build is:

Add an input field that wants a URL of a website

Use Fetch to retrieve the HTML of the website that you entered

Display information about the website on your page

How many H1 tags are on the page?

How many images are on the page?

A list of all of the links on the page

Find any email addresses on the page

Find all the JavaScript files on the page and give me a link to them

Does this website use ARIA tags on their HTML elements?

You should use map, reduce and filter in this homework
