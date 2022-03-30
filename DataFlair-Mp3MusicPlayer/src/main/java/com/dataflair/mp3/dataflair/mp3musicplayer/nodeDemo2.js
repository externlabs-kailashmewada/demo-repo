function complexExp(add)
{
    console.log(add(200,300));
}
complexExp(function(a,b){
    return a+b;
})