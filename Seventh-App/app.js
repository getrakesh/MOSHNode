
const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/')
    {
    res.write('Hello World');
    res.end();
    }

    if(req.url=='/courses')
    {
        // res.send(JSON.stringify([1,2,3]));
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
    

});
server.listen(3000);

server.on('connection',(socket)=>{
    console.log('lnew connection')
})

console.log('listening on port 3000')