function sayMyname(){
    console.log("M")
    console.log("A")
}
// sayMyname => reference of function  // sayMyname() => yeh hai function ka execution

//sayMyname()

// ++++++++ REST Operator ++++++++
// like if we are designing ecommerce platform and we dont to how much items customer will add in the cart, so we cant calculate the total for this we have REST operator
/*function price(num1){
    return num1         // this function will return only one value, but if our cart contains (100,        200,300) it will throw error
}*/

function price (...num1){
    return num1           // "..." is rest operator
}
console.log(price(100,200,300))  //[ 100, 200, 300 ]
console.log(100,200) // 100 200

function cartPrice(val1 , val2, ...num){
    return num
}
console.log(cartPrice(100,200,300,400,500)) //[ 300, 400, 500 ]  100,200 val1 aur val2 ne leli baaki num1 me chali gayi

// in the browser console, global variables are attached to the window object, while in a JavaScript file, global scope is limited to the file or module.