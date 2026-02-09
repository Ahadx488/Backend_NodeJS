// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value); // map is iteretable
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key,value] of myObject) {
//   console.log(key, ':-', value);        //myObject is not iterable  // as we know we cant iterate over object
    
// }

// ===== To make "for of loop" work on OBJECTS we do :- ======

for (const [key, value] of Object.entries(myObject)) {
    console.log(key,':-', value);    // working fine
  }