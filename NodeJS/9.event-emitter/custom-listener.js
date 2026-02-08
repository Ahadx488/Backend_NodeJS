

const eventEmitter = require('events')

class myCustomEmitter extends eventEmitter{
    constructor(){
        super()
        this.greeting = 'hi'
    }
    greet(name){
        this.emit('greeting',`${this.greeting},${name}`)
    }
}

const MyCustomemitter = new myCustomEmitter()

MyCustomemitter.on('greeting', (input)=>{
    console.log(`Greeting event`, input)
})

MyCustomemitter.greet('Abdul Ahad')