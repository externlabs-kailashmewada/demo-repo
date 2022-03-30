var http=require('http');
var arr=[{Name:"Arvind"},
        {Age:"22"},
        {Place:"Bhopal"}
];
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'application\Json'})
    res.write(JSON.stringify(arr));
    res.end();
}).listen(2027);