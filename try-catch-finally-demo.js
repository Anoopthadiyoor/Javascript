exr=`/23*76+97`;
try{
    console.log("try block")
    console.log(eval(exr))
}
catch{
    console.log("catch block")
    console.log("error")
    exr=`23*76+97`;
    console.log(eval(exr))

}
finally{
    console.log('finally block')
    console.log('Always executed')
}
console.log("data transmitted",eval(exr))
