//Step 5: More map, filter, reduce, and =>
// Say you would like to write a program that doubles the odd numbers in an array and throws away the even number.
// Your solution could be something like this:

// let numbers = [1, 2, 3, 4];
// let newNumbers = [];

// for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i] % 2 !== 0) {
//         newNumbers[i] = numbers[i] * 2;
//     }
// }

// 1. rewrite the above program that doubles the odd numbers in an array 
//and throws away the even number, using map and filter, don't forget to use =>

let numbers = [1, 2, 3, 4];
let odd = numbers => numbers % 2 !== 0;
let newNumbers = numbers.filter(odd).map(numbers => numbers * 2);	
console.log("v1. The doubled numbers are", newNumbers); // [2, 6]

//another way similar to the previous but a little shorter
let o = y => y % 2 !== 0;
let newN = numbers.filter(o).map( y => y * 2 );	
console.log("v2. The doubled numbers are", newN); // [2, 6]

//another way 
let newNumbersss = numbers
	.filter((number) => number % 2 !== 0)
	.map((number) => number * 2);

console.log("v3. The doubled numbers are", newNumbersss); // [2, 6]

//another way similar to the previous but a little shorter
let newNumberssss = numbers
	.filter((x) => x % 2 !== 0)
	.map((x) => x * 2);

console.log("v4. The doubled numbers are", newNumberssss); // [2, 6]




// 2. Use the array of the previous assignment, write a program that add the even numbers to the resulting array twice, but the odd numbers only once. Don't forget to use =>.

let newNumberss = numbers.reduce(function(newArray, number){
    newArray.push(number);
	if(number % 2 == 0) {
        /* Add it a second time. */
    newArray.push(number);
    }
	return newArray;
}, []);

console.log("The final numbers are", newNumberss); // [1, 2, 2, 3, 4, 4]

//another way shorter 
//let newNumberssss = numbers.reduce((newArray, number){newArray.push((number) if(number % 2 == 0) {newArray.push(number)}) => {return newArray}
//}, []);

//console.log("v2. The final numbers are", newNumberssss); // [1, 2, 2, 3, 4, 4]


/* 3. Write a program that does the following:
Don't forget to use => */

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

//a)Collect two days' worth of tasks.
//b)Convert the task durations to hours, instead of minutes.

let newMonday = monday.map((e, i) => ({
	  id: i, 
	  name: e.name, 
	  duration: e.duration / 60 
	})); 
console.log(newMonday);

let newTuesday = tuesday.map((e, i) =>({
	  id: i,      
	  name: e.name,
	  duration: e.duration / 60
    }));

console.log(newTuesday);


//c)Filter out everything that took two hours or more on Monday.
console.log(newMonday.filter((e) => e.duration >= 2));
    
//d)Sum it all up for the day.
let sumHoursMon = newMonday.reduce((acc, e) => acc + e.duration, 0);
console.log("the sum in hours, for tasks, that took more than 2 hours on Monday is " ,sumHoursMon);

//c)Filter out everything that took two hours or more on Tuesday.
console.log(newTuesday.filter((e) => e.duration >= 2));
    
//d)Sum it all up for the day.
let sumHoursTue = newTuesday.reduce((acc, e) => acc + e.duration, 0);
console.log("the sum in hours, for tasks, that took more than 2 hours on Tuesday is " ,sumHoursTue);

//e)Sum it all up for both days
let totalSum = sumHoursMon + sumHoursTue;
console.log("the total sum in hours for both days is " ,totalSum);

//f)Multiply the result by a per-hour rate for billing
//g)Output a formatted Euro amount.
let salary = Math.round(totalSum * 5);
console.log("after billing of 5 euros per hour, the salary for 2 days in euros is " ,salary);

//another way shorter needs some changes to work
let taskss = [].concat(monday, tuesday);
console.log(taskss);


let chainedAnswer = 
	taskss.map(function(day){
	console.log("DAY: " + JSON.stringify(day))
	
	return day.map(function(e, i){
		console.log("TASK: " + JSON.stringify(e))

		return {
		 id: i, 
		 name: e.name, 
		 duration: (e.duration / 60) 
		}
 })
  .filter((e) => e.duration >= 2)
  .reduce((acc, e) => acc + e.duration * 5, 0)
})

console.log(chainedAnswer);
	
	
	







