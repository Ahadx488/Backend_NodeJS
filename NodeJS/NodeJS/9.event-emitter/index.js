// An Event Emitter allows emitting and handling custom events using listeners in JavaScript, commonly used in Node.js.



const eventEmitter = require('events')
const myfirstEmitter= new eventEmitter()

// register a listener

myfirstEmitter.on('greet', (name)=>{
    console.log(`salam ${name}`)
})
myfirstEmitter.emit('greet', 'ahad')