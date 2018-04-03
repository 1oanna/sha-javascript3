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

//first version
let newNumberss = numbers.reduce(function(newArray, number){
    newArray.push(number);
	if(number % 2 == 0) {
        /* Add it a second time. */
    newArray.push(number);
    }
	return newArray;
}, []);

console.log("v.1 The final numbers are", newNumberss); // [1, 2, 2, 3, 4, 4]

//second version
let newNu = numbers.reduce( (res, current) => {
	return (current % 2 == 0) ?
				res.concat([current, current]):
				res.concat([current]);
}, []);

console.log("v.2 The final numbers are", newNu); // [1, 2, 2, 3, 4, 4]

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
let newMonday1 = newMonday.filter((e) => e.duration >= 2);
console.log(newMonday1);
    
//d)Sum it all up for the day.
let sumHoursMon = newMonday1.reduce((acc, e) => acc + e.duration, 0);
console.log("the sum in hours, for tasks, that took more than 2 hours on Monday is " ,sumHoursMon);

//c)Filter out everything that took two hours or more on Tuesday.
let newTuesday1 = newTuesday.filter((e) => e.duration >= 2);
console.log(newTuesday1);
    
//d)Sum it all up for the day.
let sumHoursTue = newTuesday1.reduce((acc, e) => acc + e.duration, 0);
console.log("the sum in hours, for tasks, that took more than 2 hours on Tuesday is " ,sumHoursTue);

//e)Sum it all up for both days
let totalSum = sumHoursMon + sumHoursTue;
console.log("the total sum in hours for both days is " ,totalSum);

//f)Multiply the result by a per-hour rate for billing
//g)Output a formatted Euro amount.
let salary = Math.round(totalSum * 10);
console.log("v.1 after billing of 10 euros per hour, the salary for 2 days in euros is " ,salary);


//------  another solution to the same problem, with alternatives for some steps

//flaten day tasks in one array
let flattenTasks = [].concat.apply([], tasks);

//simpler way to flat items
flattenTasks = [].concat(tasks[0], tasks[1]);

let tasksWorth = flattenTasks.reduce( (res, itm) => {
    return res + itm.duration;
}, 0);
console.log("Tasks Worth in mins: ", tasksWorth);

//in hours
let tasksWorthInHours = tasksWorth / 60;
console.log("Tasks Worth in hours: ", tasksWorthInHours);

//or
tasksWorthInHours = flattenTasks.reduce( (res,itm) => {
	return res + itm.duration / 60;
}, 0);
console.log("Tasks Worth in hours: ", tasksWorthInHours);

//Filter out everything that took two hours or more.
let tasksOver2Hours = flattenTasks.filter( itm => {
	return itm.duration >= 120;
});
console.log("Tasks over 2h", tasksOver2Hours);

//Sum it all up.
let sumofTasksOver2Hours = tasksOver2Hours.reduce( (res, itm) =>{
	return res + itm.duration / 60;
}, 0);
console.log("Tasks over 2h sum up", sumofTasksOver2Hours);

//Multiply the result by a per-hour rate for billing.
let hourCost = 10;
let totalCost = hourCost * sumofTasksOver2Hours;
console.log("v.2 total cost", totalCost);

//Output a formatted Euro amount.
let formatedPrice = '€' + totalCost.toFixed(2);
console.log("v.3 formated price", formatedPrice);

//other way using formater
let formatter = new Intl.NumberFormat('el-GR', {
    style: 'currency',
    currency: 'EUR',
});

formatedPrice = formatter.format(totalCost);
console.log("v.4 formated price", formatedPrice);


//---------- another approach to the same problem provided by  teacher Kostas

// since the concat() method is part of any array, the best way is:
tasks = monday.concat(tuesday);

//=== [1] Collect two days' worth of tasks.
let totalTasksMinutes = tasks.reduce((acc, value)=> { 

  acc = acc + value.duration;
  return acc;

}, 0 );
// console.log( totalTasksMinutes + " minutes" ); // 1220 minutes

//=== [2] Convert the task durations to hours, instead of minutes.
let chainedAnswer = tasks.map((res)=>{

  return ( res.duration / 60 );

//=== [3] Filter out everything that took two hours or more.
}).filter((res)=>{

  return ( res >= 2 );

//=== [4] Sum it all up.
}).reduce((acc,value)=> { 

  acc = acc + value; 
  return acc;

}, 0);

//=== [5] Multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour).
let billing = chainedAnswer * 10; 

//=== [6] Output a formatted Euro amount.
console.log( "v.5 Amount: " + billing.toFixed(2) + " €" );
	
	
//---------- another approach to the same problem provided by teacher Dimitris
let tasksss = [monday, tuesday];
const payableHours = tasksss
  // collect two days' worth of tasks
  .reduce((accumulator, arr) => {
    arr.forEach(e => {
      accumulator.push(e);
    });

    return accumulator;
  }, [])
  // convert the task durations to hours, instead of minutes
  .map(e => {
    return {
      name: e.name,
      duration: e.duration / 60
    };
  })
  // filter out everything that took two hours or more
  .filter(e => e.duration >= 2)
  // sum it all up
  .reduce((accumulator, e) => accumulator + e.duration, 0)

// multiply the result by a per-hour rate for billing (you can decide yourself what Maartje should make per hour)
const totalCostt = payableHours * 10;

// output a formatted Euro amount
console.log(`v.6 Maartje should be paid ${totalCostt.toFixed(2)} EUR`);





