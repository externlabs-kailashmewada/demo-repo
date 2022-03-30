var http=require('http');
var nodeMailer=require('nodemailer')
var transport=nodeMailer.createTransport({
    host:'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'kailashmewada485@gmail.com',
        pass:'Kailash@123'
    }
      
});
var mailOption={
    from:'kailashmewada485@gmail.com',
    to:'kailashmewada486@gmail.com',
    subject:'node Mail',
    text:'Hell0'

}
transport.sendMail(mailOption,function(error,info){
    if(error){
    console.log(error);
    }
    else{
        console.log();
    }
})

 