let myDate=new Date()

console.log(myDate) // 2026-01-30T16:13:39.418Z
console.log(myDate.toString())  // Fri Jan 30 2026 21:45:28 GMT+0530 (India Standard Time)
console.log(myDate.toLocaleString()) // 1/30/2026, 9:45:28 PM
console.log(myDate.toDateString()) // Fri Jan 30 2026

let createDate=new Date(2025, 0, 12)
console.log(createDate.toString()) // Sun Jan 12 2025 00:00:00 GMT+0530 (India Standard Time) 
// so it means in JS months start from 0

let myTimeStamp = Date.now()
console.log(myTimeStamp)  // 1769790309850   time in ms from 1 Jan 1970 to till now


