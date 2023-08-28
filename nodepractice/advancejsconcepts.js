// spread operator
// let arr1 = [2, 3];
// let arr2 = [1, ...arr1, 4];

const { exit } = require("process");

// console.log(arr2);  // [1, 2, 3, 4]

// rest parameter 
// function numbers(...args) {
//     console.log(args);  // [1, 2, 3]
//   }
//   numbers(1, 2, 3); 

// `hello ${name};` => template litarals

// ternary operator
// let speed = 70;
// let message = speed >= 100 ? "Too Fast" : "OK";

// console.log(message);  // 

// 3. Defining Functions
// There are multiple ways to define a function.

// Function Declaration
// Function Expression
// Arrow Functions
// Function Constructor, etc.

// arrow functions 

// constructor function
// function Car(car){
//     this.car=car;
// }
// console.log(new Car("audi"));

//  Built-in Constructor Function 
// let now = new Date();

// console.log(now);  // Tue Feb 02 2021 19:10:29 GMT+0530 (India Standard Time) { }
// console.log(typeof(now));  // object

// let date = new Date("2002-04-6");

// console.log(date);  // Thu Jan 28 2021 05:30:00 GMT+0530 (India Standard Time) { }

// function start() {
//     console.log(this);  // Window { }
//   }
//   start();

// async function

// const url = "https://apis.ccbp.in/jokes/random";

// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((jsonData) => {
//     //statement-1
//     console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
//   });

// //statement-2
// console.log("fetching done"); // fetching done

// let counter = 0;
// setInterval(function() {
//   console.log(counter);
//   counter = counter+1;
// }, 1000);

const url = "https://apis.ccbp.in/jokes/random";
let responsePromise = fetch(url);

responsePromise.then((response) => {
  console.log(response); // Response{ … }
});