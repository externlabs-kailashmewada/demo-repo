function func1(){
    return new Promise(function(resolve, reject){
        setTimeout(() => {
            const error=true;
            if(!error)
            {
                console.log("Function: your promise has been resollved!");
                resolve();
            }
            else{
                console.log("function : your promise has not been resolved");
                reject('Sorry not fulfilled');                
            }
            
        }, 2000);
    })
}
func1().then(function(){
    console.log('promise reolving');
}).catch(function(){
    console.log('very bad bro');
})