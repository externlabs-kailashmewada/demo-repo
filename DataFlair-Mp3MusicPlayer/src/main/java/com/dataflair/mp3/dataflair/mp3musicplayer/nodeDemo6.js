//npm = node pagage mananger
var http=require('http');
var uc=require('upper-case');
http.createServer(function(req,res){
    
    res.write(uc.upperCase("Kailash Mewada"));
    res.end();
}).listen(2128);