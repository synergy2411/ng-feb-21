// console.log("Program Starts");
// setTimeout(function(){
//     console.log("3 seconds left")
// }, 3000)
// console.log("Program Ends");

// Program Starts
// Program Ends
// 3 Seconds left



// var fn = function add(n1, n2){
//     return n1 + n2;
// }

// function outer(){
//     return function inner(){

//     }
// }


// Error First, Callback Last
// function greet(err, name){
//     if(err){
//         console.log(err);
//         process.exit(1);
//     }
//     console.log("Good Morning to ", name)
// }

// function morningGreet(arr, cb){
//     console.log("Morning Greet")
//     if(arr.length > 3){
//         cb(null, "John")
//     }else{
//         cb(new Error("Too few values"))
//     }
// }

// morningGreet([1,2,3, 4],greet)







// PROMISE API

// Producer Code
function delay(){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            // resolve({message : "SUCCESS"})
            reject(new Error("Something bad happened"))
        }, 3000);
    })
    return promise;
}

// Async...Await

async function consumePromise(){
    try{
        var value = await delay()
        console.log(value);
    }catch(err){
        console.log("[ERROR]", err);
    }
}

consumePromise();




// Consumer Code
// function consumePromise(){
//     delay()
//     .then(function(value){
//         console.log(value)
//     }).catch(function(err){
//         console.log(err)
//     })
// }

// consumePromise();