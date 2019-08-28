
var url="www.logger.io"
const EventEmitter=require('events'); //a class
const Emitter= new  EventEmitter();

//Register a listener arrow functions in Vs6
Emitter.on('messageLogged',(arg)=>{
    console.log('listener called');
    console.log(arg);
})


function log(message)
{
//send an http request
console.log(message);
}

module.exports.log=log;//exporting an object. It will be helpful if we have many methods
module.exports=log;//exporting only simple function


// module.exports.url=url;