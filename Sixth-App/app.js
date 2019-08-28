function hello(name)
{
    console.log('Hello ' + name );
}
hello('rakesh');



const Logger= require('./logger');
const logger= new  Logger();

//Register a listener arrow functions in Vs6

logger.on('messageLogged',(arg)=>{
    console.log('Listener called',arg);
})

logger.log('message');

//if u want to raise an event u need to create a new class extends EventEmitter
//use this.emit
// and finally in app.js
// use custome class that defined extends EventEmitter
