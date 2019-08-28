function hello(name)
{
    console.log('Hello ' + name );
}
hello('rakesh');

//Node js API FIle System, Http Module
//Path Module

const path = require('path'); //node assume its built in  module f nots 

const os = require('os');

var totalMemory=os.totalmem();
console.log(totalMemory);

var pathObj=path.parse(__filename);
console.log(pathObj);

//ECMA 6
console.log(`Memory: ${totalMemory}`);

const fs = require('fs');

// const files=fs.readdirSync('./');
// console.log(files);

//asynchornous how it works always try to use this
const files=fs.readdir('./1',(err,res)=>{
    if(err) console.log(err);
    else console.log('Result',files);
   
});

