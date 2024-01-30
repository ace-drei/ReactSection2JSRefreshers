// //import { apikey } from "./utils.js";
// //import apikey from "./util.js";
// //import { apikey, abc as content } from "./util.js";

// //import * as util from "./utils.js";
// //console.log(content);

// //let userMessage = "Hello World From Andrei";

// // const userMessage = "Hello World From Andrei";
// // //const must not be reassigned

// // console.log(userMessage);
// // console.log(userMessage);

// //console.log(5 + 10);
// // console.log(5 === 10); checking for equality

// // function greet() {
// //   console.log("Hello!");
// // }

// // greet();

// // function greet(username, message) {
// //   console.log(username);
// //   console.log(message);
// // }

// // greet("Andrei", "Hi!");
// // greet("Giath", "Bitch");

// // function greet1(username = "Andrei", message = "Hi!") {
// //   console.log(username, message);
// // }

// // greet1();

// // function createGreeting(userName, message = "Hello World!") {
// //   return "Hi, I am " + userName + ". " + message;
// // }

// // const greeting1 = createGreeting("Andrei");
// // console.log(greeting1);

// // const greeting2 = createGreeting("Andrei", "Hi!");
// // console.log(greeting2);

// // export default (userName, message) => {
// //   console.log("Hello!");
// //   return userName + message;
// // };

// // const userName = "Andrei";
// // const userAge = 20;

// // const user = {
// //   name: "Andrei",
// //   age: 20,
// //   greet(userName) {
// //     console.log("hello");
// //     console.log(this.age);
// //   },
// // };

// // // console.log(user.name);
// // user.greet();

// // class User {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   greet() {
// //     console.log("Hi!");
// //   }
// // }

// // const user1 = new User("John", 90);
// // console.log(user1);

// const hobbies = ["sports", "cooking", "reading"];

// // console.log(hobbies[1]);

// hobbies.push("Working");
// // console.log(hobbies);

// // const index = hobbies.findIndex((item) => {
// //   return item === "sports";
// // });

// const index = hobbies.findIndex((item) => item === "sports");
// console.log(index);

// // const editHobbies = hobbies.map((item) => item + "!");
// // console.log(editHobbies);

// const editHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editHobbies);

// const userNameData = ["Andrei", "Ciobirca"];

// const firstname = userNameData[0];
// const lastname = userNameData[1];

// console.log(firstname, lastname);

// const [firstname, lastname] = ["Andrei", "Ciobirca"];

// console.log(firstname, lastname);

// const { name, age } = {
//   name: "Andrei",
//   age: 25,
// };

// console.log(name, age);

// // const name = user.name;
// // const age = user.age;

// const hobbies = ["sports", "cooking"];
// const user = {
//   name: "Andrei",
//   age: 25,
// };

// const newHobbies = ["reading"];
// const mergedHobbies = [...hobbies, ...newHobbies];
// console.log(mergedHobbies);

// const extendUser = {
//   isAdmin: true,
//   ...user,
// };

// console.log(extendUser);

// if (10 === 10){
//     //...
// }

// else if{

// }

// user imput
// const password = prompt("Your password ");

// if (password === "Hello") {
//   console.log("Hello Works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("access not grantedello");
// }

// let hobbies = ["Sports", "Cookies", "Fucking"];

// for (const hobby of hobbies) {
//   console.log(hobby);
// }

// document.querySelector("ul");
// list.remove();

// passing functions as values
// function handletimeout() {
//   console.log("Timed out!");
// }

// const handletimeout2 = () => {
//   console.log("Timeout again!");
// };

// setTimeout(handletimeout, 2000);
// setTimeout(handletimeout2, 3000);
// setTimeout(() => {
//   console.log("The timeout is too much");
// }, 5000);

// function greeter(greetFn) {
//   greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//   function greet() {
//     console.log("Hi");
//   }
//   greet();
// }

// init();

// let userMessage = "Hello!";

// userMessage = "Hello there!";

// const message = "Hello";

// const hobbies = ["sports", "cooking"];
// hobbies.push("studying");
// console.log(hobbies);
