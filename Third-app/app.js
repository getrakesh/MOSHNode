function hello(name)
{
    console.log('Hello ' + name );
}
hello('rakesh');

//Second Topic is module system

//loading a module
const log= require('./logger');
log('message');



//we should use constant instead of var
//jshint
//best practices we should use const
