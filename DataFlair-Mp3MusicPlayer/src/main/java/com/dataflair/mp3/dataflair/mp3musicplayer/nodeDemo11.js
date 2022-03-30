
/*var fs=require('fs')
var rs=fs.createReadStream('./nodeTxt.txt');
rs.on('open',function(){
    console.log("NodeTxt file is on");
})
*/
//now to make own event

var event=require('events');
var eventEmitter=new event.EventEmitter();
eventEmitter.on('speak',function(name){
    console.log(name,'is speaking');
})
eventEmitter.emit('speak','Kailash');