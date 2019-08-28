function hello(name)
{
    console.log('Hello ' + name );
}
hello('rakesh');

//Event Handler is very core concept
//A class is a container which contains methods 

const EventEmitter=require('events'); //a class

const Emitter= new  EventEmitter();
//a class is a human and John is a real object

//Register a listener arrow functions in Vs6
Emitter.on('messageLogged',(arg)=>{
    console.log('listener called');
    console.log(arg);
})

// Raise an event with this technique we can pass data
Emitter.emit('messageLogged',{id:1,url:'http://logger.io'});