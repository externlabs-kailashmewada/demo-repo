var http=require('http')
http.createServer(function(req,res){
    res.write("Hello Nodemon")
    res.end();
}).listen(4002);

//nodemon pakage install and import for change without restart server
//npm i --save-dev nodemon