function delay(time){
    return new Promise((resolve)=>setTimeout(resolve,time))
}
console.log('Promise lecture starts')
delay(2000).then( ()=> console.log('promise resolved after 2 sec'))
console.log("end")

function divide(num1 , num2){
    return new Promise((resolve,reject)=>{
        if(num2 === 0){
            reject('number is not divisible by 0')
        }else{
            resolve(num1/num2)
        }
    })
}

divide(10,0)
.then((result)=>{
    console.log(result,'res')
})
.catch((error)=>{
    console.log(error,'err')
})