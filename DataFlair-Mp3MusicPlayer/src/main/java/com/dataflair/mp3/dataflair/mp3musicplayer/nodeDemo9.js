//file reader code
var http=require('http');
var fs=require('fs');
http.createServer(function(req,res){
    fs.readFile('js1.html',function(err,data){

        res.writeHead(200,{'Content-Type':text/Html})
        res.write(data)
        return res.end();
    })

}).listen(4004);

