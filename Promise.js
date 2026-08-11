const count=false;
let countvalue=new Promise(function(resolve,reject){
    if(count){
        resolve(" there is a count value");
    }
    else{
        reject("There is no count value");
    }
});
console.log(countvalue) //promise
