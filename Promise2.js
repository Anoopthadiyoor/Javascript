var pro= new Promise((resolve, reject)=>{
    let lotnum=1;
    let prizenum=Math.floor(Math.random()*5)
    if(lotnum == prizenum){
        resolve("you won the lottery")//onFulfilment
    }
    else{
        reject("Betterluck next time")//onRejection
    }
})
pro.then(msg=>console.log(msg))//result value from resolve
.catch(err=>console.log(err))
