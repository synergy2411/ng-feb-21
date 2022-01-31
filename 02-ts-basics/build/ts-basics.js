"use strict";
// let str : string = "Some String";
// let age : number = 32;
// let isAdmin : boolean = true;
// let user : Object = {}
// let fruits : Array<string> = ["apple", "oranges"]
// let sum : Function = () => {}
// let dob : Date = new Date("Dec 21, 1965")
// let xyz : any = 201;
// xyz = "string";
// xyz = true;
// let isNull : null = null;
// enum Colors {
//     Red, Green, Blue
// }
// let favColor : Colors = Colors.Blue;
// let y : unknown;
// type MyType = {
//     name : string,
//     age : number
// }
// let userZ : MyType = {
//     age : 32,
//     name : "..."
// }
// console.log(userZ);
window.onload = function () {
    var username = document.getElementById("username");
    var btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", function (event) {
        if (username.value === "") {
            alert("Please enter your name first");
        }
        else {
            alert("Hello ".concat(username.value));
        }
    });
};
