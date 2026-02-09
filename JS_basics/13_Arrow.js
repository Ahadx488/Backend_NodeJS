const user= {
    username : "Abdul" ,
    price : 100 ,

    welcomeMsg : function (){
        console.log( `${this.username} , welcome to web`)  // agar humko object ke andar ki koi chiz access karni hoti hai toh hum " this " ka use karte hai , yaha username "user " function ke andar hai.
    }
}
// this talks about current state or current context

user.welcomeMsg()
// user.username = "AAA"
// user.welcomeMsg()


const chai = () => {  // arrow function
    let us= "htime"
    console.log(this.us)   // undefined
}
chai()

// const add = (num1 , num2 ) => (num1+num2) 

// // when we use () we dont have to write return

// console.log(add(3, 4))

const add = (num1 ,num2) => {
    return num1+num2
}
console.log(4+3)  // when we use braces {} we have to use " return "

// and if we want to return an object , we use { } , so it means it throw error , to solve this we write ({ })
const aaad = (num1 ,num2) => ({userrr: "hitme"})
console.log(aaad(3,4))  // { userrr: 'hitme' }

