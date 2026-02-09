const num=400
console.log(num) // 400

const num1=new Number(100)
console.log(num1)      // o/p => [Number: 100]

console.log(num1.toString())  // converted to String
console.log(typeof num1) // object

//new Number(100) creates an OBJECT, not a primitive number.
const str = num1.toString();
console.log(str);        // "100"
console.log(typeof str); // "string"

/*
Short Note: new Number() vs num = 100

new Number(100) creates a Number object, not a primitive.

Calling toString() on it returns a new string but does not change the original object’s type.

JavaScript does not mutate variables when calling methods; it only returns new values.

Therefore, the type of num1 remains "object" even after num1.toString().

const num1 = new Number(100);
typeof num1; // "object"

Why num = 100 works differently

100 is a primitive number.

When a method is called, JavaScript temporarily wraps it in a Number object (auto-boxing).

After the method call, it returns the primitive result and discards the wrapper.

const num = 100;
const str = num.toString();
typeof str; // "string"
*/


const num2= 123
console.log(num2.toFixed(2))  //123.00

const num3= 23.8977
console.log(num3.toPrecision(2)) // 24
console.log(num3.toPrecision(3)) // 23.9

const num4=1000000
console.log(num4.toLocaleString('en-IN')) // 10,00,000

// ================== MATHS =====================

console.log(Math)
console.log(Math.abs(-4)) //4 
console.log(Math.round(4.6)) // 5
console.log(Math.random()) // any value between 0->1

// if we want number in particular range:-

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)
