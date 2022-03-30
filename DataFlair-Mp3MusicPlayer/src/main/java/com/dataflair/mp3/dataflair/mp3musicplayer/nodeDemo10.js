var mysql= require('mysql');
var conn=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"root",
   database:"mydb"

});
conn.connect(function(error){
    if(error)throw error;
        console.log("Hyyyyyy")
    console.log("connected");
})