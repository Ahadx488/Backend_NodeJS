// const regularuser = new Object()
/*
const User = new Object();
User.email = "some@gmail.com";
User.fullname = new Object();
User.fullname.userfullname = new Object();
User.fullname.userfullname.firstname = "Ahad";
*/


const regularUser = {
    email: "some@gmail.com",
    fullname: {
      userfullname: {
        firstname: "Ahad" ,
        lastname : "Momin" ,
      }
    }
}

console.log(regularUser.fullname.userfullname.firstname)

// combining object

const obj1={ 1: "a", 2: "b"}
const obj2={ 3: "c", 2: "d"}

//const obj3={ obj1 , obj2 }
//console.log(obj3)  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '2': 'd', '3': 'c' } } , nested,// wahi array wali problem

//const obj3=Object.assign(obj1, obj2)
//console.log(obj3) // { '1': 'a', '2': 'd', '3': 'c' }

// safe way ==> const obj3=Object.assign( {}, obj1, obj2)  // { '1': 'a', '2': 'd', '3': 'c' }

//another method :: spread operator

const obj3 = {...obj1 , ...obj2}
console.log(obj3)  // { '1': 'a', '2': 'd', '3': 'c' }  // same hi output aaya

// ===== OBJECT De Structure =====
const course = {
    courseName : "JS" ,
    courseInstructor : "Chai aur Code" , 
    price : 999, 
}
// course.courseInstructor // baar baar course.somthing likhna padega // isliye hum ab isko destructure karnege

//const {courseInstructor} = course
//console.log(courseInstructor) // Chai aur Code

// agar aur short karna hai toh 
const {courseInstructor : instructor} = course
console.log(instructor)  // Chai aur Code // same ans aa gaya



  