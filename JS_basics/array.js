const arr = [1, 2, 3, 4, 5];
console.log(arr[3])

arr.push(6)
arr.push(7)

console.log(arr) //[1, 2, 3, 4,5, 6, 7]

arr.pop()
console.log(arr) // [ 1, 2, 3, 4, 5, 6 ]

arr.unshift(9)
console.log(arr) // [ 9, 1, 2, 3, 4, 5, 6 ]  // starting me add hua jiski wjah se puri values shift karni pad gayi, abhi toh array chota hai lekin bade arrays me yeh karna OPTIMAL nahi hai

arr.shift()
console.log(arr) // [ 1, 2, 3, 4, 5, 6 ]

console.log(arr.includes(8)) //false 

console.log(arr.indexOf(8)) // -1

const newarr= arr.join()
// join() -> Adds all the elements of an array into a string, separated by the specified separator string.

console.log(arr)    // [ 1, 2, 3, 4, 5, 6 ]
console.log(newarr) // 1,2,3,4,5,6
console.log(typeof newarr) // string

console.log("A" , arr)  // A [ 1, 2, 3, 4, 5, 6 ]
const narr=arr.slice(1 , 3) 
console.log(narr) // [ 2, 3 ]

const narr1=arr.splice(1,3)   // splice poora utna portion hi uda deta hai
console.log(narr1); // [ 2, 3, 4 ]

console.log(arr)  // [ 1, 5, 6 ] splice ne [ 2, 3, 4 ] uda hi diya


// Part-2 
// Array initialization
const marvel_heros=[ "Spiderman" , "Thor" , "Ironman"]
const dc_heros=[ "Batman" , "Flash" , "Superman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros) // [ 'Spiderman', 'Thor', 'Ironman', [ 'Batman', 'Flash', 'Superman' ] ]

const all_heros=marvel_heros.concat(dc_heros)
console.log(all_heros)  // [ 'Spiderman', 'Thor', 'Ironman', 'Batman', 'Flash', 'Superman' ]

// push => 
// Adds elements to the end of an existing array.
// When an array is pushed, it's added as a single, nested element.

//concat
// Merges two or more arrays. It returns a new array and does not modify existing arrays 

//  Using the Spread Operator (`...`) 
// A modern and often preferred method for merging arrays.
// It "spreads" out the elements of arrays into a new array.
const all_heroes_spread = [...marvel_heros, ...dc_heros];
// console.log(all_heroes_spread);
// Output: ["thor", "Ironman", "spiderman", "superman", "flash", "batman"]

