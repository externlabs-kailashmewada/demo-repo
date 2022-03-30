
var http=require("http");
http.createServer(function(req , res){
    res.write("Welcome to the world of node js");
    console.log("kailash");
    res.end();
}).listen(2022)