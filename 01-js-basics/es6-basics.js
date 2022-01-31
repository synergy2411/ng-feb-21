// - Arrow Function / Lambda Expr : Short and clean manner to write functions

//  (args1, args2) => {
//      console.log("Hello")
//      return "World";
//  }

// var sum = (n1, n2) => n1 + n2;
// console.log("Sum is : ", sum(3,5))

// var squareVal = value => value * value;
// console.log("Square is : ", squareVal(3))












// - Destructuring : "unpacking the collection" | Array | Object
// - clone by value

// var fruits = ["apple", "banana", "kiwi"];

// var [f1, f2, f3] = fruits;

// console.log(f2);

// f2 = "Guava";

// fruits[1]="oranges";

// console.log(fruits)

// var box = {
//     width : 4,
//     height : 6,
//     length : 8,
//     books: ["book1", "book2", "book3"]
// }

// var { width, height, length, books : [b1, b2, b3] } = box;

// console.log(height, b3);


// var user = {
//     firstName : "Foo",
//     lastName : "Bam",
//     friends : ["Baz", "Bar"],
//     address : {
//         city  : "Pune",
//         street : "201 Main Road"
//     },
//     city : "Bengaluru"
// }
// var {
//     firstName,
//     lastName,
//     friends : [f1, f2],
//     address : {
//         city,
//         street
//     }, city : ct
// } = user;

// console.log(lastName, f2, ct);



// var users = [
//     { email : "test1@test.com", age : 32},
//     { email : "test2@test.com", age : 33},
//     { email : "test3@test.com", age : 34},
// ]

// var [
//     {email : e1, age : a1},
//     ,
//     {email : e2, age : a2},
// ] = users;

// console.log(e1, e2, a1, a2);


// var userOne = {
//     email : "one@user.com"
// }

// var userTwo = {
//     email : "two@user.com"
// }

// var { email : userOneEmail} = userOne;

// var { email  : userTwoEmail} = userTwo;

// console.log(userOneEmail, userTwoEmail);         // ?













// - Rest / Spread (...)

// REST - inside function argument list; create collection from individual items; last argument;
// SPREAD - with any collection - Array | Object; spreads the collection into individual items

// var demo = (email, ...params ) => {
//     console.log(params[0]);         // ?
// }

// // demo("test@test.com")
// // demo("test@test.com", 32)
// demo("test@test.com", 32, true)


// var countries = ["India", "USA", "China"];

// console.log(...countries);

// var newCountries = ["Paris", "Russia", ...countries]

// console.log(newCountries);


var state = {
    counter : 101,
    todo : "to pot the plants"
}

var newState = {
    ...state,
    result : [state.counter]
}

console.log(newState);















// - Template String
// - Block Scope Variables
// - Default / optional Parameter
// - Map / Set
// - Class / inheritance
// - Decorators