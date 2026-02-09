const name="abdul"
const age=22

console.log(name +"my age is"+ age) // old method

console.log(`My name is ${name} and my age is ${age}`) // Modern way

const gamename = new String ( 'axknfladk')
console.log(gamename[0])// o/p => a

console.log(gamename.__proto__) //{} __proto__ tells from where an object inherits properties and methods.
console.log(gamename.toUpperCase()) // AXKNFLADK
console.log(gamename.length) //9
console.log(gamename.charAt(4)) // f

const newString= gamename.substring(0,4)
console.log(newString)

const anotherString=gamename.slice(-8,4)  //String length = 9 ;   -8 means: length - 8 = 9 - 8 = 1 ; 
//So internally: slice(1, 4) // xkn    // we can give negative index in slice only

console.log(anotherString) // xkn

const string1="    xaxa   "
console.log(string1.trim())  // removes spaces

const url="https://hitme.com/hitme%20mod"
console.log(url.replace('%20' , '--')) 

console.log(url.includes('hitme')) // checks whether it exists or not

// splitting string to array
const str="hitme-xyz-abx"
console.log(str.split('-')) // splitting on basis of '-' ; o/p => [ 'hitme', 'xyz', 'abx' ]
