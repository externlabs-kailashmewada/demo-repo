var http= require('http');
var page=`<h1>Hello Kailash</h1>
<br>
Name:<input type="text"/>
<br>
Age:<input type="text"/>
<br>
Email:<input type="text"/>
<br>
Phone:<input type="text"/>
<br>
<button="submit">Submit</button>`
http.createServer(function(req,res){
res.writeHead(200,{'Content-Type':"text/html"})
res.write(page);
res.end();
}).listen(3901);