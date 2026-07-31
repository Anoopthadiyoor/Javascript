function passarguements(...args){
    if(args.length===0) {//no arguements passed
    console.log("no arguemnts passed")
}else if(args.length === 1){
    ///one arguement passed
    console.log("one arguement passed :", args[0])
}else{
    //multiple arguements passed
    console.log("mulyiple arguements passed :", args)
}
}
passarguements();
passarguements(10);
passarguements(10,20);
