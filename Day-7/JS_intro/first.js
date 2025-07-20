// const x = 5;
// const y = 9;
// x==y ? console.log("they are same") : console.log("they are different");
// Output: 5

// let z = 5;
// console.log(z + "5"); // Output: 15

// console.log("5" - 2);

// console.log("5" + 2);

// let x = Number("123");
// let y = 5
// console.log(typeof(x)); // Output: 128

//  let x = String("123");
//  let y = 5
//  console.log(x + y); // Output: 128

//  let x = 5;
//  let y = 9;

//  console.log(x == y );

//   let x = 5;
//   let y = "5";
//   console.log(x == y);

// let x = 1546.5;
// console.log(parseInt(x));

// let x = 5;
// let y = x;
// y = 20;
// console.log(y);

// let x = 154Y6.5;
// console.log(parseInt(x));

// let user1 = {
//   name: "John",
//   roll: "123",
// };
// let user2 = {
//   name: "Doe",
//   roll: "456",
// };
// let user3 = {
//   name: "Jane",
//   roll: "789",
// };
// console.log(user1.roll);

// let array1 = [1, 2, 3, 4, 5, "ramesh", "suresh", "mahesh"    , "suresh"    ];
// let array2 = [1, 2, 3, 4, 5, "ramesh", "avx", "mahesh"    , "suresh"    ];
// console.log(array2[6]); // Output: 2

// let array1 = [0, 132, 221, 376, ];
// let array2 = [55, 66, 77];
// console.log(array1 + array2); // Output: 0,132,221,37655,66,77

// let array1 = [0, 132, 221, 376, ];
// let array2 = [55, 66, 77];
// console.log(...array1,...array2 ); // Output: 0,132,221,37655,66,77 // Output: 0,132,221,37655,66,77

// let user1 = {
//   name: "John",
//   roll: "123",
//   rest: { age: 25, state: "up" },
// };

// console.log(user1.rest.state); // Output: up

// let x = "15abc45";
// console.log(parseInt(x));

// const student = new Object()
// student.name = "John",
// student.roll = "123",
// console.log(student);
//   output: { name: 'John', roll: '123' }

//object destructure
// let student= {
//   name: {
//     firstname: "John",
//     lastname: "Doe"
//   },
//   roll: "123"
// }

// const {name:{firstname, lastname}, roll} = student  //<----object destructure

// console.log(firstname);  // Output: John

// let student1= {
//   name: {
//     firstname: "John",
//     lastname: "Doe"
//   },
//   roll: "123"
// }
// let student2= {
//   name: {
//     firstname: "abc",
//     lastname: "ghosh"
//   },
//   roll: "123231"
// }
//  const {name:{firstname, lastname}, roll} = student2

//  console.log(lastname);  // Output: John

// const order = {
//         id: "ord123",
//         customer: {
//             name: { firstname: "john", lastname: "ghosh" },
//             address: { state: "Wb", district: "hooghly", city: "chandannagar", pin: 709278 }
//         }

//         const { name: { firstname, lastname } } = customer

//         console.log(lastname);
// error above

// const book1 ={
//     title: "Harry Potter",
//     author: "JK Rowling",
//     details: showdetails

// }
// const book2 ={
//     title: "Hunger Games",
//     author: "JK Rowling",

// }
// const book3={
//     title: "Harry Potter",
//     author: "JK Rowling",
// }
// /**
//  * A function that returns a string with the book title and author.
//  * @this {Object} The book object.
//  * @returns {string} A string with the book title and author.
//  */
// function showdetails() {
//     return ${this.title} by ${this.author};
// }
// console.log(book1.details());

// const car1 = { brand: "suzuki" }

// function startEngine() {
//     return `${this.brand} car`
// }
// car1.start = startEngine;
// console.log(car1.start)

// const sym1 = Symbol("id1");
// const sym2 = Symbol("id2");

// console.log(typeof(sym1)); // output:symbol



// const sym1 = Symbol("id1");
// const sym2 = Symbol("id2");
// console.log(sym1 == sym2);

// output = false



// const ID = Symbol("id");
// const user = {
//     name: "jhon",
//     [ID]: 101
// }
// console.log(user.name);
// console.log(user[ID])
//  output 101



// const obj1 = { a: 1 };
// const obj2 = { a: 1 };

// const obj3 = { a: 3 };

// console.log(obj1 == obj2);
// console.log(obj1 == obj3);

// output = false
//         false    



const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };

const result = {...obj1, ...obj2, ...obj3 };

console.log(result); // { a: 1, b: 2, c: 3 }



// output needed -{a:1,b:2,c:3}