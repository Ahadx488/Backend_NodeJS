// callbacks are functions that are passed as arguments to other functions

const fs = require('fs')

function person(name, callbackFn){
    console.log(`hello my name is ${name}`)
    callbackFn()
}

function address(){
    console.log('India')
}
person('Abdul Ahad', address)

fs.readFile('input.txt' ,'utf8', (err,data)=>{
    if(err) {
        console.error('error in reading file : ',err)
        return 
    }
    console.log(data)
    
})