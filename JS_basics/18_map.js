const nums=[1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10]
// const ans= nums.map( (num)=> num + 5 )    // yeh " for each() " ki tarah nahi hai , yeh value return karne par store kar sakta hai

// chaining

const newNums = nums
                    .map( (num)=> num*10 )
                    .map( (num)=> num+1)
                    .filter( (num) => num > 40)

console.log(newNums);
