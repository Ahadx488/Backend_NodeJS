// A Promise is in one of these states:
//    • pending: initial state, neither fulfilled nor rejected.
//    • fulfilled: meaning that the operation was completed successfully.
//    • rejected: meaning that the operation failed.

// Promise is Object

// earlier we were using BlueBird , before promise

const promiseOne = new Promise(function(resolve , reject){
    // do an async task
    // DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve()  // we have to write this resolve , otherwise it won't connect with .then() 
    },1000)

})

// now consumption of promiseOne
// .then() has direct relation with resolve

promiseOne.then(function (){
    console.log('Promise completed')
})

// below we are not creating and storing it any variable

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2 completed')
        resolve()
    },1000)
}).then(function(){
    console.log('Promise2 completed')
})

// here we will learn how we work on the obtained data

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"ahad", email:"ahad@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= false;
        if(!error){
            resolve({username : "abdul" , password : "123"})
        }else{
            reject('ERROR : something went wrong')
        }
    },1000)
}) 

// here we will learn chaining
promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log('The Promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if(!error){
            resolve({username : "abdul" , password : "123"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
}) 

// we will use async , await instead of .then()

// async function consumePromiseFive (){
//     const response = await promiseFive
//     console.log(response)
// }
// error = true rakhne par error throw kar rahaa hai, agar false rakhenge toh chal jayega

// we will handle it by try & catch

async function consumePromiseFive(){
    try{
        const response =await promiseFive
        console.log(response)
    }
    catch(error){  // reject jo chiz bhej raha hai woh catch(..) le leta hai
        console.log(error)
    }
}
consumePromiseFive()

// async function getAllUsers(){
//     try{
//         const responses= await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(responses)  --> (1)
//         const data =await responses.json() // (2)
//         console.log(data)
//     }
//     catch(error){
//         console.log('E:',error)
//     }
// }

// getAllUsers()

// ==============

//JavaScript does NOT execute async code in the order it is written.
// It executes async code in the order they finish (with queue priority rules).
// so we are getting API response first  === Because fetch() finishes earlier than your setTimeout(1000) promises, so its result is handled first.=== (if we only do (1))

// (2) -> The API output will STILL come before your setTimeout(1000) promises.

// ================

// getAllUsers in .then().catch() format

fetch('https://jsonplaceholder.typicode.com/users')
.then((responses)=>{
    return responses.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})

// ========== FLOW =========

// JavaScript runs the code inside the async function.

// It hits await fetch(...).

// It puts a "bookmark" at that line and exits the function temporarily.

// It goes off to run other JavaScript code (like button clicks, animations, or other functions) while the file is downloading in the background.

// Once the fetch is done, JavaScript returns to the "bookmark" and runs the next line.
