var http=require('http');
http.createServer(function(req,res){
    res.write("Hello guys welcome to the world of node js:");
    res.end();
}).listen(2023);