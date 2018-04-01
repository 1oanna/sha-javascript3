//1. What will be the output of the following code - and more importantly - WHY?
for (let i = 0; i < 3; i++) {
      setTimeout(function() { alert(i); }, 1000 + i);
}

// ANSWER : 3 alert boxes in series prompting numbers 0 to 3.
//Each alert will pop after closing the previous one, alerts are blocking.
//They prevent the user from accessing other parts of the page until the box is closed
//Alert boxes are annoying for the user and should be avoided, 
//their use should be limited, the code above is very bad practice

//-------------------------------------------------------

//2. Write a function that would allow you to do this:

let addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27

function createBase(base, addVal) {
	return function(addVal) { return base + addVal; };
}

//--------------------------------------------------------

// 3. You will need to create an HTML document out of the below snippet to run the below code. 
//A hint - the code is syntactically correct but doesn't do what you would expect. 
//Can you see why and fix it?

let prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!'];
    for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
        // for each of our buttons, when the user clicks it...
        document.getElementById('btn-' + btnNum).onclick = function() {
            // tell her what she's won!
            alert(prizes[btnNum]);
        };
    }

//ANSWER I think it works properly as it is, I can't see the problem in code
//ES6 introduces new let and const keywords that are scoped differently than var-based variables. 
//For example, in a loop with a let-based index, 
//each iteration through the loop will have a new value of i where each value is scoped inside the loop, 
//so your code would work as you expect.
//In my opinion, it's problem is that it displays 3 alert boxes 
//one after the other and that is annoying for the user

//----------------------------------------------------------

// 4. Rewrite the code below so that it is asynchronous, using promises

//1. 
// let sum = calculateSum(2, 6);
// console.log(sum);

//--- async ---
function getArgs(args) {
	let argss = [];
	for(let i=0; i<argss.length; i++)
		argss.push(args[i]);

	return argss;
}

function createSum() {
	return new Promise(resolve => {
		let sum = 0;
		getArgs(arguments).forEach(n => {
			sum += n;
		});
		resolve(sum);
	});
}

let sum = createSum(1,2,3);
sum.then(result => {
	console.log(result);
})



//3. Add together all the numbers and if the number is larger than 8, console.log();
//let sum = calculateSum(2, 6);
// if (sum > 8) {
//     console.log('larger than 8');
// }


let sum2 = createSum(2, 6);
sum2.then(result => {
	if (result > 8)  {
		console.log('larger than 8');
	} else {
		console.log(result);
	}
})

//4. Get all the even numbers from the array and console.log them you know them all
//let array = [1,2,3,4,5,6,7,8,9]
//let even = getEven(array);
//console.log(even)

let array = [1,2,3,4,5,6,7,8,9];

function getEven(arrayToCheck) {
	return new Promise( resolve => {
		let onlyEvens = [];
		arrayToCheck.map( num => {
			if ( num % 2 == 0) {
				onlyEvens.push( num );
			}
		});

		resolve(onlyEvens);
	});
}

let even = getEven(array);
even.then( finalNums => {
	console.log(finalNums);
})