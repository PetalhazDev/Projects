const event = require('events')
const { listeners } = require('process')
const { json } = require('stream/consumers')
//console.log(event)
const emitter = new event.EventEmitter()
//console.log(emitter)
emitter.on("subscribe", ()=>{
    console.log("user sucessfully subscribe")
})

emitter.on("unsubscribe", ()=>{
    console.log("user sucessfully unsubscribe from our")
})

emitter.once("login", ()=>{
    console.log("user sucessfully log in from our")
})



emitter.emit("subscribe")
emitter.emit("unsubscribe")
emitter.emit("unsubscribe")
emitter.emit("unsubscribe")
emitter.emit("login")
emitter.emit("login")

//note use emmitter or emitterClass
//to get max listeners in node js
//emitter.getMaxListeners(20)
//var emitterClass = emitter.getMaxListeners()
//console.log("emitter")
const make = emiter.removeListeners({'subscribe': 'unsubscribe'})
console.log("make");

