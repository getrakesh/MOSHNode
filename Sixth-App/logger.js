
var url="www.logger.io"

const EventEmitter=require('events');

class Logger extends EventEmitter{

    log(message)
    {
    console.log(message);
    // Raise an event with this technique we can pass data
    this.emit('messageLogged',{id:1,url:'http://logger.io'});
    }

}


module.exports=Logger;//exporting only simple function

