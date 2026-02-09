// Object agar constructor se banaya jata hai (new Object()), to wo singleton hota hai,
// aur agar object literal ({}) se banaya jata hai, to singleton nahi hota.
// Constructor se bana object singleton mana jata hai, jabki object literal se bana object singleton nahi hota.

// object literals

const mySym = Symbol ("key1")

const JsUser ={
    name : "Animation" ,
    "full Name" : "adflkdnlasf" ,
    [mySym]   : "mykey1" ,
    email : "xyz@gmail.com" ,
    age : 20 ,
    address : "Mumbai" ,
    isLoggedin : false ,
    lastLoginDays : ["Monday" , "Tuesday"] ,
}

console.log(JsUser.email)
console.log(JsUser["email"])

// console.log(JsUser.full Name) // not allowed , kyunki humne upar string "" ke andar space dekar decalre kiya hai
console.log(JsUser["full Name"])

console.log(JsUser[mySym]) // symbol ko hum mySym declare nahi kar sakte object ke andar hume [mySym] se declare karna padega tabhi uska type SYMBOL aayega, aur print karte time [mySym] se hi print karna padega

console.log(typeof mySym) // symbol

JsUser.email = "abc@google.com"  // ab woh update ho jayega , lekin agar humko fix karna ho matlab koi change na lar paaye to hum FREEZE ka use karenge

//Object.freeze(JsUser) // ab koi overwrite / change nahi kar sakta

JsUser.email = "lmn@microsoft.com" // ab change nahi ho payega

//console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JsUser")
}

JsUser.greeting2 = function(){
    console.log(`Hello JsUser, ${this.name}`)
    return 0
}
console.log(JsUser.greeting())  // Hello JsUser ,   //undefined
console.log(JsUser.greeting2())  

// undefined was printed. It is because function "greeting" does not return anything (no return keyword). In JavaScript, if a function doesn't explicitly return a value, it returns undefined by default.