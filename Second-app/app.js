function hello(name)
{
    global.console.log('Hello ' + name );
}
hello('rakesh');

//Second Topic is module system
// global object
//window is not available
// console.log()//global object similarly setTimeOut() clearTimeOut()

// window.console()

//gobale scope if the function is available in both files with same name so we need to module
//every file is considered as module, scoped to that file in object oriented concept we say private
// will not availabe outside. To access we need to export explicitly
// console.log(global)
console.log(global) //its not global object
